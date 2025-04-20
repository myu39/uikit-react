import { PicturePresenter } from "./presenter";
import { PictureType } from "./types";

export const Picture = (props: PictureType) => {
  return (
    <PicturePresenter {...props} />
  )
}