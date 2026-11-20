import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../../components/home/Footer/Footer";
import HeroBanner from "../../components/home/HeroBanner/HeroBanner";
import MovieDetailModal from "../../components/home/MovieDetailModal/MovieDetailModal";
import MovieRow from "../../components/home/MovieRow/MovieRow";
import Navbar from "../../components/home/Navbar/Navbar";
import {
  CONTINUE_WATCHING,
  getCatalogId,
  getCatalogType,
  getMovieDetails,
  HERO_DATA,
  NEW_RELEASES,
  TOP_RATING,
  TRENDING_MOVIES,
} from "../../data/mockMovies";
import { useSavedMovies } from "../../hooks/useSavedMovies";
import styles from "./HomePage.module.css";

const navigationItems = [
  { label: "Series", href: "/series" },
  { label: "Film", href: "/film" },
  { label: "Daftar Saya", href: "/my-list" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { savedIds, storageError, toggleSaved } = useSavedMovies();
  const savedIdSet = useMemo(() => new Set(savedIds), [savedIds]);
  const handleCloseDetails = useCallback(() => setSelectedMovie(null), []);

  const handleShowDetails = (movie) => {
    setSelectedMovie(getMovieDetails({
      ...movie,
      id: getCatalogId(movie),
      type: getCatalogType(movie),
    }));
  };

  const handleToggleSaved = (movie) => toggleSaved(getCatalogId(movie));
  const handleShowFeaturedDetails = () =>
    handleShowDetails({
      ...HERO_DATA,
      image: HERO_DATA.backdropImage,
      previewImage: HERO_DATA.backdropImage,
    });
  const profileItems = [
    { label: "Profil Saya", icon: "user", onSelect: () => navigate("/profile") },
    {
      label: "Ubah Premium",
      icon: "crown",
      onSelect: () => navigate("/profile#premium"),
    },
    { label: "Keluar", icon: "logout", onSelect: () => navigate("/login") },
  ];

  return (
    <div className={styles.homePage}>
      <Navbar navigationItems={navigationItems} profileItems={profileItems} />
      <main>
        {storageError && (
          <p className={styles.storageError} role="alert">
            {storageError}
          </p>
        )}
        <HeroBanner data={HERO_DATA} onShowDetails={handleShowFeaturedDetails} />
        <div className={styles.rows}>
          <MovieRow
            id="daftar-saya"
            title="Melanjutkan Tonton Film"
            movies={CONTINUE_WATCHING}
            variant="landscape"
            savedIds={savedIdSet}
            savingDisabled={Boolean(storageError)}
            onToggleSaved={handleToggleSaved}
            onShowDetails={handleShowDetails}
          />
          <MovieRow
            id="series"
            title="Top Rating Film dan Series Hari ini"
            movies={TOP_RATING}
            variant="portrait"
            savedIds={savedIdSet}
            savingDisabled={Boolean(storageError)}
            onToggleSaved={handleToggleSaved}
            onShowDetails={handleShowDetails}
          />
          <MovieRow
            id="film"
            title="Film Trending"
            movies={TRENDING_MOVIES}
            variant="portrait"
            savedIds={savedIdSet}
            savingDisabled={Boolean(storageError)}
            onToggleSaved={handleToggleSaved}
            onShowDetails={handleShowDetails}
          />
          <MovieRow
            id="rilis-baru"
            title="Rilis Baru"
            movies={NEW_RELEASES}
            variant="portrait"
            savedIds={savedIdSet}
            savingDisabled={Boolean(storageError)}
            onToggleSaved={handleToggleSaved}
            onShowDetails={handleShowDetails}
          />
        </div>
      </main>
      {selectedMovie && (
        <MovieDetailModal
          movie={selectedMovie}
          isSaved={savedIdSet.has(selectedMovie.id)}
          savingDisabled={Boolean(storageError)}
          storageError={storageError}
          onClose={handleCloseDetails}
          onToggleSaved={() => toggleSaved(selectedMovie.id)}
          onSelectMovie={handleShowDetails}
        />
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
