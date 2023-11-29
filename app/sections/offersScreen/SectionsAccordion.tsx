import { Accordion, AccordionItem, Typography } from '@overdose/components'
import clsx from 'clsx'

import styles from './OffersScreen.module.css'
import { OffersTermsAndConditionProps } from './OffersTermsAndCondtion/OfferTermsAndCondition.types'

export const SectionsAccordion: React.FC<OffersTermsAndConditionProps> = ({
  id,
  headline,
  accordionLayout,
  accordionSections,
}) => {
  if (!id) {
    return null
  }

  return (
    <div
      className={clsx(styles.root, {
        [styles.verticalLayout]: accordionLayout === 'vertical',
        [styles.horizontalLayout]: accordionLayout === 'horizontal',
      })}>
      {headline && (
        <Typography
          tag="h1"
          variant={accordionLayout === 'vertical' ? 'displayLarge' : 'displayExtraLarge'}
          theme={{ root: clsx(styles.accordionTitle) }}>
          {headline}
        </Typography>
      )}
      <div className={styles.hair_accordian}>
        <Accordion multiple>
          {!!accordionSections?.length &&
            accordionSections?.map((accordion) => {
              return (
                accordion?.title &&
                accordion?.content?.html && (
                  <AccordionItem
                    variant="default"
                    header={accordion.title}
                    name={accordion.title}
                    key={accordion.title}
                    className={styles.accordionItem}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: accordion?.content?.html,
                      }}
                    />
                  </AccordionItem>
                )
              )
            })}
        </Accordion>
      </div>
    </div>
  )
}
