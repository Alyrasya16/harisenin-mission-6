import { useRef } from "react"
import MovieCard from "../MovieCard/MovieCard"
import HomeIcon from "../HomeIcon"
import styles from "./MovieRow.module.css"

const MovieRow = ({ id, title, movies, variant = "portrait" }) => {
  const listRef = useRef(null)

  const scroll = (direction) => {
    listRef.current?.scrollBy({ left: direction * 600, behavior: "smooth" })
  }

  return (
    <section
      className={`${styles.row} ${variant === "landscape" ? styles.landscapeRow : styles.portraitRow}`}
      id={id}
      aria-label={title}
    >
      <div className={styles.heading}>
        <h2>{title}</h2>
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
          <MovieCard key={movie.id} movie={movie} variant={variant} />
        ))}
      </div>
    </section>
  )
}

export default MovieRow
