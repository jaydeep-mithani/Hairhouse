import { Typography, Accordion, AccordionItem } from '@overdose/components'
import { ShopifyAnalyticsProduct } from '@shopify/hydrogen'
import { AddToCartButton, IconRating } from '~/components'
import clsx from 'clsx'
import React from 'react'

import styles from './ProductHighlights.module.css'
import { ProductHighlightsProps } from './ProductHighlights.types'

export const ProductHighlights: React.FC<ProductHighlightsProps> = ({
  totalReviews,
  ratings,
  accordions,
  button,
  getProductByHandles,
}) => {
  const singleProduct = getProductByHandles[0]?.productData[0].node
  // for add to cart
  const productAnalytics: ShopifyAnalyticsProduct = {
    productGid: singleProduct.product?.id ?? '',
    variantGid: singleProduct?.id ?? '',
    name: singleProduct.product?.title ?? '',
    variantName: singleProduct.product?.title ?? '',
    brand: 'Hairhouse AU',
    price: singleProduct?.price?.amount ?? 0,
    quantity: 1,
  }

  return (
    <div className={styles.root}>
      <div className={styles.products_wrapper}>
        <div className={styles.product_card}>
          {getProductByHandles.length > 0 &&
            getProductByHandles?.map((product) => {
              const image = product?.productData[0].node.image
              const productData = product?.productData
              const amount = product?.productData[0]?.node.price.amount
              return (
                <>
                  {image && <img src={image.url} alt="straightener" />}
                  <div className={styles.card_text_content}>
                    {productData?.length > 0 &&
                      productData?.map((prod) => {
                        const title = prod.node.product.title
                        const description = prod.node.product.description
                        return (
                          <>
                            {title && (
                              <Typography tag="h3" variant="displayLarge" className={styles.title}>
                                {title}
                              </Typography>
                            )}
                            <div className={styles.reviews}>
                              {ratings && Array.from({ length: ratings }, (v, idx) => <IconRating key={idx} />)}
                              {totalReviews && (
                                <Typography tag="small" variant="caption">
                                  ({totalReviews})
                                </Typography>
                              )}
                            </div>
                            {description && (
                              <Typography tag="p" variant="body" theme={{ root: clsx(styles.subtitle) }}>
                                {description}
                              </Typography>
                            )}
                          </>
                        )
                      })}
                    {accordions.length > 0 && (
                      <Accordion>
                        {accordions.map((accordion, index: number) => (
                          <AccordionItem
                            variant="default"
                            header={accordion.title}
                            name={`${accordion.title}${index}`}
                            key={index}
                            className={styles.accordion}>
                            {accordion?.description?.html && (
                              <Typography
                                tag="p"
                                variant="body"
                                dangerouslySetInnerHTML={{ __html: accordion?.description?.html }}
                              />
                            )}
                          </AccordionItem>
                        ))}
                      </Accordion>
                    )}
                    {amount && (
                      <Typography tag="h3" variant="subheading" className={styles.price}>
                        ${amount}
                      </Typography>
                    )}
                    {button && (
                      <AddToCartButton
                        lines={[
                          {
                            quantity: 1,
                            merchandiseId: singleProduct.id,
                          },
                        ]}
                        variant="primary"
                        className={styles.button}
                        analytics={{
                          products: [productAnalytics],
                          totalValue: parseFloat(productAnalytics.price),
                        }}>
                        <Typography tag="p" variant="button">
                          {button.buttonText}
                        </Typography>
                      </AddToCartButton>
                    )}
                  </div>
                </>
              )
            })}
        </div>
      </div>
    </div>
  )
}
