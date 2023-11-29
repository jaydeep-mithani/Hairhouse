import { Accordion, AccordionItem, Typography } from '@overdose/components'
import { IconChevron, IconChevronUp } from '~/components'
import clsx from 'clsx'

import { AccordionElementProps } from './faqAccordions.types'
import styles from './styles/FaqAccordionsSection.module.css'

const getTitleTheme = (theme?: string | null) => {
  switch (theme) {
    case 'vertical':
      return 'displayLarge'
    case 'horizontal':
      return 'displayExtraLarge'
    case 'verticalLeft':
      return 'pageheading'
    default:
      return 'displayLarge'
  }
}

export const FaqAccordions: React.FC<AccordionElementProps> = (props) => {
  if (!props.data) return null

  const { title, accordions, layout } = props.data
  return (
    <div
      className={clsx(styles.root, {
        [styles.verticalLayout]: layout === 'vertical',
        [styles.horizontalLayout]: layout === 'horizontal',
        [styles.accountLayout]: layout === 'verticalLeft',
      })}>
      <Typography
        tag="h1"
        variant={getTitleTheme(layout)}
        theme={{
          root: clsx({
            [styles.accordionTitle]: layout === 'vertical' || layout === 'horizontal',
            [styles.accountTitle]: layout === 'verticalLeft',
          }),
        }}>
        {title}
      </Typography>
      <div className={styles.hair_accordian}>
        <Accordion
          className="test"
          expandIcon={<IconChevron />}
          collapseIcon={<IconChevronUp />}
          theme={{ root: clsx({ [styles.accountItem]: layout === 'verticalLeft' }) }}>
          {accordions.map((accordion, index) => (
            <AccordionItem
              variant="default"
              style={{
                paddingLeft: '8px',
                paddingRight: `${layout === 'verticalLeft' ? '0px' : '8px'}`,
                fontSize: '14px',
              }}
              header={accordion.title}
              name={`${accordion.title}${index}`}
              key={index}>
              {accordion.description?.text}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
