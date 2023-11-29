import {
  Maybe,
  MediaEdge,
  MoneyV2,
  Scalars,
  Video,
  MediaImage,
  ExternalVideo,
  Model3d,
} from '@shopify/hydrogen/storefront-api-types'
import { Dispatch } from 'react'

export type ProductImageGalleryProps = {
  label?: string | null
  price?: MoneyV2
  compareAtPrice?: Maybe<MoneyV2>
  media?: MediaEdge['node'][]
  children?: React.ReactNode
  publishedAt?: Scalars['DateTime']
  promotionLabel?: { backgroundColor: string; borderColor: string; label: string; color: string }
  promotionLabelIcon?: { altText: string; height: number; width: number; url: string }
  badgeType: string | undefined
}

export type ModalProps = {
  isOpen: boolean | null
  setIsOpen: Dispatch<boolean>
  currentMedia: MediaImage | ExternalVideo | Model3d | Video
}
