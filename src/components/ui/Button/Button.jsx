import styles from "./Button.module.css"

const Button = ({
  children,
  type = "button",
  variant = "primary",
  icon,
  onClick,
  className = "",
  ...buttonProps
}) => {
  const variantClass =
    variant === "outline" ? styles.outline : styles.primary

  return (
    <button
      className={`${styles.button} ${variantClass} ${className}`.trim()}
      type={type}
      onClick={onClick}
      {...buttonProps}
    >
      {icon && <img className={styles.icon} src={icon} alt="" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  )
}

export default Button
