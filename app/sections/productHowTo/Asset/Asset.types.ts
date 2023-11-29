import { ReactNode } from 'react'

export interface AssetType {
  __typename?: 'Asset'
  width?: number | null
  height?: number | null
  size?: number | null
  mimeType?: string | null
  altText?: string | null
  fileName: string
  url: string
}

export interface AssetProps {
  asset?: AssetType | null
  maxWidth?: string
  playIcon?: ReactNode
}
