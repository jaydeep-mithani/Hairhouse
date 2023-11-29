import { ReactNode } from 'react'

import styles from './ProductSection.module.css'

type ProductSectionProps = {
  children: ReactNode
}

export const ProductSection: React.FC<ProductSectionProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
