import styles from "./styles.module.scss";
import { MarkPrefixTitleType } from "./types";

export const MarkPrefixTitlePresenter = ({ title, tagType, markType } : MarkPrefixTitleType) => {
  const Tag = tagType
  const baseClass = "c-marked-title"
  const modifierClass = baseClass + "--" + markType

  return (
    <Tag className={`${styles[baseClass]} ${styles[modifierClass]}`}>
      {title}
    </Tag>
  )
}