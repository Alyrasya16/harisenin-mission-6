import styles from "./AuthLayout.module.css"

const AuthLayout = ({ backgroundImage, children }) => (
  <main
    className={styles.page}
    style={{ backgroundImage: `url("${backgroundImage}")` }}
  >
    <section className={styles.card}>{children}</section>
  </main>
)

export default AuthLayout
