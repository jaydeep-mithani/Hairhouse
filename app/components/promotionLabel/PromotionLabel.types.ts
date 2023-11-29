export interface PromotionLabelProps {
  promotionLabel: { backgroundColor: string; borderColor: string; label: string; color: string } | undefined
  promotionLabelIcon?: { altText: string; height: number; width: number; url: string }
  badgeType: string | undefined
}
