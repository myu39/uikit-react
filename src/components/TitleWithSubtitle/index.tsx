
import { TitleWithSubtitlePresenter } from "./presenter";
import { TitleWithSubtitleProps } from "./types";

/**
 * 
 * This is the practical container layer
 * you can override css styles by wrapping this component and padding class from your wrapper your write.
 * @param props 
 * @returns 
 */
export const TitleWithSubtitle = (props : TitleWithSubtitleProps) => {
  return (
    <TitleWithSubtitlePresenter {...props} />
  )
}