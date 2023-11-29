import type { MenuItem, Menu, MoneyV2, Product, Metafield, Metaobject } from '@shopify/hydrogen/storefront-api-types'
import { countries } from '~/data/countries'
import { ColorData, SizeAndColorProductData, SizeData } from '~/sections/sectionProductMain/SectionProductMain.types'
import { FontWeight } from 'graphql/types'
import { useLocation, useMatches } from 'react-router'
import { DateTime } from 'schema-dts'
// @ts-expect-error types not available
import typographicBase from 'typographic-base'

import { I18nLocale } from './type'

export interface EnhancedMenuItem extends MenuItem {
  to: string
  title?: string
  target: string
  url: string
  isExternal?: boolean
  items: EnhancedMenuItem[]
}

export interface UPSdata {
  title: string
  description: string
  icon: any
}

export interface EnhancedMenu extends Menu {
  items: EnhancedMenuItem[]
}
export interface PromotionItemCollection {
  title: string
  subtitle: string
  buttonText: string
  link: string
  description: string
  image: {
    url: string
    description: string
  }
}

export interface PromoMegaMenuItem {
  menuItemHandle: string
  productItems: string[] | null
  promotionItemsCollection?: {
    items: PromotionItemCollection[]
  }
}

type PromoBanner = {
  image?: string
  link?: string
  title?: string
  text?: string
  buttonTitle?: string
}

export interface MegaMenuSection {
  id?: string
  tags: []
  title: string
  type: string
  items?: EnhancedMenu[]
}

export interface TopMenuProps {
  id?: string | number
  items: EnhancedMenuItem[]
}

export type MenuItemProps = {
  id?: string | number
  title?: string
  url?: string
  to?: string
  isSpecial?: boolean
  isActive?: boolean
  items?: MenuItemProps[]
  products?: Product[]
  promoBanner?: PromoBanner
  promoMenu?: PromoMegaMenuItem
  showArrow?: boolean
  onClick?: (value: boolean) => void
}

export interface SubMenuProps {
  items: MenuItemProps[]
}

export interface SubMenuFirstColumnProps {
  parentItem: MenuItemProps
  items: MenuItemProps[]
  setActiveId: Dispatch<SetStateAction<null>>
  setSecondActiveId: Dispatch<SetStateAction<null>>
  activeId?: string | null
}

export interface SubMenuColumnProps {
  parentItem: MenuItemProps
  items: MenuItemProps[]
  setActiveId: Dispatch<SetStateAction<null>>
  activeId?: string | null
}

enum Theme {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Text = 'text',
}

type SetStateAction<S> = S | ((prevState: S) => S)
type Dispatch<A> = (value: A) => void

export function getParentLink(items: MenuItemProps[]) {
  return items.find((item: MenuItemProps) => {
    return item.title?.toLowerCase().includes('shop all') || item.title?.toLowerCase().includes('view all')
  })
}

export function getTitleFromHandle(title?: string | null) {
  if (!title) return null
  return title.charAt(0).toUpperCase() + title.slice(1)
}

export function getPathFromUrl(url: string) {
  if (!url) return null
  return new URL(url).pathname
}

export function missingClass(string?: string, prefix?: string) {
  if (!string) {
    return true
  }

  const regex = new RegExp(` ?${prefix}`, 'g')
  return string.match(regex) === null
}

export function formatText(input?: string | React.ReactNode) {
  if (!input) {
    return
  }

  if (typeof input !== 'string') {
    return input
  }

  return typographicBase(input, { locale: 'en-us' }).replace(/\s([^\s<]+)\s*$/g, '\u00A0$1')
}

export function formatDate(date: DateTime | Date | null | undefined) {
  if (!date) {
    return ''
  }
  const THRESHOLD_HOURS = 24
  const postedDate = new Date(date)
  const currentDate = new Date()
  const hrInMs = 36e5
  const hours = Math.floor(Math.abs(Number(currentDate) - Number(postedDate)) / hrInMs)
  const itemsToSlice = 3
  const month = postedDate.toLocaleString('default', { month: 'long' }).slice(0, itemsToSlice)
  const day = postedDate.getDate()

  return hours <= THRESHOLD_HOURS ? `${hours} hours ago` : `${day} ${month}`
}

export function getExcerpt(text: string) {
  const regex = /<p.*>(.*?)<\/p>/
  const match = regex.exec(text)
  return match?.length ? match[0] : text
}

export function isNewArrival(date: string, daysOld = 30) {
  return new Date(date).valueOf() > new Date().setDate(new Date().getDate() - daysOld).valueOf()
}

export function isDiscounted(price: MoneyV2, compareAtPrice: MoneyV2) {
  return compareAtPrice?.amount > price?.amount
}

function resolveToFromType(
  {
    customPrefixes,
    pathname,
    type,
  }: {
    customPrefixes: Record<string, string>
    pathname?: string
    type?: string
  } = {
    customPrefixes: {},
  },
) {
  if (!pathname || !type) return ''

  /*
    MenuItemType enum
    @see: https://shopify.dev/api/storefront/unstable/enums/MenuItemType
  */
  const defaultPrefixes = {
    BLOG: 'blogs',
    COLLECTION: 'collections',
    COLLECTIONS: 'collections', // Collections All (not documented)
    FRONTPAGE: 'frontpage',
    HTTP: '',
    PAGE: 'pages',
    CATALOG: 'collections/all', // Products All
    PRODUCT: 'products',
    SEARCH: 'search',
    SHOP_POLICY: 'policies',
  }

  const pathParts = pathname.split('/')
  const handle = pathParts.pop() || ''
  const routePrefix: Record<string, string> = {
    ...defaultPrefixes,
    ...customPrefixes,
  }

  switch (true) {
    // special cases
    case type === 'FRONTPAGE':
      return '/'

    case type === 'ARTICLE': {
      const blogHandle = pathParts.pop()
      return routePrefix.BLOG ? `/${routePrefix.BLOG}/${blogHandle}/${handle}/` : `/${blogHandle}/${handle}/`
    }

    case type === 'COLLECTIONS':
      return `/${routePrefix.COLLECTIONS}`

    case type === 'SEARCH':
      return `/${routePrefix.SEARCH}`

    case type === 'CATALOG':
      return `/${routePrefix.CATALOG}`

    // common cases: BLOG, PAGE, COLLECTION, PRODUCT, SHOP_POLICY, HTTP
    default:
      return routePrefix[type] ? `/${routePrefix[type]}/${handle}` : `/${handle}`
  }
}

/*
  Parse each menu link and adding, isExternal, to and target
*/
function parseItem(customPrefixes = {}) {
  return function (item: MenuItem): EnhancedMenuItem {
    if (!item?.url || !item?.type) {
      console.warn('Invalid menu item.  Must include a url and type.')
      // @ts-ignore
      return
    }

    // extract path from url because we don't need the origin on internal to attributes
    const { pathname } = new URL(item.url)

    /*
      Currently the MenuAPI only returns online store urls e.g — xyz.myshopify.com/..
      Note: update logic when API is updated to include the active qualified domain
    */
    const isInternalLink = /\.myshopify\.com/g.test(item.url)

    const parsedItem = isInternalLink
      ? // internal links
        {
          ...item,
          isExternal: false,
          target: '_self',
          to: resolveToFromType({ type: item.type, customPrefixes, pathname }),
        }
      : // external links
        {
          ...item,
          isExternal: true,
          target: '_blank',
          to: item.url,
        }

    return {
      ...parsedItem,
      items: item.items?.map(parseItem(customPrefixes)),
    }
  }
}

/*
  Recursively adds `to` and `target` attributes to links based on their url
  and resource type.
  It optionally overwrites url paths based on item.type
*/
export function parseMenu(menu: Menu, customPrefixes = {}): EnhancedMenu {
  if (!menu?.items) {
    console.warn('Invalid menu passed to parseMenu')
    // @ts-ignore
    return menu
  }

  return {
    ...menu,
    items: menu.items.map(parseItem(customPrefixes)),
  }
}

export const INPUT_STYLE_CLASSES =
  'appearance-none rounded dark:bg-transparent border focus:border-primary/50 focus:ring-0 w-full py-2 px-3 text-primary/90 placeholder:text-primary/50 leading-tight focus:shadow-outline'

export const getInputStyleClasses = (isError?: string | null) => {
  return `${INPUT_STYLE_CLASSES} ${isError ? 'border-red-500' : 'border-primary/20'}`
}

export function statusMessage(status: string) {
  const translations: Record<string, string> = {
    ATTEMPTED_DELIVERY: 'Attempted delivery',
    CANCELED: 'Canceled',
    CONFIRMED: 'Confirmed',
    DELIVERED: 'Delivered',
    FAILURE: 'Failure',
    FULFILLED: 'Fulfilled',
    IN_PROGRESS: 'In Progress',
    IN_TRANSIT: 'In transit',
    LABEL_PRINTED: 'Label printed',
    LABEL_PURCHASED: 'Label purchased',
    LABEL_VOIDED: 'Label voided',
    MARKED_AS_FULFILLED: 'Marked as fulfilled',
    NOT_DELIVERED: 'Not delivered',
    ON_HOLD: 'On Hold',
    OPEN: 'Open',
    OUT_FOR_DELIVERY: 'Out for delivery',
    PARTIALLY_FULFILLED: 'Partially Fulfilled',
    PENDING_FULFILLMENT: 'Pending',
    PICKED_UP: 'Displayed as Picked up',
    READY_FOR_PICKUP: 'Ready for pickup',
    RESTOCKED: 'Restocked',
    SCHEDULED: 'Scheduled',
    SUBMITTED: 'Submitted',
    UNFULFILLED: 'Unfulfilled',
  }
  try {
    return translations?.[status]
  } catch (error) {
    return status
  }
}

/**
 * Errors can exist in an errors object, or nested in a data field.
 */
export function assertApiErrors(data: Record<string, any> | null | undefined) {
  const errorMessage = data?.customerUserErrors?.[0]?.message
  if (errorMessage) {
    throw new Error(errorMessage)
  }
}

export const DEFAULT_LOCALE: I18nLocale = Object.freeze({
  ...countries.default,
  pathPrefix: '',
})

export function getLocaleFromRequest(request: Request): I18nLocale {
  const url = new URL(request.url)
  const firstPathPart = `/${url.pathname.substring(1).split('/')[0].toLowerCase()}`

  return countries[firstPathPart]
    ? {
        ...countries[firstPathPart],
        pathPrefix: firstPathPart,
      }
    : {
        // eslint-disable-next-line dot-notation
        ...countries['default'],
        pathPrefix: '',
      }
}

export function usePrefixPathWithLocale(path: string) {
  const [root] = useMatches()
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE

  // eslint-disable-next-line prefer-template
  return `${selectedLocale.pathPrefix}${path.startsWith('/') ? path : '/' + path}`
}

export function useIsHomePath() {
  const { pathname } = useLocation()
  const [root] = useMatches()
  const selectedLocale = root.data?.selectedLocale ?? DEFAULT_LOCALE
  const strippedPathname = pathname.replace(selectedLocale.pathPrefix, '')
  return strippedPathname === '/'
}

/**
 * Validates that a url is local
 * @param url
 * @returns `true` if local `false`if external domain
 */
export function isLocalPath(url: string) {
  try {
    // We don't want to redirect cross domain,
    // doing so could create fishing vulnerability
    // If `new URL()` succeeds, it's a fully qualified
    // url which is cross domain. If it fails, it's just
    // a path, which will be the current domain.

    new URL(url)
  } catch (e) {
    return true
  }

  return false
}

export function mapFontWeightToNumber(fontWeight: FontWeight) {
  switch (fontWeight) {
    case 'Thin':
      return 100
    case 'Extra_Light':
      return 200
    case 'Light':
      return 300
    case 'Normal':
      return 400
    case 'Medium':
      return 500
    case 'Semi_Bold':
      return 600
    case 'Bold':
      return 700
    case 'Extra_Bold':
      return 800
    case 'Black':
      return 900
    default:
      return 400
  }
}

export const copyTextToClipboard = async (text: string): Promise<void> => {
  if (typeof navigator !== 'undefined' && 'clipboard' in navigator) {
    await navigator.clipboard.writeText(text)
    return
  }

  throw new Error('Copying to clipboard is not supported.')
}

/**
 * Checks if the current date and time are within the specified business hours.
 * @param startHour - The start hour of business hours (0-23).
 * @param endHour - The end hour of business hours (0-23).
 * @returns Returns true if within the specified business hours, false otherwise.
 */
export const isWithinBusinessHours = (startHour: number, endHour: number): boolean => {
  enum DayOfWeek {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  const HOUR_START_POSITION = 11
  const HOUR_END_POSITION = 13

  const currentDateTime: Date = new Date()
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Australia/Sydney',
    hour12: false, // Use 24-hour format
  }
  const australiaDateTime: string = currentDateTime.toLocaleString('en-US', options)
  const australiaHour: number = parseInt(australiaDateTime.slice(HOUR_START_POSITION, HOUR_END_POSITION), 10) // Extract hour from formatted date

  // Check if it's Monday to Friday (dayOfWeek: 1 = Monday, 5 = Friday)
  // Check if it's between the specified startHour and endHour
  const isWeekday = currentDateTime.getDay() >= DayOfWeek.Monday && currentDateTime.getDay() <= DayOfWeek.Friday
  const isWithinHours = australiaHour >= startHour && australiaHour < endHour

  return isWeekday && isWithinHours
}

export const getMetaobjectId = (product: Product, promotionLabel: string) => {
  return product.metafields.find((metafield) => {
    return metafield && metafield.key === promotionLabel && metafield.value
  })?.value
}

export const getFreeProductId = (metaobject: { metaobject: Metaobject }) => {
  return metaobject?.metaobject.fields.find((field) => {
    return field.key === 'free_product'
  })?.value
}

export const getGroupTag = (product: Product, prefix: string) => {
  return product.tags.find((tag) => {
    return tag.startsWith(prefix)
  })
}

export const mapProductIds = (products: { nodes: Product[] }) => {
  return JSON.parse(
    JSON.stringify(
      products.nodes.map((product) => {
        return product.id
      }),
    ).replace(/'/g, '"'),
  )
}

export const getMetafieldByKey = (product: Product, key: string): Metafield | null | undefined => {
  return product.metafields.find((metafield) => {
    return metafield?.key === key
  })
}

export const extractIconIds = (nodes) => {
  const iconIds = nodes.map((node) => {
    const iconField = node.fields.find((field) => {
      return field.key === 'icon'
    })
    return iconField ? iconField.value : null
  })
  return iconIds.filter((id) => {
    return id !== null
  })
}

export const mergeNodeData = (uspNodes, imageNodes) => {
  return uspNodes.map((uspNode) => {
    const imageNode = imageNodes.find((imageNode) => {
      return (
        imageNode.id ===
        uspNode.fields.find((field) => {
          return field.key === 'icon'
        }).value
      )
    })
    return (() => {
      const image = imageNode ? imageNode.image : null
      const textField = uspNode.fields.find((field) => {
        return field.key === 'name'
      })
      return (() => {
        const text = textField ? textField.value : null
        return {
          image,
          text,
        }
      })()
    })()
  })
}

export const transformData = (
  sizeAndColorProductData: SizeAndColorProductData | undefined,
): { colorData: ColorData; sizeData: SizeData } => {
  if (!sizeAndColorProductData) {
    return { colorData: {}, sizeData: {} }
  }

  const colorData: ColorData = {}
  const sizeData: SizeData = {}

  sizeAndColorProductData.nodes.forEach((node) => {
    const colorInfo: { [key: string]: string } = {}
    const sizeInfo: { [key: string]: string } = {}

    node.metafields.forEach((metafield) => {
      if (metafield && metafield.namespace === 'custom') {
        if (metafield.key.startsWith('custitem_hex_colour') || metafield.key === 'colour_name') {
          colorInfo[metafield.key] = metafield.value
        } else if (metafield.key === 'custitem_size_variant') {
          sizeInfo[metafield.key] = metafield.value
        }
      }
    })

    if (Object.keys(colorInfo).length > 0) {
      colorData[node.handle] = colorInfo
    }
    if (Object.keys(sizeInfo).length > 0) {
      sizeData[node.handle] = sizeInfo
    }
  })

  return { colorData, sizeData }
}

/**
 * Extracts the value of a cookie from the provided cookie header.
 * @param cookieHeader The cookie header string.
 * @param cookieName The name of the cookie to retrieve.
 * @returns The value of the cookie if found, otherwise null.
 */
export function extractCookieValue(cookieHeader: string, cookieName: string): string | null {
  if (!cookieHeader) {
    return null
  }

  const cookies = cookieHeader.split(';')

  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')
    if (name === cookieName) {
      return value
    }
  }

  return null
}

const formattedValue = (value) => {
  switch (value) {
    case 'true':
      return true
    case 'false':
      return false
    default:
      return value
  }
}
export const transformedMetafields = (metafields: Metafield[]) => {
  return metafields.reduce((result, item) => {
    return {
      ...result,
      [item.key]: formattedValue(item.value),
    }
  }, {})
}

export const addPrefixSlashToUrl = (url) => {
  if (!url?.startsWith('/')) {
    return `/${url}`
  }
  return url
}
