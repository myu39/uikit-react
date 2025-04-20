import styles from "./styles.module.scss"
import { GoogleMapEmbedProps } from "./types"

export const GoogleMapEmbedPresenter = ({src, id, title}: GoogleMapEmbedProps) => {
  return (
    <div id={id ? id : "googlemap"} className={styles['c-googlemap']}>
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