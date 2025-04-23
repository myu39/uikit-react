import styles from "./styles.module.scss"
import { ArticleLinkProps } from "./types"

export const ArticleLinkPresenter = ({title, date, linkTo, pjClass}: ArticleLinkProps) => {

  // Add prop stack type

  const baseClass = "c-article-link"

  return (
    <article className={`${styles[baseClass]} ${baseClass} ${pjClass ?? pjClass}`}>
      <a href={linkTo}>
        {date && (
          <time className={`${styles[baseClass + "__time"]} ${[baseClass + "__time"]}`}  dateTime={date}>{date}</time>
        )}
        <h3 className={`${styles[baseClass + "__title"]} ${[baseClass + "__title"]}`}>{title}</h3>
      </a>
    </article>
  )
}