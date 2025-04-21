import styles from "./styles.module.scss"
import { TitleWithSubtitleProps } from "./types"

/**
 * 
 * 'pjClass' is a prop that is used to override this css styles
 */
export const TitleWithSubtitlePresenter = ( { title, subtitle, hasUnderline, stackType, writingMode, pjClass } : TitleWithSubtitleProps) => {

  const baseClass = "c-title-with-subtitle"

  const containerClassName = [
    baseClass,
    styles[baseClass],
    hasUnderline && `${styles[baseClass + "--underline"]} ${baseClass + "--underline"}`,
    stackType ? `${styles[baseClass + "--" + stackType]} ${baseClass}--${stackType}` : `${styles[baseClass + "--vstack"]} ${baseClass + "--vstack"}`,
    writingMode ? `${styles[baseClass + "--" + writingMode]} ${baseClass}--${writingMode}` : `${styles[baseClass] + "--hwrite"} ${baseClass + "--hwrite"}`,
    pjClass ?? ""
  ].filter(Boolean).join(" ")
  

  // const baseClass = "c-title-with-subtitle"
  // const modifierUnderlineClass = hasUnderline ? baseClass + "--underline" : ""
  // const modifierStackClass = stackType ? baseClass + "--" + stackType : baseClass + "--vstack"
  // const modifierVerticalClass = writingMode ? baseClass + "--" + writingMode : baseClass + "--hwrite"

  return (
    // <div className={`${styles[baseClass]} ${modifierUnderlineClass ? styles[modifierUnderlineClass] : ""} ${styles[modifierStackClass]} ${styles[modifierVerticalClass]} ${pjClass ?? ""}`}>
    <div className={containerClassName}>
      <span className={`${styles[baseClass + "__subtitle"]} ${baseClass + "__subtitle"}`}>{subtitle}</span>
      <h2 className={`${styles[baseClass + "__title"]} ${baseClass + "__title"}`}>{title}</h2>
    </div>
  )
}