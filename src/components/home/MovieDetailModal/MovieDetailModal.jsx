import { useEffect, useRef, useState } from "react";
import { CATALOG, getMovieDetails } from "../../../data/mockMovies";
import HomeIcon from "../HomeIcon";
import styles from "./MovieDetailModal.module.css";

const MovieDetailModal = ({
  movie,
  isSaved,
  savingDisabled = false,
  storageError = "",
  onClose,
  onToggleSaved,
  onSelectMovie,
}) => {
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const [playMessage, setPlayMessage] = useState("");
  const image = movie.previewImage ?? movie.image;
  const typeLabel = movie.type === "series" ? "Series" : "Film";
  const title = movie.displayTitle ?? movie.title;
  const recommendations =
    movie.id === "guardians-of-the-galaxy"
      ? ["the-tomorrow-war", "ant-man-and-the-wasp-quantumania", "avatar"]
          .map((id) => CATALOG.find((item) => item.id === id))
          .filter(Boolean)
      : CATALOG.filter((item) => item.id !== movie.id).slice(0, 3);

  useEffect(() => {
    const previousActiveElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const focusableButtons =
          dialogRef.current?.querySelectorAll("button:not(:disabled)");
        if (!focusableButtons?.length) return;

        const firstButton = focusableButtons[0];
        const lastButton = focusableButtons[focusableButtons.length - 1];
        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (previousActiveElement instanceof HTMLElement && previousActiveElement.isConnected) {
        previousActiveElement.focus();
      }
    };
  }, [onClose]);

  return (
    <div
      className={styles.backdrop}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-detail-title"
      >
        <div className={styles.hero}>
          {image && <img className={styles.heroImage} src={image} alt="" />}
          <div className={styles.heroShade} />
          <button
            ref={closeButtonRef}
            className={styles.closeButton}
            type="button"
            aria-label="Tutup detail"
            onClick={onClose}
          >
            <HomeIcon name="close" size={20} />
          </button>
          <div className={styles.heroTitle}>
            <h2 id="movie-detail-title">{title}</h2>
            <div className={styles.heroActions}>
              <button
                className={styles.playButton}
                type="button"
                onClick={() => setPlayMessage("Pemutaran belum tersedia.")}
              >
                Mulai
              </button>
              <button
                className={styles.heroSaveButton}
                type="button"
                aria-label={isSaved ? "Hapus dari Daftar Saya" : "Tambahkan ke Daftar Saya"}
                aria-pressed={isSaved}
                onClick={onToggleSaved}
                disabled={savingDisabled}
              >
                <HomeIcon name={isSaved ? "check" : "plus"} size={20} />
              </button>
              {movie.isPremium ? (
                <span className={styles.premiumBadge}>Premium</span>
              ) : (
                <span className={styles.typeLabel}>{typeLabel}</span>
              )}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.detailsGrid}>
            <div>
              <div className={styles.metadata}>
                {movie.releaseYear && <span>{movie.releaseYear}</span>}
                {movie.rating && (
                  <span className={styles.rating}>
                    <HomeIcon name="star" size={15} /> {movie.rating}
                  </span>
                )}
                {movie.ageRating && <span className={styles.ageRating}>{movie.ageRating}</span>}
                {movie.duration && <span>{movie.duration}</span>}
                {movie.badge && <span>{movie.badge}</span>}
              </div>
              {movie.description && <p className={styles.description}>{movie.description}</p>}
              {playMessage && (
                <p className={styles.playMessage} role="status">
                  {playMessage}
                </p>
              )}
            </div>

            <dl className={styles.credits} aria-label="Informasi film">
              <div>
                <dt>Pemeran</dt>
                <dd>{movie.cast ?? "Informasi pemeran belum tersedia"}</dd>
              </div>
              <div>
                <dt>Genre</dt>
                <dd>{movie.genres?.join(", ") ?? "Belum tersedia"}</dd>
              </div>
              <div>
                <dt>Pembuat Film</dt>
                <dd>{movie.filmmaker ?? "Informasi pembuat belum tersedia"}</dd>
              </div>
            </dl>
          </div>

          {storageError && (
            <p className={styles.storageError} role="alert">
              {storageError}
            </p>
          )}

          {recommendations.length > 0 && (
            <section className={styles.recommendations} aria-labelledby="recommendations-heading">
              <h3 id="recommendations-heading">Rekomendasi Serupa</h3>
              <div className={styles.recommendationList}>
                {recommendations.map((recommendation) => (
                  <button
                    key={recommendation.id}
                    className={styles.recommendationCard}
                    type="button"
                    aria-label={`Lihat rekomendasi ${recommendation.title}`}
                    onClick={() => {
                      setPlayMessage("");
                      onSelectMovie?.(getMovieDetails(recommendation));
                    }}
                  >
                    <img src={recommendation.image} alt="" loading="lazy" />
                    <span>{recommendation.title}</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
};

export default MovieDetailModal;
