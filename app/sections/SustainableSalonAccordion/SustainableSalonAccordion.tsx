import { Accordion, AccordionItem, Button, Typography, Image } from '@overdose/components'

import styles from './SustainableSalonAccordion.module.css'
import { SustainableSalonAccordionProps } from './SustainableSalonAccordion.types'

export const SustainableSalonAccordion: React.FC<SustainableSalonAccordionProps> = ({
  title,
  logo,
  accordionItems,
}) => {
  return (
    <div className={styles.root}>
      <Image alt={logo?.altText} className={styles.logo} src={logo?.url} />
      {title && (
        <Typography variant="displayLarge" tag="h1" weight="bold">
          {title}
        </Typography>
      )}
      <div className={styles.hair_accordian}>
        <Accordion>
          {!!accordionItems?.length &&
            accordionItems?.map((accordion, index) => {
              return (
                <AccordionItem
                  variant="default"
                  className="lg:py-5 py-4 pl-2 border-t border-[#E2E2E2] last:border-b [&>button]:p-0 [&>button>span>svg]:min-h-[24px] [&>button>span>svg]:min-w-[24px] [&>button>span>svg]:lg:min-h-[32px] [&>button>span>svg]:lg:min-w-[32px] [&>button>span]:text-base [&>button>span]:lg:text-lg [&>div>div]:p-0 [&>div>div]:pt-3 [&>div>div]:lg:pt-5 [&>button>span>svg]:stroke-[1.5px]"
                  header={accordion.title}
                  name={`${accordion.title}${index}`}
                  key={index}>
                  <div className={styles.locationsWraper}>
                    {!!accordion?.items?.length &&
                      accordion.items.map((location, index) => {
                        return (
                          location && (
                            <Typography variant="subheading" tag="p" key={index}>
                              {location}
                            </Typography>
                          )
                        )
                      })}
                  </div>
                  <div className="lg:pb-1">
                    {accordion?.button?.buttonText && accordion?.button?.url && (
                      <Button
                        variant="solid"
                        href={accordion.button.url}
                        theme={{
                          root: styles.button,
                        }}>
                        {accordion.button.buttonText}
                      </Button>
                    )}
                  </div>
                </AccordionItem>
              )
            })}
        </Accordion>
      </div>
    </div>
  )
}
