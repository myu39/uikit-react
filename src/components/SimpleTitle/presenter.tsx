import styles from "./styles.module.scss";
import { SimpleTitleProps } from "./types";

export const SimpleTitlePresenter = ({title, tagType} : SimpleTitleProps) => {
  const Tag = tagType

  const baseClass = "c-simple-title";
  const modifierClass = baseClass + "--" + tagType

  return (
    <Tag className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {title}
    </Tag>
  )
}