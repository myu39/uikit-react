import { GoogleMapEmbedPresenter } from "./presenter";
import { GoogleMapEmbedProps } from "./types";

export const GoogleMapEmbed = ({...props}: GoogleMapEmbedProps) => {
  return (
    <GoogleMapEmbedPresenter {...props} />
  )
}