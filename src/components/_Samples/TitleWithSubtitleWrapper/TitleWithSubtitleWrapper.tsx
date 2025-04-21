import { TitleWithSubtitle } from "../../TitleWithSubtitle"
import { TitleWithSubtitleProps } from "../../TitleWithSubtitle/types"
// either css or scss is available
import "./sample.scss"

export const TitleWithSubtitleWrapper = ({...props}: TitleWithSubtitleProps) => {
  return (
    <div className={'custom-wrapper'}>
      <TitleWithSubtitle {...props} />
    </div>
  )
}