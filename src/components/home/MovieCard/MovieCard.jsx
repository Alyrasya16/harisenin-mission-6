import HomeIcon from "../HomeIcon"
import styles from "./MovieCard.module.css"

const MovieCard = ({ movie, variant = "portrait" }) => {
  const isLandscape = variant === "landscape"

  return (
    <article className={`${styles.card} ${isLandscape ? styles.landscape : styles.portrait}`}>
      {movie.image ? (
        <img className={styles.poster} src={movie.image} alt="" loading="lazy" />
      ) : (
        <div className={styles.posterFallback} aria-hidden="true">
          <span>THE</span>
          <strong>BATMAN</strong>
        </div>
      )}
      <div className={styles.shade} />
      {movie.badge && (
        <span className={`${styles.badge} ${movie.badge === "Top 10" ? styles.topBadge : styles.episodeBadge}`}>
          {movie.badge === "Top 10" ? (
            <span className={styles.topBadgeText}>
              <span>Top</span>
              <strong>10</strong>
            </span>
          ) : movie.badge}
        </span>
      )}

      {isLandscape ? (
        <div className={styles.landscapeDetails}>
          <h3>{movie.title}</h3>
          <span className={styles.rating}><HomeIcon name="star" size={14} /> {movie.rating}</span>
        </div>
      ) : (
        <>
          <span className={styles.ratingPill}><HomeIcon name="star" size={13} /> {movie.rating}</span>
          <div className={styles.preview}>
            <div className={styles.previewImage}>
              <img src={movie.previewImage} alt="" loading="lazy" />
            </div>
            <div className={styles.previewBody}>
              <div className={styles.previewActions}>
                <button className={styles.playAction} type="button" aria-label={`Putar ${movie.title}`}>
                  <HomeIcon name="play" size={18} />
                </button>
                <button type="button" aria-label={`Tambahkan ${movie.title} ke daftar saya`}>
                  <HomeIcon name="check" size={18} />
                </button>
                <button type="button" aria-label={`Detail ${movie.title}`}>
                  <HomeIcon name="chevronDown" size={18} />
                </button>
              </div>
              <div className={styles.metadata}>
                <span>{movie.ageRating}</span>
                <span>{movie.duration}</span>
              </div>
              <p>{movie.genres?.join(" • ")}</p>
            </div>
          </div>
        </>
      )}
    </article>
  )
}

export default MovieCard
