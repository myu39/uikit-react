import { SimpleTitleType } from "./index.types";
import styles from "./style.module.scss";

export const SimpleTitlePresentator = ({title, tagType} : SimpleTitleType) => {
  const Tag = tagType

  const baseClass = "c-simple-title";
  const modifierClass = baseClass + "--" + tagType

  return (
    <Tag className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {title}
    </Tag>
  )
}