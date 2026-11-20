import { useState } from "react"
import { NavLink, useNavigate } from "react-router"
import AuthHeader from "../../components/auth/AuthHeader/AuthHeader"
import AuthLayout from "../../components/auth/AuthLayout/AuthLayout"
import Button from "../../components/ui/Button/Button"
import Input from "../../components/ui/Input/Input"
import googleIcon from "../../assets/icons/google-icon.png"
import backgroundImage from "../../assets/images/bg-register.jpg"
import styles from "./RegisterPage.module.css"

const RegisterPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError("Kata sandi dan konfirmasi kata sandi tidak sama.")
      return
    }

    setError("")
    navigate("/login")
  }

  return (
    <AuthLayout backgroundImage={backgroundImage}>
      <div className={styles.content}>
        <AuthHeader title="Daftar" subtitle="Selamat datang!" />
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
              autoComplete="new-password"
            />
            <Input
              label="Konfirmasi Kata Sandi"
              type="password"
              name="confirm-password"
              placeholder="Masukkan kata sandi"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              autoComplete="new-password"
            />
          </div>
          <div className={styles.helperRow}>
            Sudah punya akun?{" "}
            <NavLink className={styles.helperLink} to="/login">
              Masuk
            </NavLink>
          </div>
          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}
          <div className={styles.actions}>
            <Button type="submit">Daftar</Button>
            <div className={styles.divider}>Atau</div>
            <Button type="button" variant="outline" icon={googleIcon}>
              Daftar dengan Google
            </Button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default RegisterPage