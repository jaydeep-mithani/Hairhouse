import { Image, Link, Typography } from '@overdose/components'

import { SocialIcons } from '../../components/Icon'
import styles from './IGFeed.module.css'
import { IGFeedProps } from './IGFeed.types'

export const IGFeed = ({ imageGrid, handle, ctaText, platformLinks }: IGFeedProps) => {
  return (
    <div>
      <div className="relative h-screen max-h-[646px] my-[60px] md:my-[100px]">
        <section className="absolute bottom-0 md:static w-full max-w-[1181.04px] bg-[#F9F5F0] pt-20 pb-10 px-4 md:py-[86px] md:px-[50px] lg:py-[172px] lg:px-[100px] flex flex-col justify-end md:justify-start items-end mx-auto ">
          <Typography tag="p" variant="body" theme={{ root: 'uppercase w-full md:max-w-[411px] mb-5' }}>
            {handle}
          </Typography>
          <Typography
            tag="p"
            variant="displayLarge"
            theme={{ root: 'w-full font-medium mb-5 md:mb-10 md:max-w-[411px]' }}>
            {ctaText}
          </Typography>
          <ul className="flex gap-4 w-full md:max-w-[411px]">
            {platformLinks?.length > 0 &&
              platformLinks?.map((icon, index) => {
                return (
                  <Link key={index} to={icon.linkUrl} target="_blank">
                    <SocialIcons icon={icon?.iconFile?.fileName} width="24" height="24" />
                  </Link>
                )
              })}
          </ul>
        </section>
        <section
          className={`grid grid-cols-3 w-full  gap-1 md:gap-2 absolute z-10 md:left-[75px] lg:left-0 xl:left-[50px] px-4 md:px-0 ${styles.imageGrid}`}>
          {imageGrid?.length > 0 &&
            imageGrid?.map((item, index) => {
              return (
                <div key={index} className="aspect-1">
                  <Image
                    src={item?.url}
                    alt={item?.altText}
                    className={`w-full max-h-[111.48px] md:max-w-[200px] md:max-h-[200px] object-cover ${styles.image}`}
                  />
                </div>
              )
            })}
        </section>
      </div>
    </div>
  )
}
