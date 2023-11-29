import { Typography, Button } from '@overdose/components'

import styles from './ArticlePageLinksSection.module.css'
import { ArticlePageLinksSectionProps } from './ArticlePageLinksSection.types'

export const ArticlePageLinksSection: React.FC<ArticlePageLinksSectionProps> = ({ data }) => {
  if (!data?.links) {
    return null
  }

  const { title, links } = data
  /*
   * Scroll down to the hash linked section when clicked
   *
   * @param event - takes the event as argument on click
   * */
  const goToLinkedSection = (event: any) => {
    if (event.currentTarget.hash.indexOf('#') < 0) return
    event.preventDefault()
    if (document.querySelector(event.currentTarget.hash.replace('/', ''))) {
      window.scrollTo(0, document.querySelector(event.currentTarget.hash.replace('/', '')).offsetTop)
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.linksAreaWrapper}>
        {title && <Typography tag="h2">{title}</Typography>}
        <div className={styles.links}>
          {!!links?.length &&
            links.map((linkItem, index) => {
              const linkIndexNum = index + 1 < 10 ? `0${index + 1}` : index + 1
              return (
                linkItem?.link &&
                linkItem?.linkText && (
                  <div className={styles.linkWrapper} key={`${index + 1}`}>
                    <span className={styles.linkIndex}>{linkIndexNum}</span>
                    <Button
                      variant="link"
                      href={linkItem.link}
                      onClick={(e: MouseEvent) => {
                        return goToLinkedSection(e)
                      }}>
                      {linkItem.linkText}
                    </Button>
                  </div>
                )
              )
            })}
        </div>
      </div>
    </div>
  )
}
