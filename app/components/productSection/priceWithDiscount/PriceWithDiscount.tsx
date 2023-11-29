import { Container } from '~/components/container'
import { ReactNode } from 'react'

type PriceWithDiscountProps = {
  children: ReactNode
}

export const PriceWithDiscount: React.FC<PriceWithDiscountProps> = ({ children }) => {
  return <Container gap="0.75rem">{children}</Container>
}
