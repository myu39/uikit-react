import styles from "./styles.module.scss"
import { TitleWithSubtitleProps } from "./types"

export const TitleWithSubtitlePresenter = ( { title, subtitle, hasUnderline } : TitleWithSubtitleProps) => {
  return (
    <div className={`${styles["c-title-with-subtitle"]} ${hasUnderline ? styles["c-title-with-subtitle--underline"] : ""}`}>
      <span className={styles["c-title-with-subtitle__subtitle"]}>{subtitle}</span>
      <h2 className={styles["c-title-with-subtitle__title"]}>{title}</h2>
    </div>
  )
}