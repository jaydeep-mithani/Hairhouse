import type { Cart as CartType, CartCost, CartLine, Product } from '@shopify/hydrogen/storefront-api-types'

type Layouts = 'page' | 'drawer'
export interface CartLinePriceProps {
  line: CartLine
  priceType?: 'regular' | 'compareAt' | 'perQuantity'
  className?: string
}

export interface CartEmptyProps {
  hidden: boolean
  layout?: Layouts
  onClose?: () => void
  unbxdRecs: unknown | null
}

export interface ProgressBarProps {
  cart: CartType | null
  layout?: Layouts
}

export interface CartLineItemProps {
  line: CartLine
  layout?: Layouts
  setIsLoaderShown: () => void
}

export interface ItemActionButtonProps {
  lineIds?: CartLine['id'][]
  productId?: string
  customTitle?: string
  className?: string
  setIsLoaderShown: () => void
}

export interface CartSummaryProps {
  children?: React.ReactNode
  cart: CartType | null
  layout: Layouts
  onClose?: () => void
}

export interface CartCheckoutActionsProps {
  checkoutUrl: string
  onClose?: () => void
  layout: Layouts
  className?: string
}

export interface CartDetailsProps {
  layout: Layouts
  cart: CartType | null
  onClose?: () => void
  unbxdRecs: unknown | null
}

export interface CartLinesProps {
  layout: Layouts
  lines: CartType['lines'] | undefined
}

export interface CartProps {
  layout: Layouts
  onClose?: () => void
  cart: CartType | null
  unbxdRecs: unknown | null
}

export interface CartDiscountsProps {
  discountCodes: CartType['discountCodes']
  className?: string
}

export interface UpdateDiscountFormProps {
  children: React.ReactNode
}

export interface CrossSellProps {
  product: Product
  className?: string
}

export interface GiftsProps {
  product: Product
  className?: string
}
