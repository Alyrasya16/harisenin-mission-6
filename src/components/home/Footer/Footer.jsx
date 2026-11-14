import { useState } from "react"
import { Link } from "react-router"
import { useMediaQuery } from "react-responsive"
import logoText from "../../../assets/icons/logo-text.png"
import HomeIcon from "../HomeIcon"
import styles from "./Footer.module.css"

const defaultGenreColumns = [
  ["Aksi", "Anak-anak", "Anime", "Britania"],
  ["Drama", "Fantasi Ilmiah & Fantasi", "Kejahatan", "KDrama"],
  ["Komedi", "Petualangan", "Perang", "Romantis"],
  ["Sains & Alam", "Thriller", "Misteri", "Film"],
]

const defaultHelpLinks = ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"]

const Footer = ({
  genreColumns = defaultGenreColumns,
  helpLinks = defaultHelpLinks,
  genreTitle = "Genre",
  helpTitle = "Bantuan",
  genreHref = "#film",
  helpHref = "#bantuan",
  copyrightText = "@2023 Chill All Rights Reserved.",
}) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  const [openMenu, setOpenMenu] = useState({ genre: false, help: false })

  const toggleMenu = (menu) => {
    if (!isDesktop) {
      setOpenMenu((current) => ({ ...current, [menu]: !current[menu] }))
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Link to="/home" aria-label="CHILL - Beranda">
          <img src={logoText} alt="CHILL" />
        </Link>
        <p>{copyrightText}</p>
      </div>

      <section className={styles.footerSection}>
        <button
          className={styles.sectionHeading}
          type="button"
          aria-expanded={isDesktop || openMenu.genre}
          onClick={() => toggleMenu("genre")}
        >
          <span>{genreTitle}</span>
          <HomeIcon name="chevronRight" className={openMenu.genre ? styles.expanded : ""} />
        </button>
        <div className={`${styles.genreGrid} ${openMenu.genre ? styles.open : ""}`}>
          {genreColumns.map((column, index) => (
            <ul key={index}>
              {column.map((genre) => (
                <li key={genre}><a href={genreHref}>{genre}</a></li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <section className={styles.footerSection}>
        <button
          className={styles.sectionHeading}
          type="button"
          aria-expanded={isDesktop || openMenu.help}
          onClick={() => toggleMenu("help")}
        >
          <span>{helpTitle}</span>
          <HomeIcon name="chevronRight" className={openMenu.help ? styles.expanded : ""} />
        </button>
        <ul className={`${styles.helpList} ${openMenu.help ? styles.open : ""}`}>
          {helpLinks.map((item) => <li key={item}><a href={helpHref}>{item}</a></li>)}
        </ul>
      </section>
    </footer>
  )
}

export default Footer
