import { Accordion, AccordionItem, Button, Typography } from '@overdose/components'
import clsx from 'clsx'
import { useState } from 'react'

import styles from './salonFaqAccordion.module.css'
import { FaqAccordionElementProps } from './salonFaqAccordion.types'

export const SalonFaqAccordionSecion: React.FC<FaqAccordionElementProps> = (props) => {
  if (!props.data) return null
  const { title, accordions } = props.data
  const [showMore, setShowMore] = useState({ itemsToShow: 4, expanded: false })

  const showMoreHandler = () => {
    showMore.itemsToShow === 4
      ? setShowMore({ itemsToShow: accordions.length, expanded: true })
      : setShowMore({ itemsToShow: 4, expanded: false })
  }
  return (
    <div className={styles.root}>
      <div className={clsx(styles.faqWrapper, ['px-4 md:px-8'])}>
        {title && (
          <Typography tag="h1" variant="displayLarge" theme={{ root: clsx(styles.accordionTitle) }}>
            {title}
          </Typography>
        )}
        <div className={styles.faq_accordian}>
          <Accordion>
            {accordions.slice(0, showMore.itemsToShow).map((accordion, index) => (
              <AccordionItem
                variant="default"
                className={styles.accordion_item}
                style={{ paddingLeft: '8px', paddingRight: '8px', fontSize: '14px' }}
                header={accordion.title}
                name={`${accordion.title}${index}`}
                key={index}>
                {accordion.description.text}
              </AccordionItem>
            ))}
          </Accordion>
          <div className={styles.buttonWrapper}>
            <Button
              variant="link"
              theme={{
                root: clsx(styles.linkButton),
              }}
              onClick={showMoreHandler}>
              {!showMore.expanded ? '+ Show More' : '- Show Less'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
