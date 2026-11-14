import { useState } from "react"
import { Link, useNavigate } from "react-router"
import AuthHeader from "../../components/auth/AuthHeader/AuthHeader"
import AuthLayout from "../../components/auth/AuthLayout/AuthLayout"
import Button from "../../components/ui/Button/Button"
import Input from "../../components/ui/Input/Input"
import googleIcon from "../../assets/icons/google-icon.png"
import backgroundImage from "../../assets/images/bg-login.jpg"
import styles from "./LoginPage.module.css"

const LoginPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate("/home")
  }

  return (
    <AuthLayout backgroundImage={backgroundImage}>
      <div className={styles.content}>
        <AuthHeader title="Masuk" subtitle="Selamat datang kembali!" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <Input
              label="Username"
              name="username"
              placeholder="Masukkan username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              autoComplete="username"
            />
            <Input
              label="Kata Sandi"
              type="password"
              name="password"
              placeholder="Masukkan kata sandi"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <div className={styles.helperRow}>
            <span>
              Belum punya akun?{" "}
              <Link className={styles.helperLink} to="/register">
                Daftar
              </Link>
            </span>
            <span className={styles.forgotText}>Lupa kata sandi?</span>
          </div>
          <div className={styles.actions}>
            <Button type="submit">Masuk</Button>
            <div className={styles.divider}>Atau</div>
            <Button type="button" variant="outline" icon={googleIcon}>
              Masuk dengan Google
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default LoginPage