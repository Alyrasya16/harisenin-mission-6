import logo from "../../../assets/icons/logo-text.png"
import styles from "./AuthHeader.module.css"

const AuthHeader = ({ title, subtitle }) => (
  <header className={styles.header}>
    <img className={styles.logo} src={logo} alt="CHILL" />
    <div className={styles.copy}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  </header>
)

export default AuthHeader
