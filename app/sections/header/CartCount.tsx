import { Await, useMatches } from '@remix-run/react'
import { IconBag, Link } from '~/components'
import { useIsHydrated } from '~/hooks/useIsHydrated'
import { Suspense, useMemo } from 'react'

export const CartCount = ({ isHome, openCart }: { isHome: boolean; openCart: () => void }) => {
  const [root] = useMatches()

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => <Badge dark={isHome} openCart={openCart} count={cart?.totalQuantity || 0} />}
      </Await>
    </Suspense>
  )
}

const Badge = ({ openCart, dark, count }: { count: number; dark: boolean; openCart: () => void }) => {
  const isHydrated = useIsHydrated()

  const BadgeCounter = useMemo(() => {
    return (
      <>
        <IconBag />
        <div
          className={`${
            dark ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary' : 'text-contrast bg-[#dfb7b7]'
          } absolute top-[-3px] right-[-7px] text-[0.625rem] font-medium subpixel-antialiased h-[18px] w-[18px] flex items-center justify-center leading-none text-center rounded-full px-[0.125rem] pb-px`}>
          <span>{count || 0}</span>
        </div>
      </>
    )
  }, [count, dark])

  return isHydrated ? (
    <button
      type="button"
      onClick={openCart}
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5">
      {BadgeCounter}
    </button>
  ) : (
    <Link to="/cart" className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5">
      {BadgeCounter}
    </Link>
  )
}
