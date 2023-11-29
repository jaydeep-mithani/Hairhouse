type Image = {
  height: number
  url: string
  width: number
}

export interface BrandCardProps {
  data: { altText?: string; url?: string; image: Image }
}
