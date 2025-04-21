import styles from "./styles.module.scss";
import { PictureType } from "./types";

export const PicturePresenter = ({
  srcSP,
  srcSPWebp,
  srcPC,
  srcPCWebp,
  widthSP,
  heightSP,
  widthPC,
  heightPC,
  altText,
  isLazy,
  breakpoint
}: PictureType) => {

  const baseClass = "c-picture"

  return (
    <picture className={`${styles[baseClass]} ${baseClass}`}>
      {srcSPWebp && 
        <source 
          srcSet={srcSPWebp} 
          type="image/webp"
          media={`(max-width: ${breakpoint}px)`}
          {...(widthSP && { width: widthSP })} 
          {...(heightSP && { height: heightSP })} 
        />
      }
      {srcPCWebp && 
        <source 
          srcSet={srcPCWebp} 
          media={`(min-width: ${breakpoint && breakpoint + 1}px)`} 
          type="image/webp" 
          {...(widthPC && { width: widthPC })} 
          {...(heightPC && { height: heightPC })} 
        />
      }
      {srcPC && 
        <source 
          srcSet={srcPC} 
          media={`(min-width: ${breakpoint && breakpoint + 1}px)`} 
          type="image/png"
          {...(widthPC && { width: widthPC })} 
          {...(heightPC && { height: heightPC })} 
        />
      }
      <img 
        src={srcSP} 
        {...(widthSP && { width: widthSP })} 
        {...(heightSP && { height: heightSP })} 
        alt={altText}
        loading={isLazy ? "lazy": undefined}
      />
    </picture>
  )
}