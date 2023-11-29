import { Typography, Button, Image } from '@overdose/components'
import { IconCheck } from '~/components'
import { Breadcrumbs } from '~/components/breadcrumbs'
import clsx from 'clsx'
import { CtaType } from 'graphql/types'

import styles from './HeroBanner.module.css'

export type CtaButtons = {
  [key: string]: string
}
export type HeroTextBlockProps = {
  subtext?: string
  heading?: string
  featuresList?: Array<string>
  ctaButtons?: Array<{
    __typename?: 'Cta'
    buttonText?: string | null
    openInNewWindow?: boolean | null
    url?: string | null
    ctaType?: CtaType | null
  }>
  description?: {
    html: string
  }
  showBreadcrumbs?: boolean
  displayH1?: boolean
  logo?: {
    url: string
    altText: string
  }
  textCardTheme?: string
  className?: string
  title?: string
  placement?: string
  menu?: object
  collections?: object
}
export const HeroTextBlock = ({
  subtext,
  heading,
  featuresList,
  ctaButtons,
  description,
  showBreadcrumbs = false,
  displayH1,
  logo,
  textCardTheme,
  className,
  title,
  placement,
  menu,
  collections,
}: HeroTextBlockProps) => {
  const getTitleTheme = (theme: string): string => {
    switch (theme) {
      case 'primary':
        return 'displayExtraLarge'
      case 'secondary':
        return 'displayLarge'
      case 'tertiary':
        return 'displayMedium'
      case 'numbered_list':
        return 'displayMedium'
      default:
        return 'displayExtraLarge'
    }
  }

  const shouldShowBreadcrumbs = () => {
    if (!showBreadcrumbs || !title) {
      return false
    }
    if (placement === 'collections') {
      return collections && menu
    }
    return true
  }

  return (
    <div
      className={clsx(styles.heroTextBlock, className, {
        [styles.heroTextBlockSecondary]: textCardTheme === 'secondary',
        [styles.heroTextBlockTertiary]: textCardTheme === 'tertiary',
        [styles.heroTextBlockNumberedList]: textCardTheme === 'numbered_list',
      })}>
      {shouldShowBreadcrumbs() && (
        <Breadcrumbs className={styles.breadcrumbs} crumbData={{ title, collections, menu, placement }} />
      )}

      {logo?.url && <Image className={styles.logo} alt={logo?.altText} src={logo?.url} />}

      {subtext && (
        <Typography tag="p" variant="label">
          {subtext}
        </Typography>
      )}
      {heading && (
        <Typography
          tag={displayH1 ? 'h1' : 'h2'}
          variant={textCardTheme ? getTitleTheme(textCardTheme) : ''}
          theme={{
            root: clsx(styles.titleText, {
              [styles.titleTextSecondary]: textCardTheme === 'secondary',
              [styles.titleTextTertiary]: textCardTheme === 'tertiary',
              [styles.titleTextNumberedList]: textCardTheme === 'numbered_list',
            }),
          }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      )}

      {description?.html && (
        <Typography
          tag="p"
          variant={textCardTheme === 'tertiary' ? 'body' : 'bodyLarge'}
          theme={{
            regular: clsx(styles.descriptionText, {
              [styles.descriptionTextSecondary]: textCardTheme === 'secondary',
              [styles.descriptionTextTertiary]: textCardTheme === 'tertiary',
              [styles.descriptionTextNumberedList]: textCardTheme === 'numbered_list',
            }),
          }}
          dangerouslySetInnerHTML={{ __html: description?.html }}
        />
      )}
      {!!featuresList?.length && (
        <ul className={styles.featuresList}>
          {featuresList.map((feature, index) => {
            return (
              <li key={`key${index + 1}`}>
                <IconCheck style={{ width: '24px', height: '24px' }} />
                <Typography tag="div" theme={{ root: styles.featureItemtext }}>
                  {feature}
                </Typography>
              </li>
            )
          })}
        </ul>
      )}
      {ctaButtons && !!ctaButtons.length && (
        <div
          className={clsx(styles.buttonWrapper, {
            [styles.buttonWrapperTertiary]: textCardTheme === 'tertiary',
            [styles.buttonWrapperNumberedList]: textCardTheme === 'numbered_list',
          })}>
          {ctaButtons.map((button, index) => {
            return (
              <Button
                variant="solid"
                status={index > 0 ? 'secondary' : 'primary'}
                href={button.url}
                theme={{
                  root: clsx(styles.button, {
                    [styles.buttonTertiary]: textCardTheme === 'tertiary',
                  }),
                }}
                key={`key${index + 1}`}>
                {button.buttonText}
              </Button>
            )
          })}
        </div>
      )}
    </div>
  )
}
