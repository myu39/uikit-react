import styles from "./styles.module.scss";
import { ArticleLinkWithLabelType } from "./types";

export const ArticleLinkWithLabelPresenter = ({
  title, date, categoryItem, linkTo, pjClass
} : ArticleLinkWithLabelType) => {

  const baseClass = "c-article"

  return (
    
    <div className={`${styles[baseClass]} ${baseClass} ${pjClass ?? ""}`}>
      <div className={`${styles[baseClass + "__info"]} ${baseClass + "__info"}`}>
        <time dateTime={date}>{date}</time>
        {categoryItem && (
          categoryItem.slug ? (
            <a href={categoryItem.slug && categoryItem.slug} className={`${styles[baseClass + "__category-link"]} ${baseClass + "__category-link"}`}>
              {categoryItem.name}
            </a>
          ) : (
            <div className={`${styles[baseClass + '__category']} ${baseClass + '__category'}`}>
              {categoryItem.name}
            </div>
          )
        )}
      </div>
      <h3 className={`${styles[baseClass + "__title"]} ${baseClass + "__title"}`}><a href={linkTo}>{title}</a></h3>
    </div>
  )
}