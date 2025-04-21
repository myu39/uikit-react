import styles from "./styles.module.scss";
import { MarkPrefixTitleType } from "./types";

export const MarkPrefixTitlePresenter = ({ title, tagType, markType, pjClass } : MarkPrefixTitleType) => {
  const Tag = tagType
  const baseClass = "c-marked-title"
  const modifierClass = baseClass + "--" + markType

  const containerClassName = [
    baseClass,
    styles[baseClass],
    modifierClass,
    styles[modifierClass],
    pjClass ?? ""
  ].filter(Boolean).join(" ")

  return (
    <Tag className={containerClassName}>
      {title}
    </Tag>
  )
}