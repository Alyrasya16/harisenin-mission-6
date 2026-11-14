import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router"
import logoIcon from "../../../assets/icons/logo.png"
import logoText from "../../../assets/icons/logo-text.png"
import userIcon from "../../../assets/icons/user-icon.png"
import HomeIcon from "../HomeIcon"
import styles from "./Navbar.module.css"

const defaultNavigationItems = [
  { label: "Series", href: "#series" },
  { label: "Film", href: "#film" },
  { label: "Daftar Saya", href: "#daftar-saya" },
]

const Navbar = ({
  navigationItems = defaultNavigationItems,
  profileItems,
  homePath = "/home",
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const resolvedProfileItems = profileItems ?? [
    { label: "Profil Saya", icon: "user" },
    { label: "Ubah Premium", icon: "crown" },
    { label: "Keluar", icon: "logout", onSelect: () => navigate("/login") },
  ]

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <Link className={styles.logoLink} to={homePath} aria-label="CHILL - Beranda">
          <img className={styles.mobileLogo} src={logoIcon} alt="CHILL" />
          <img className={styles.desktopLogo} src={logoText} alt="CHILL" />
        </Link>
        <nav className={styles.navigation} aria-label="Navigasi utama">
          {navigationItems.map(({ label, href }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </div>

      <div className={styles.profile} ref={menuRef}>
        <button
          className={styles.profileButton}
          type="button"
          aria-label="Buka menu profil"
          aria-expanded={isOpen}
          aria-haspopup="menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <img className={styles.avatar} src={userIcon} alt="" />
          <HomeIcon name="chevronDown" className={`${styles.chevron} ${isOpen ? styles.rotated : ""}`} />
        </button>
        {isOpen && (
          <div className={styles.dropdown} role="menu">
            {resolvedProfileItems.map(({ label, icon, onSelect }) => (
              <button
                key={label}
                type="button"
                role="menuitem"
                onClick={() => {
                  setIsOpen(false)
                  onSelect?.()
                }}
              >
                <HomeIcon name={icon} /> {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
