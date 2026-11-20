import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../../components/home/Footer/Footer";
import HeroBanner from "../../components/home/HeroBanner/HeroBanner";
import HomeIcon from "../../components/home/HomeIcon";
import MovieCard from "../../components/home/MovieCard/MovieCard";
import MovieDetailModal from "../../components/home/MovieDetailModal/MovieDetailModal";
import MovieRow from "../../components/home/MovieRow/MovieRow";
import Navbar from "../../components/home/Navbar/Navbar";
import {
  CATALOG,
  FILM_CONTINUE_WATCHING,
  FILM_HERO,
  FILM_NEW_RELEASES,
  FILM_PROMOTED,
  FILM_TOP_RATING,
  FILM_TRENDING,
  GENRES,
  SERIES_CONTINUE_WATCHING,
  SERIES_HERO,
  SERIES_NEW_RELEASES,
  SERIES_PROMOTED,
  SERIES_TOP_RATING,
  SERIES_TRENDING,
  filterMoviesByGenre,
  getCatalogId,
  getMovieDetails,
} from "../../data/mockMovies";
import { useSavedMovies } from "../../hooks/useSavedMovies";
import styles from "./CatalogPage.module.css";

const navigationItems = [
  { label: "Series", href: "/series" },
  { label: "Film", href: "/film" },
  { label: "Daftar Saya", href: "/my-list" },
];

const asPremiumMovies = (movies) =>
  movies.map((movie) => ({ ...movie, isPremium: true }));

const pageDetails = {
  series: {
    title: "Series",
    hero: SERIES_HERO,
    sections: [
      { title: "Melanjutkan Tonton Series", movies: SERIES_CONTINUE_WATCHING, variant: "landscape" },
      { title: "Series Persembahan Chill", movies: asPremiumMovies(SERIES_PROMOTED) },
      { title: "Top Rating Series Hari ini", movies: SERIES_TOP_RATING },
      { title: "Series Trending", movies: SERIES_TRENDING },
      { title: "Rilis Baru", movies: SERIES_NEW_RELEASES },
    ],
  },
  film: {
    title: "Film",
    hero: FILM_HERO,
    sections: [
      { title: "Melanjutkan Tonton Film", movies: FILM_CONTINUE_WATCHING, variant: "landscape" },
      { title: "Film Persembahan Chill", movies: asPremiumMovies(FILM_PROMOTED) },
      { title: "Top Rating Film Hari ini", movies: FILM_TOP_RATING },
      { title: "Film Trending", movies: FILM_TRENDING },
      { title: "Rilis Baru", movies: FILM_NEW_RELEASES },
    ],
  },
  saved: {
    title: "Daftar Saya",
  },
};

const CatalogPage = ({ type }) => {
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isGenreMenuOpen, setIsGenreMenuOpen] = useState(false);
  const { savedIds, storageError, toggleSaved } = useSavedMovies();
  const savedIdSet = useMemo(() => new Set(savedIds), [savedIds]);
  const page = pageDetails[type];
  const featuredMovie =
    type === "saved"
      ? null
      : {
          ...page.hero,
          id: getCatalogId(page.hero),
          catalogId: getCatalogId(page.hero),
          image: page.hero.backdropImage,
          previewImage: page.hero.backdropImage,
          type,
        };
  const movies =
    type === "saved" ? CATALOG.filter((movie) => savedIdSet.has(getCatalogId(movie))) : [];
  const hasSavedListError = type === "saved" && Boolean(storageError);

  const handleCloseDetails = useCallback(() => setSelectedMovie(null), []);
  const handleShowDetails = useCallback((movie) => setSelectedMovie(getMovieDetails(movie)), []);
  const handleToggleSaved = useCallback((movie) => toggleSaved(movie.id), [toggleSaved]);
  const profileItems = [
    { label: "Profil Saya", icon: "user", onSelect: () => navigate("/profile") },
    {
      label: "Ubah Premium",
      icon: "crown",
      onSelect: () => navigate("/profile#premium"),
    },
    { label: "Keluar", icon: "logout", onSelect: () => navigate("/login") },
  ];

  const filteredSections =
    type !== "saved"
      ? page.sections.map((section) => ({
          ...section,
          variant: section.variant ?? "portrait",
          movies: filterMoviesByGenre(section.movies, selectedGenre),
        }))
      : [];

  return (
    <div className={`${styles.catalogPage} ${type === "saved" ? styles.savedPage : ""}`}>
      <Navbar
        homePath="/home"
        navigationItems={navigationItems}
        profileItems={profileItems}
      />
      <main className={styles.main}>
        {type !== "saved" ? (
          <>
            <div className={styles.genreBar}>
              <button
                className={styles.genreButton}
                type="button"
                aria-expanded={isGenreMenuOpen}
                aria-controls="genre-menu"
                onClick={() => setIsGenreMenuOpen((isOpen) => !isOpen)}
              >
                Genre
                <HomeIcon
                  className={`${styles.genreChevron} ${isGenreMenuOpen ? styles.genreChevronOpen : ""}`}
                  name="chevronDown"
                  size={16}
                />
              </button>
              {selectedGenre && (
                <button
                  className={styles.clearGenre}
                  type="button"
                  onClick={() => setSelectedGenre("")}
                >
                  {selectedGenre} <span aria-hidden="true">×</span>
                  <span className={styles.visuallyHidden}>Hapus filter</span>
                </button>
              )}
              {isGenreMenuOpen && (
                <div className={styles.genreMenu} id="genre-menu">
                  {GENRES.map((genre) => (
                    <button
                      key={genre}
                      className={selectedGenre === genre ? styles.activeGenre : ""}
                      type="button"
                      aria-pressed={selectedGenre === genre}
                      onClick={() => {
                        setSelectedGenre(genre);
                        setIsGenreMenuOpen(false);
                      }}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <h1 className={styles.visuallyHidden}>{page.title}</h1>
            <HeroBanner
              data={page.hero}
              onShowDetails={() => setSelectedMovie(getMovieDetails(featuredMovie))}
            />
          </>
        ) : (
          <header className={styles.heading}>
            <h1>{page.title}</h1>
          </header>
        )}

        {storageError && (
          <p className={styles.storageError} role="alert">
            {storageError}
          </p>
        )}

        {type === "saved" ? (
          movies.length > 0 && !hasSavedListError ? (
            <div className={styles.grid}>
              {movies.map((movie) => (
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
          ) : !hasSavedListError ? (
            <section className={styles.emptyState} aria-live="polite">
              <h2>Belum ada judul tersimpan</h2>
              <p>
                Buka detail film atau series, lalu simpan ke Daftar Saya.
              </p>
              <button type="button" onClick={() => navigate("/home")}>
                Jelajahi katalog
              </button>
            </section>
          ) : null
        ) : (
          <div className={styles.sections}>
            {filteredSections.map((section) =>
              section.movies.length > 0 ? (
                <MovieRow
                  key={section.title}
                  title={section.title}
                  movies={section.movies}
                  variant={section.variant}
                  savedIds={savedIdSet}
                  savingDisabled={Boolean(storageError)}
                  onToggleSaved={handleToggleSaved}
                  onShowDetails={handleShowDetails}
                />
              ) : null,
            )}
            {selectedGenre && filteredSections.every((section) => section.movies.length === 0) && (
              <p className={styles.noGenreResults} role="status">
                Belum ada {page.title.toLowerCase()} dengan genre {selectedGenre}.
              </p>
            )}
          </div>
        )}
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

export default CatalogPage;
