import { useState } from "react"
import HomeIcon from "../HomeIcon"
import styles from "./MovieCard.module.css"

const MovieCard = ({
  movie,
  variant = "portrait",
  isSaved = false,
  onToggleSaved,
  onShowDetails,
  savingDisabled = false,
}) => {
  const isLandscape = variant === "landscape"
  const isGrid = variant === "grid"
  const [playMessage, setPlayMessage] = useState("")

  return (
    <article
      className={`${styles.card} ${isLandscape ? styles.landscape : isGrid ? styles.grid : styles.portrait}`}
    >
      <button
        className={styles.posterTrigger}
        type="button"
        aria-label={`Lihat detail ${movie.title}`}
        onClick={() => onShowDetails?.(movie)}
        disabled={!onShowDetails}
      >
        {movie.image ? (
          <img className={styles.poster} src={movie.image} alt="" loading="lazy" />
        ) : (
          <span className={styles.posterFallback} aria-hidden="true">
            <span>THE</span>
            <strong>BATMAN</strong>
          </span>
        )}
        <span className={styles.shade} />
      </button>
      {(movie.isPremium || (movie.badge && movie.badge !== "Top 10")) && (
        <div className={styles.badgeGroup}>
          {movie.isPremium && (
            <span className={styles.premiumBadge} aria-label="Konten Premium">
              Premium
            </span>
          )}
          {movie.badge && movie.badge !== "Top 10" && (
            <span className={`${styles.badge} ${styles.episodeBadge}`}>
              {movie.badge}
            </span>
          )}
        </div>
      )}
      {movie.badge === "Top 10" && (
        <span className={`${styles.badge} ${styles.topBadge}`}>
          <span className={styles.topBadgeText}>
            <span>Top</span>
            <strong>10</strong>
          </span>
        </span>
      )}
      {isLandscape ? (
        <div className={styles.landscapeDetails}>
          <h3>{movie.title}</h3>
          <span className={styles.rating}>
            <HomeIcon name="star" size={14} /> {movie.rating}
          </span>
        </div>
      ) : (
        <>
          <div className={styles.preview}>
            <div className={styles.previewImage}>
              <img src={movie.previewImage} alt="" loading="lazy" />
            </div>
            <div className={styles.previewBody}>
              <div className={styles.previewActions}>
                <button
                  className={`${styles.previewAction} ${styles.playAction}`}
                  type="button"
                  aria-label={`Mulai ${movie.title}`}
                  onClick={() => setPlayMessage("Pemutaran belum tersedia.")}
                >
                  <HomeIcon name="play" size={16} />
                </button>
                <button
                  className={`${styles.previewAction} ${styles.saveAction}`}
                  type="button"
                  aria-label={isSaved ? `Hapus ${movie.title} dari Daftar Saya` : `Tambahkan ${movie.title} ke Daftar Saya`}
                  aria-pressed={isSaved}
                  onClick={() => onToggleSaved?.(movie)}
                  disabled={!onToggleSaved || savingDisabled}
                >
                  <HomeIcon name={isSaved ? "check" : "plus"} size={16} />
                </button>
                <button
                  className={`${styles.previewAction} ${styles.detailsAction}`}
                  type="button"
                  aria-label={`Buka detail ${movie.title}`}
                  onClick={() => onShowDetails?.(movie)}
                  disabled={!onShowDetails}
                >
                  <HomeIcon name="chevronDown" size={17} />
                </button>
              </div>
              <div className={styles.metadata}>
                <span>{movie.ageRating}</span>
                <span>{movie.duration}</span>
              </div>
              <p>{movie.genres?.join(" • ")}</p>
              {playMessage && (
                <p className={styles.playMessage} role="status">
                  {playMessage}
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </article>
  )
}

export default MovieCard
