import React from 'react'

import { ProductBenefitsGridProps } from './ProductBenefitsGrid.types'

export const ProductBenefitsGrid: React.FC<ProductBenefitsGridProps> = ({ page, ...rest }) => {
  return <pre>{JSON.stringify(rest, null, 2)}</pre>
}
