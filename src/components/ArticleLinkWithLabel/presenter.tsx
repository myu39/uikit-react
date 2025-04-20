import styles from "./styles.module.scss";
import { ArticleLinkWithLabelType } from "./types";

export const ArticleLinkWithLabelPresenter = ({
  title, date, categoryItem, linkTo
} : ArticleLinkWithLabelType) => {
  return (
    <div className={styles["c-article"]}>
      <div className={styles["c-article__info"]}>
        <time dateTime={date}>{date}</time>
        {categoryItem && (
          categoryItem.slug ? (
            <a href={categoryItem.slug && categoryItem.slug} className={styles["c-article__category-link"]}>
              {categoryItem.name}
            </a>
          ) : (
            <div className={styles['c-article__category']}>
              {categoryItem.name}
            </div>
          )
        )}
      </div>
      <h3 className={styles["c-article__title"]}><a href={linkTo}>{title}</a></h3>
    </div>
  )
}