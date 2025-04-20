
import { TitleWithSubtitlePresenter } from "./presenter";
import { TitleWithSubtitleProps } from "./types";


// Practical container layer
export const TitleWithSubtitle = (props : TitleWithSubtitleProps) => {
  return (
    <TitleWithSubtitlePresenter {...props} />
  )
}