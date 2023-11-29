import { useFetcher, useMatches } from '@remix-run/react'
import type { CartLineInput } from '@shopify/hydrogen/storefront-api-types'
import { Button } from '~/components'
import { CartAction } from '~/lib/type'
import { GlobalLoaderContext } from '~/provider/globalLoader'
import { useEffect, useContext } from 'react'

export function AddToCartButton({
  children,
  lines,
  className = '',
  variant = 'primary',
  width = 'full',
  analytics,
  ...props
}: {
  children: React.ReactNode
  lines: CartLineInput[]
  className?: string
  variant?: 'primary' | 'secondary' | 'inline'
  width?: 'auto' | 'full'
  analytics?: unknown
  [key: string]: any
}) {
  const [root] = useMatches()
  const { setIsLoaderShown } = useContext(GlobalLoaderContext)
  const selectedLocale = root?.data?.selectedLocale
  const fetcher = useFetcher()

  const widthSettings = width === 'full' ? '100%' : 'auto'

  useEffect(() => {
    setIsLoaderShown && setIsLoaderShown(fetcher.state !== 'idle')
  }, [fetcher])

  return (
    <fetcher.Form style={{ width: widthSettings }} action="/cart" method="post">
      <input type="hidden" name="cartAction" value={CartAction.ADD_TO_CART} />
      <input type="hidden" name="countryCode" value={selectedLocale?.country} />
      <input type="hidden" name="lines" value={JSON.stringify(lines)} />
      <input type="hidden" name="analytics" value={JSON.stringify(analytics)} />
      <Button as="button" type="submit" width={width} variant={variant} className={className} {...props}>
        {children}
      </Button>
    </fetcher.Form>
  )
}
