import { useRef } from "react"
import { getCatalogId } from "../../../data/mockMovies"
import { Link } from "react-router"
import MovieCard from "../MovieCard/MovieCard"
import HomeIcon from "../HomeIcon"
import styles from "./MovieRow.module.css"

const MovieRow = ({
  id,
  title,
  movies,
  variant = "portrait",
  savedIds,
  savingDisabled,
  onToggleSaved,
  onShowDetails,
  viewAllHref,
}) => {
  const listRef = useRef(null)
  const isLandscape = variant === "landscape"

  const scroll = (direction) => {
    listRef.current?.scrollBy({ left: direction * 600, behavior: "smooth" })
  }

  return (
    <section
      className={`${styles.row} ${isLandscape ? styles.landscapeRow : styles.portraitRow}`}
      id={id}
      aria-label={title}
    >
      <div className={styles.heading}>
        <h2>{title}</h2>
        {viewAllHref && (
          <Link className={styles.viewAll} to={viewAllHref}>
            Lihat Semua
          </Link>
        )}
        <div className={styles.controls}>
          <button type="button" aria-label={`Gulir ${title} ke kiri`} onClick={() => scroll(-1)}>
            <HomeIcon name="chevronLeft" size={22} />
          </button>
          <button type="button" aria-label={`Gulir ${title} ke kanan`} onClick={() => scroll(1)}>
            <HomeIcon name="chevronRight" size={22} />
          </button>
        </div>
      </div>
      <div className={styles.list} ref={listRef}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            variant={variant}
            isSaved={savedIds?.has(getCatalogId(movie))}
            savingDisabled={savingDisabled}
            onToggleSaved={onToggleSaved}
            onShowDetails={onShowDetails}
          />
        ))}
      </div>
    </section>
  )
}

export default MovieRow
