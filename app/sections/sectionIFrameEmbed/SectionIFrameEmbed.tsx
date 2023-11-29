import styles from './SectionIFrameEmbed.module.css'
import { SectionIFrameEmbedProps } from './SectionIFrameEmbed.types'

export const SectionIFrameEmbed: React.FC<SectionIFrameEmbedProps> = ({ iFrameEmbed }) => {
  return <div className={styles.root} dangerouslySetInnerHTML={{ __html: iFrameEmbed }} />
}
