import { Typography, Button } from '@overdose/components'
import { isWithinBusinessHours } from '~/lib/utils'
import clsx from 'clsx'
import { useEffect } from 'react'

import styles from '../Footer.module.css'
import { FooterHelpBlockProps, BusinessHours } from '../Footer.types'

export const FooterHelpBlock = ({ helpCentreBox, assistanceCtAs, isAccount }: FooterHelpBlockProps) => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script')
      script.id = 'ze-snippet'
      script.src = 'https://static.zdassets.com/ekr/snippet.js?key=34bdc343-70cb-4f76-983d-29af69c11b9d'
      document.body.appendChild(script)
    }

    if (typeof window !== 'undefined') {
      loadScript()
    }

    return () => {
      // Cleanup: Remove the dynamically added script when component unmounts
      if (typeof window !== 'undefined') {
        const script = document.querySelector(
          `script[src="https://static.zdassets.com/ekr/snippet.js?key=34bdc343-70cb-4f76-983d-29af69c11b9d"]`,
        )
        if (script) {
          document.body.removeChild(script)
        }
      }
    }
  }, [])

  if (!helpCentreBox) {
    return null
  }

  const openChat = () => {
    window?.zE && window.zE('messenger', 'open')
  }

  return (
    <div className={styles.footerHelpBlock}>
      {helpCentreBox && (
        <Typography
          variant="body"
          tag="div"
          dangerouslySetInnerHTML={{ __html: helpCentreBox.html }}
          theme={{ root: styles.helpCentreContent }}
        />
      )}
      {!!assistanceCtAs?.length && (
        <div
          className={clsx(styles.helpBlockBtns, {
            [styles.helpBlockBtnsAccount]: isAccount,
          })}>
          <Button
            onClick={openChat}
            variant="solid"
            status="secondary"
            theme={{
              root: clsx(
                styles.helpBlockBtn,
                isWithinBusinessHours(BusinessHours.StartHour, BusinessHours.EndHour)
                  ? styles.helpBlockBtnOnline
                  : styles.helpBlockBtnOffline,
              ),
            }}>
            <Typography tag="span" variant="button">
              {isAccount ? 'Support' : 'Live Chat'}
            </Typography>
          </Button>

          {assistanceCtAs.map((button) => {
            return (
              <Button
                href={button.url}
                key={button.id}
                variant="solid"
                status={button.ctaType}
                theme={{
                  root: clsx(
                    styles.helpBlockBtn,
                    isWithinBusinessHours(BusinessHours.StartHour, BusinessHours.EndHour)
                      ? styles.helpBlockBtnOnline
                      : styles.helpBlockBtnOffline,
                  ),
                }}>
                <Typography tag="span" variant="button">
                  {button.buttonText}
                </Typography>
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}
