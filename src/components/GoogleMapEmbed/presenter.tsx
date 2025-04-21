import styles from "./styles.module.scss"
import { GoogleMapEmbedProps } from "./types"

export const GoogleMapEmbedPresenter = ({ src, id, title, pjClass }: GoogleMapEmbedProps) => {
  return (
    <div id={id ? id : "googlemap"} className={`${styles['c-googlemap']} c-googlemap ${pjClass ?? ""}`}>
      <iframe 
        title={title? title : "Google Map"}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  )
}