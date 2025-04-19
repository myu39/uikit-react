import { SimpleTitlePresenter } from "./presenter"
import { SimpleTitleProps } from "./types"

export const SimpleTitle = (props: SimpleTitleProps) => {
  return (
    <SimpleTitlePresenter {...props} />
  )
}