import { useState } from "react"
import HomeIcon from "../HomeIcon"
import styles from "./HeroBanner.module.css"

const HeroBanner = ({ data }) => {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <section
      className={styles.hero}
      style={{ "--hero-image": `url("${data.backdropImage}")` }}
      aria-label={`Film sorotan: ${data.title}`}
    >
      <div className={styles.content}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className={styles.actions}>
          <button className={styles.playButton} type="button">
            <HomeIcon name="play" size={18} /> Mulai
          </button>
          <button className={styles.moreButton} type="button">
            <HomeIcon name="info" size={18} /> Selengkapnya
          </button>
          <span className={styles.ageRating}>{data.ageRating}</span>
        </div>
      </div>
      <button
        className={styles.soundButton}
        type="button"
        aria-label={isMuted ? "Nyalakan suara" : "Matikan suara"}
        aria-pressed={!isMuted}
        onClick={() => setIsMuted((muted) => !muted)}
      >
        <HomeIcon name={isMuted ? "volumeOff" : "volumeOn"} size={20} />
      </button>
    </section>
  )
}

export default HeroBanner
