import { Accordion, AccordionItem, Button, Typography, Image } from '@overdose/components'
import clsx from 'clsx'

import styles from './participatingSalonAccordion.module.css'
import { ParticipatingSalonAccordionProps } from './ParticipatingSalonAccordion.types'

export const ParticipatingSalonAccordion = (props: ParticipatingSalonAccordionProps) => {
  return (
    <div className={styles.root}>
      {props?.heading && (
        <Typography variant="displayLarge" tag="h1" weight="bold">
          {props.heading}
        </Typography>
      )}
      <div className={styles.hair_accordian}>
        <Accordion>
          {!!props?.accordionContent?.length &&
            props.accordionContent.map((accordion, index) => {
              return (
                <AccordionItem
                  variant="default"
                  style={{ paddingLeft: '8px', paddingRight: '8px' }}
                  header={accordion.title}
                  name={`${accordion.title}${index}`}
                  key={index}>
                  {accordion.content.length > 0 && (
                    <div className={styles.storeCardWrraper}>
                      {accordion.content?.map((card, index) => {
                        return (
                          <div className={styles.storeCard} key={index}>
                            {card?.heading && (
                              <Typography
                                variant="subheading"
                                weight="bold"
                                tag="h4"
                                theme={{ root: styles.subheading }}>
                                {card.heading}
                              </Typography>
                            )}
                            {card?.logo && (
                              <Image alt={card.logo?.altText || ''} className={styles.logo} src={card.logo.url} />
                            )}
                            {card?.address && (
                              <Typography variant="caption" tag="p">
                                {card.address}
                              </Typography>
                            )}
                            <div className={styles.linkWrraper}>
                              {!!card?.linkUrl?.length &&
                                card.linkUrl.map((link, index) => {
                                  if (link.url === 'phone') {
                                    return (
                                      <Button
                                        key={index}
                                        status="primary"
                                        variant="link"
                                        href={`tel:${link.linkText}`}
                                        theme={{
                                          root: clsx(styles.linkButton),
                                        }}>
                                        {link.linkText}
                                      </Button>
                                    )
                                  }

                                  return (
                                    <Button
                                      key={index}
                                      status="primary"
                                      variant="link"
                                      to={link.url}
                                      theme={{
                                        root: clsx(styles.linkButton),
                                      }}>
                                      {link.linkText}
                                    </Button>
                                  )
                                })}
                            </div>
                            <div className={styles.buttonWrapper}>
                              {!!card.button?.length &&
                                card.button?.map((button, index) => {
                                  return (
                                    <Button
                                      key={index}
                                      status={button.ctaType}
                                      variant="solid"
                                      to={button.url}
                                      theme={{
                                        root: clsx(styles.button),
                                      }}>
                                      {button.buttonText}
                                    </Button>
                                  )
                                })}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </AccordionItem>
              )
            })}
        </Accordion>
      </div>
    </div>
  )
}
