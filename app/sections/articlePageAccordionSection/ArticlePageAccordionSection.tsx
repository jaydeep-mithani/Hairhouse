import { Accordion, AccordionItem, Typography } from '@overdose/components'
import { IconChevron, IconChevronUp } from '~/components'
import clsx from 'clsx'

import styles from './ArticlePageAccordionSection.module.css'
import { ArticlePageAccordionSectionProps } from './ArticlePageAccordionSection.types'

const getTitleTheme = (theme?: string | null) => {
  switch (theme) {
    case 'vertical':
      return 'displayLarge'
    case 'horizontal':
      return 'displayExtraLarge'
    default:
      return 'displayLarge'
  }
}

export const ArticlePageAccordionSection: React.FC<ArticlePageAccordionSectionProps> = (props) => {
  if (!props.data) {
    return null
  }

  const { headline, accordionSections, accordionLayout } = props.data
  return (
    <div
      className={clsx(styles.root, {
        [styles.verticalLayout]: !accordionLayout || accordionLayout === 'vertical',
        [styles.horizontalLayout]: accordionLayout === 'horizontal',
      })}>
      <Typography
        tag="h1"
        variant={getTitleTheme(accordionLayout)}
        theme={{
          root: clsx(styles.accordionSectionHeading, {
            [styles.accordionTitle]: accordionLayout === 'vertical' || accordionLayout === 'horizontal',
          }),
        }}>
        {headline}
      </Typography>
      <div className={styles.articlePageAccordion}>
        <Accordion expandIcon={<IconChevron />} collapseIcon={<IconChevronUp />}>
          {!!accordionSections?.length &&
            accordionSections.map((accordion, index) => {
              return (
                <AccordionItem
                  variant="default"
                  header={accordion?.title}
                  name={`${accordion?.title}${index}`}
                  key={`${index + 1}`}>
                  {accordion?.content?.text}
                </AccordionItem>
              )
            })}
        </Accordion>
      </div>
    </div>
  )
}
