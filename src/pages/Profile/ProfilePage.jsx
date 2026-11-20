import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import Footer from "../../components/home/Footer/Footer";
import HomeIcon from "../../components/home/HomeIcon";
import MovieCard from "../../components/home/MovieCard/MovieCard";
import MovieDetailModal from "../../components/home/MovieDetailModal/MovieDetailModal";
import Navbar from "../../components/home/Navbar/Navbar";
import userIcon from "../../assets/icons/user-icon.png";
import { CATALOG, getCatalogId, getMovieDetails } from "../../data/mockMovies";
import { useSavedMovies } from "../../hooks/useSavedMovies";
import styles from "./ProfilePage.module.css";

const PROFILE_STORAGE_KEY = "chill.profile.v1";
const DEFAULT_PROFILE = {
  username: "William",
  email: "william1980@gmail.com",
  avatar: userIcon,
  subscription: "inactive",
};

const readStoredProfile = () => {
  try {
    const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!storedProfile) return { profile: DEFAULT_PROFILE, error: "" };

    const parsedProfile = JSON.parse(storedProfile);
    if (
      typeof parsedProfile.username !== "string" ||
      typeof parsedProfile.email !== "string"
    ) {
      return {
        profile: DEFAULT_PROFILE,
        error: "Data profil tersimpan tidak valid. Simpan profil untuk memperbaruinya.",
      };
    }

    return {
      profile: {
        ...DEFAULT_PROFILE,
        ...parsedProfile,
        subscription: parsedProfile.subscription === "active" ? "active" : "inactive",
      },
      error: "",
    };
  } catch {
    return {
      profile: DEFAULT_PROFILE,
      error: "Profil tidak dapat dimuat dari penyimpanan browser.",
    };
  }
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const initialProfile = useMemo(() => readStoredProfile(), []);
  const [profile, setProfile] = useState(initialProfile.profile);
  const [username, setUsername] = useState(initialProfile.profile.username);
  const [email, setEmail] = useState(initialProfile.profile.email);
  const [avatar, setAvatar] = useState(initialProfile.profile.avatar || userIcon);
  const [profileError, setProfileError] = useState(initialProfile.error);
  const [profileNotice, setProfileNotice] = useState("");
  const profileNoticeTimeout = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { savedIds, storageError, toggleSaved } = useSavedMovies();
  const savedIdSet = useMemo(() => new Set(savedIds), [savedIds]);
  const savedMovies = CATALOG.filter((movie) => savedIdSet.has(getCatalogId(movie)));
  const isSubscribed = profile.subscription === "active";

  const showProfileNotice = (message) => {
    if (profileNoticeTimeout.current !== null) {
      window.clearTimeout(profileNoticeTimeout.current);
    }

    setProfileNotice(message);
    profileNoticeTimeout.current = window.setTimeout(() => {
      setProfileNotice("");
      profileNoticeTimeout.current = null;
    }, 3000);
  };

  useEffect(
    () => () => {
      if (profileNoticeTimeout.current !== null) {
        window.clearTimeout(profileNoticeTimeout.current);
      }
    },
    [],
  );

  const handleSaveProfile = (event) => {
    event.preventDefault();
    const updatedProfile = {
      ...profile,
      username: username.trim(),
      email: email.trim(),
      avatar,
    };

    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updatedProfile));
      setProfile(updatedProfile);
      setUsername(updatedProfile.username);
      setEmail(updatedProfile.email);
      setProfileError("");
      showProfileNotice("Profil berhasil disimpan.");
    } catch {
      setProfileError("Profil gagal disimpan. Periksa ruang penyimpanan browser.");
      setProfileNotice("");
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    event.target.value = "";

    if (!file.type.startsWith("image/")) {
      setProfileError("Pilih file gambar untuk foto profil.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setProfileError("Ukuran foto maksimal 2 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setAvatar(reader.result);
        setProfileError("");
        setProfileNotice("");
      } else {
        setProfileError("Foto profil tidak dapat dibaca.");
      }
    };
    reader.onerror = () => setProfileError("Foto profil tidak dapat dibaca.");
    reader.readAsDataURL(file);
  };

  const handleSubscribeDemo = () => {
    const updatedProfile = { ...profile, subscription: "active" };
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updatedProfile));
      setProfile(updatedProfile);
      setProfileError("");
      showProfileNotice("Mode demo: status premium diperbarui tanpa transaksi.");
    } catch {
      setProfileError("Status premium demo gagal disimpan.");
      setProfileNotice("");
    }
  };

  const handleCloseDetails = useCallback(() => setSelectedMovie(null), []);
  const handleShowDetails = useCallback((movie) => setSelectedMovie(getMovieDetails(movie)), []);
  const handleToggleSaved = useCallback((movie) => toggleSaved(movie.id), [toggleSaved]);
  const profileItems = [
    { label: "Profil Saya", icon: "user", onSelect: () => navigate("/profile") },
    {
      label: "Ubah Premium",
      icon: "crown",
      onSelect: () => document.getElementById("premium")?.scrollIntoView({ behavior: "smooth" }),
    },
    { label: "Keluar", icon: "logout", onSelect: () => navigate("/login") },
  ];

  return (
    <div className={styles.profilePage}>
      <Navbar
        homePath="/home"
        navigationItems={[
          { label: "Series", href: "/series" },
          { label: "Film", href: "/film" },
          { label: "Daftar Saya", href: "/my-list" },
        ]}
        profileItems={profileItems}
      />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Profil Saya</h1>
        {(profileError || storageError) && (
          <p className={styles.errorMessage} role="alert">
            {profileError || storageError}
          </p>
        )}
        {profileNotice && (
          <p className={styles.successMessage} role="status">
            {profileNotice}
          </p>
        )}

        <div className={styles.content}>
          <form className={styles.profileForm} onSubmit={handleSaveProfile}>
            <div className={styles.formHeading}>
              <img className={styles.avatar} src={avatar} alt="Foto profil" />
              <div>
                <label className={styles.uploadButton}>
                  Ubah Foto
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    aria-label="Ubah foto profil"
                  />
                </label>
                <p>
                  <HomeIcon name="file" size={14} />
                  Maksimal 2 MB
                </p>
              </div>
            </div>

            <label className={styles.field}>
              <span>Nama Pengguna</span>
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                autoComplete="name"
              />
              <span className={styles.editIcon} aria-hidden="true">
                <HomeIcon name="edit" size={16} />
              </span>
            </label>
            <label className={styles.field}>
              <span>Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
              />
            </label>
            <label className={styles.field}>
              <span>Kata Sandi</span>
              <input
                type="password"
                value=""
                placeholder="••••••••"
                readOnly
                aria-describedby="password-note"
              />
              <span className={styles.editIcon} aria-hidden="true">
                <HomeIcon name="edit" size={16} />
              </span>
              <small className={styles.visuallyHidden} id="password-note">
                Kata sandi tidak dapat diubah dari halaman demo ini.
              </small>
            </label>
            <button className={styles.saveButton} type="submit">
              Simpan
            </button>
          </form>

          <section
            className={`${styles.premiumCard} ${isSubscribed ? styles.activePremium : ""}`}
            id="premium"
            aria-labelledby="premium-heading"
          >
            <div className={styles.premiumHeading}>
              <span className={styles.crown} aria-hidden="true">
                🎉
              </span>
              <div>
                {isSubscribed && <span className={styles.activeBadge}>Aktif</span>}
                <h2 id="premium-heading">
                  {isSubscribed ? "Akun Premium Individual ✨" : "Saat ini anda belum berlangganan"}
                </h2>
                <p className={styles.premiumDescription}>
                  {isSubscribed
                    ? "Saat ini kamu sedang menggunakan akses akun premium."
                    : "Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!"}
                </p>
              </div>
            </div>
            {isSubscribed ? (
              <p className={styles.expiry}>Berlaku hingga 31 Desember 2023</p>
            ) : (
              <button
                className={styles.subscribeButton}
                type="button"
                onClick={handleSubscribeDemo}
              >
                Mulai Berlangganan
              </button>
            )}
            <p className={styles.demoNote}>Tampilan status ini merupakan simulasi, bukan transaksi.</p>
          </section>

          <section className={styles.savedSection} aria-labelledby="saved-heading">
            {savedMovies.length > 0 ? (
              <>
                <div className={styles.savedHeading}>
                  <h2 id="saved-heading">Daftar Saya</h2>
                  <Link to="/my-list">Lihat Semua</Link>
                </div>
                <div className={styles.savedGrid}>
                  {savedMovies.map((movie) => (
                    <MovieCard
                      key={getCatalogId(movie)}
                      movie={movie}
                      variant="grid"
                      isSaved={savedIdSet.has(getCatalogId(movie))}
                      savingDisabled={Boolean(storageError)}
                      onToggleSaved={handleToggleSaved}
                      onShowDetails={handleShowDetails}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className={styles.savedEmpty}>
                <div>
                  <h2 id="saved-heading">Daftar Saya</h2>
                  <p>Film dan series yang kamu simpan akan tampil di sini.</p>
                </div>
                <Link to="/my-list">Lihat Semua</Link>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          isSaved={savedIdSet.has(getCatalogId(selectedMovie))}
          savingDisabled={Boolean(storageError)}
          storageError={storageError}
          onClose={handleCloseDetails}
          onToggleSaved={() => toggleSaved(getCatalogId(selectedMovie))}
          onSelectMovie={handleShowDetails}
        />
      )}
    </div>
  );
};

export default ProfilePage;
