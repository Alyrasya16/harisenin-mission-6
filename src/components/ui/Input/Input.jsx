import { useState } from "react"
import eyeOffIcon from "../../../assets/icons/eye-off.png"
import eyeOnIcon from "../../../assets/icons/eye-on.png"
import styles from "./Input.module.css"

const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  autoComplete,
  id,
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === "password"
  const inputType = isPassword && showPassword ? "text" : type
  const inputId = id ?? `auth-${name}`

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <div className={styles.control}>
        <input
          className={styles.input}
          id={inputId}
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          {...inputProps}
        />
        {isPassword && (
          <button
            className={styles.visibilityButton}
            type="button"
            aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((isVisible) => !isVisible)}
          >
            <img
              src={showPassword ? eyeOnIcon : eyeOffIcon}
              alt=""
              aria-hidden="true"
            />
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
