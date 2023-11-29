import { Button, Image } from '@overdose/components'
import clsx from 'clsx'

import styles from './StyleSocietyBlock.module.css'
import { StyleSocietyBlockProps } from './StyleSocietyBlock.types'

interface Media {
  url?: string
  mimeType?: string
  altText?: string
}

export const StyleSocietyBlock = ({
  desktopImage,
  mobileImage,
  textArea,
  contentColour,
  ctAs,
  textPositionLeft,
  textBlockLayout,
}: StyleSocietyBlockProps) => {
  const renderMedia = (media: Media, isMobile = false) => {
    if (!media?.url) {
      return null
    }

    const isImage = media?.mimeType?.includes('image')

    const mobileImageClass = 'min-h-[322px] object-cover md:hidden'
    const mobileClass = 'object-cover md:hidden'
    const desktopClass = 'hidden md:block w-full max-w-full h-screen md:max-h-[698px] bg-no-repeat bg-top'

    let className = ''
    if (isMobile) {
      className = isImage ? mobileImageClass : mobileClass
    } else {
      className = desktopClass
    }

    const commonProps = {
      className: clsx(className, isImage ? styles.bgImage : styles.bgVideo),
    }

    if (isImage) {
      return isMobile ? (
        <Image src={media.url} alt={media.altText || ''} {...commonProps} />
      ) : (
        <div style={{ '--bgImageUrl': `url(${media.url})` }} {...commonProps} />
      )
    }

    return (
      <div {...commonProps}>
        <video autoPlay loop muted controls>
          <source src={media.url} type="video/mp4" />
          <track kind="captions" />
        </video>
      </div>
    )
  }

  return (
    <div
      className={clsx(styles.root, {
        [styles[`layout_${textBlockLayout}`]]: textBlockLayout,
        [styles.contentAlign_left]: textPositionLeft,
        [styles.contentAlign_right]: !textPositionLeft,
      })}>
      {renderMedia(desktopImage)}
      {renderMedia(mobileImage, true)}
      <div
        className={clsx(
          styles.contentBlock,
          `w-full relative md:absolute md:top-20 z-10 py-8 md:px-[49px] md:py-14 md:max-w-[458px]`,
          {
            'md:left-[105px]': textPositionLeft,
            'md:right-[105px]': !textPositionLeft,
          },
        )}
        style={{
          '--bgColor': contentColour?.hex ?? '#F9F5F0',
        }}>
        <div dangerouslySetInnerHTML={{ __html: textArea?.html }} className={styles.textArea} />
        <div className="mt-8 md:mt-12 flex gap-3">
          {!!ctAs?.length &&
            ctAs.map((button, idx) => {
              return (
                <div key={idx} className={styles.button}>
                  <Button
                    theme={{
                      root: clsx('w-full border !border-[#211d1d]', {
                        '!bg-transparent': idx === 1,
                        '!text-[#211d1d]': idx === 1,
                      }),
                    }}
                    href={button?.url || '#'}>
                    {button?.buttonText}
                  </Button>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
