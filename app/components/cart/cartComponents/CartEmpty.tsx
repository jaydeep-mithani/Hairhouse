import { Typography, Button } from '@overdose/components'
import { useNavigate } from '@remix-run/react'
import { ProductCarousel } from '~/components'
import clsx from 'clsx'
import { useRef } from 'react'
import { useScroll } from 'react-use'

import styles from '../Cart.module.css'
import { CartEmptyProps } from '../Cart.types'
import { CartRecommendations } from './CartRecommendations'

export function CartEmpty({ hidden = false, layout = 'drawer', onClose, unbxdRecs }: CartEmptyProps) {
  const scrollRef = useRef(null)
  const navigate = useNavigate()
  const { y } = useScroll(scrollRef)

  const container = {
    drawer: clsx(styles.cartEmpty, [
      'flex flex-col justify-between content-start gap-4 px-6 pb-0 transition overflow-y-scroll md:gap-12 md:px-12 lg:-mt-2.5 h-screen-no-nav',
      y > 0 ? 'border-t' : '',
    ]),
    page: clsx([
      hidden ? '' : 'grid',
      `px-4 py-8 md:p-8 lg:px-12 lg:py-16 pb-[60px] lg:pb-12 lg:pb-[100px] w-full md:items-start gap-8 lg:gap-10`,
    ]),
  }

  return (
    <div className="w-full overflow-hidden">
      <div ref={scrollRef} className={container[layout]} hidden={hidden}>
        {layout === 'page' && (
          <Typography tag="p" variant="displayLarge" theme={{ root: styles.cartTitle }}>
            My bag (0)
          </Typography>
        )}
        <section
          className={layout === 'drawer' ? 'grid gap-6 lg:pt-2' : 'flex flex-col lg:items-center gap-5 text-center	'}>
          <Typography
            tag="p"
            variant={layout === 'drawer' ? 'displayMedium' : 'subheading'}
            theme={{ root: clsx(styles.emptyMinicartTitle, { [styles.emptyCartTitle]: layout === 'page' }) }}>
            {layout === 'drawer' ? 'Your bag is empty' : 'Your bag is currently empty'}
          </Typography>
          <div>
            <Button
              onClick={
                layout === 'drawer'
                  ? onClose
                  : () => {
                      return navigate('/')
                    }
              }
              theme={{
                root: clsx(styles.button, { [styles.buttonCartPage]: layout === 'page' }),
              }}>
              Continue shopping
            </Button>
          </div>
        </section>
        {layout === 'drawer' && <CartRecommendations />}
      </div>
      {layout === 'page' && (
        <div className="mx-4 lg:mx-12 lg:mb-[66px] border-b-[1px] border-b-[var(--color-border-line-primary)]" />
      )}
      {layout === 'page' && <ProductCarousel data={unbxdRecs} className={styles.productCarousel} />}
    </div>
  )
}
