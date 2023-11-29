import { Button } from '@overdose/components'
import { useFetcher } from '@remix-run/react'
import { CartAction } from '~/lib/type'
import clsx from 'clsx'
import { useEffect } from 'react'

import styles from '../Cart.module.css'
import { ItemActionButtonProps } from '../Cart.types'

export function ItemRemoveButton({ lineIds, setIsLoaderShown, customTitle, className }: ItemActionButtonProps) {
  const fetcher = useFetcher()

  useEffect(() => {
    setIsLoaderShown(fetcher.state === 'submitting' || fetcher.state === 'loading')
    return () => setIsLoaderShown(false)
  }, [fetcher])

  return (
    <Button
      variant="link"
      onClick={() => {
        fetcher.submit(
          {
            cartAction: CartAction.REMOVE_FROM_CART,
            linesIds: JSON.stringify(lineIds),
          },
          { method: 'post', action: '/cart' },
        )
      }}
      theme={{
        root: clsx(styles.actionButton, className),
      }}>
      {customTitle || 'Remove'}
    </Button>
  )
}
