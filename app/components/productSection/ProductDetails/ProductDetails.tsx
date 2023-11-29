import { Container } from '~/components/container'
import { ReactNode } from 'react'

import styles from './ProductDetails.module.css'

type ProductDetailsProps = {
  children: ReactNode
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ children }) => {
  return (
    <Container className={styles.container} flexDirection="column">
      {children}
    </Container>
  )
}
