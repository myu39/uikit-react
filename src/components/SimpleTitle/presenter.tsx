import styles from "./styles.module.scss";
import { SimpleTitleProps } from "./types";

export const SimpleTitlePresenter = ({title, tagType, pjClass} : SimpleTitleProps) => {
  const Tag = tagType

  const baseClass = "c-simple-title";
  const modifierClass = baseClass + "--" + tagType

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