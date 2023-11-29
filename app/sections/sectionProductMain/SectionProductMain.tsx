import { Accordion, AccordionItem, Typography } from '@overdose/components'
import { Metafield } from '@shopify/hydrogen/storefront-api-types'
import { BaazarVoiceReviews } from '~/components/baazarVoiceReviews'
import { RatingSummary } from '~/components/baazarVoiceReviews/ratingSummary'
import { Container } from '~/components/container'
import { FreeGiftWithPurchase } from '~/components/freeGiftWithPurchase'
import { ProductDetailIcons } from '~/components/productDetailIcons'
import { ProductForm } from '~/components/productForm'
import { ProductSection } from '~/components/productSection'
import { Description } from '~/components/productSection/Description'
import { Gap } from '~/components/productSection/Gap'
import { ProductDetails } from '~/components/productSection/ProductDetails'
import { RewardPoints } from '~/components/productSection/RewardPoints'
import React, { useState } from 'react'

import { GiftCardPDPForm } from '../giftCardPDPForm'
import { ProductImageGallery } from '../productImageGallery'
import { ProductUpsellCarousel } from '../productUpsellCarousel/ProductUpsellCarousel'
import styles from './SectionProductMain.module.css'
import { SectionProductMainProps } from './SectionProductMain.types'

export const SectionProductMain: React.FC<SectionProductMainProps> = ({ page, ...rest }) => {
  const {
    product,
    freeProduct,
    selectedVariant,
    promotionLabelMetaObject,
    analytics,
    sizeAndColorProductData,
    productDetailIcons,
    recommendedProducts,
    promotionLabelIcon,
  } = rest
  const googleProductDescriptionMeta = product?.metafields.find((metafield) => {
    return metafield && metafield.key === 'custitem_google_product_description' && metafield.value
  })

  const netSuiteId = product?.metafields.find((metafield) => {
    return metafield && metafield.key === 'internalid' && metafield.value
  })

  const isOnSale = product?.metafields.find((metafield) => {
    return metafield && metafield.key === 'savings' && metafield.value
  })

  const packValueAt = product?.metafields.find((metafield) => {
    return metafield && metafield.key === 'custitem_pack_value_at' && metafield.value
  })

  const promotionLabel: { backgroundColor: string; borderColor: string; label: string; color: string } = {
    backgroundColor: '',
    borderColor: '',
    label: '',
    color: '',
  }
  promotionLabelMetaObject?.metaobject?.fields?.forEach((field) => {
    if (field.key === 'background_colour') {
      promotionLabel.backgroundColor = field?.value ?? ''
    }
    if (field.key === 'border_color') {
      promotionLabel.borderColor = field?.value ?? ''
    }
    if (field.key === 'category_page_label') {
      promotionLabel.label = field?.value ?? ''
    }
    if (field.key === 'text_color') {
      promotionLabel.color = field?.value ?? ''
    }
  })

  const badgeType = promotionLabelMetaObject?.metaobject?.fields?.find((field) => {
    return field.key === 'label_type'
  })?.value

  const descriptionDropdownMetafields = [
    { key: 'custitem_b2c_how_to', header: 'How to use' },
    { key: 'custitem_b2c_ingredients', header: 'Ingredients' },
    { key: 'custitem_b2c_delivery_desc', header: 'Delivery & returns' },
  ]

  const descriptionDropdownRef = React.useRef<HTMLDivElement>(null)

  const [descriptionAccordionState, setDescriptionAccordionState] = useState('')

  const handleReadMoreClick = React.useCallback(() => {
    descriptionDropdownRef.current?.scrollIntoView({ behavior: 'smooth' })
    setDescriptionAccordionState('Product description')
  }, [])

  const renderMetafieldItems = (key: string, header: string, metafields: Metafield[]) => {
    return metafields
      .filter((metafield) => {
        return metafield && metafield.key === key
      })
      .map((metafield) => {
        const uniqueId = `${header}_${metafield?.key}`
        return metafield?.key && metafield?.value ? (
          <AccordionItem
            variant="default"
            theme={{ item: styles.accordion }}
            header={header}
            name={uniqueId}
            key={uniqueId}>
            <Typography
              theme={{ root: styles.descriptionAccordionText }}
              variant="body"
              dangerouslySetInnerHTML={{ __html: metafield?.value }}
            />
          </AccordionItem>
        ) : null
      })
  }

  const freeGiftProps = promotionLabelMetaObject &&
    freeProduct && {
      ...freeProduct,
      description: promotionLabelMetaObject.metaobject.fields.find((field) => {
        return field && field.key === 'product_page_content'
      })?.value,
      productPageLabel: promotionLabelMetaObject?.metaobject.fields.find((field) => {
        return field && field.key === 'product_page_label'
      })?.value,
    }

  return (
    <>
      <ProductSection>
        <ProductImageGallery
          media={product?.media.nodes}
          price={selectedVariant?.price}
          compareAtPrice={selectedVariant?.compareAtPrice}
          publishedAt={product?.publishedAt}
          promotionLabel={promotionLabel}
          promotionLabelIcon={promotionLabelIcon}
          badgeType={badgeType}>
          {productDetailIcons && <ProductDetailIcons productDetailIcons={productDetailIcons} />}
          <Gap gap="1.25rem" />
        </ProductImageGallery>
        <ProductDetails>
          <Gap mobileGap="0.75rem" />
          {product?.vendor && (
            <Typography tag="span" variant="label">
              {product.vendor}
            </Typography>
          )}
          <Gap gap="1rem" mobileGap="1rem" />
          {product?.title && (
            <Typography tag="h1" variant="displayMedium" theme={{ root: styles.title }} weight="bold">
              {product.title}
            </Typography>
          )}
          <Gap gap="1rem" mobileGap="1.25rem" />
          <Container justifyContent="space-between">
            {netSuiteId && (
              <BaazarVoiceReviews>
                <RatingSummary productId={netSuiteId.value} />
              </BaazarVoiceReviews>
            )}
            {selectedVariant?.price.amount && (
              <RewardPoints productPrice={parseFloat(selectedVariant?.price.amount)} pointsMultiplication={1} />
            )}
          </Container>
          <Gap gap="1.25rem" mobileGap="1.25rem" />
          {googleProductDescriptionMeta && (
            <Description description={googleProductDescriptionMeta?.value} onReadMoreClick={handleReadMoreClick} />
          )}
          <Gap gap="1.25rem" mobileGap="1.25rem" />
          {freeGiftProps && promotionLabelMetaObject && (
            <>
              <FreeGiftWithPurchase
                productPageLabel={freeGiftProps.productPageLabel || ''}
                image={freeGiftProps.product?.featuredImage}
                description={freeGiftProps.description}
              />
              <Gap gap="1.25rem" mobileGap="1.25rem" />
            </>
          )}
          {product &&
            selectedVariant &&
            (product?.tags?.includes('gift voucher') ? (
              <GiftCardPDPForm product={product} analytics={analytics} selectedVariant={selectedVariant} />
            ) : (
              <ProductForm
                product={product}
                analytics={analytics}
                selectedVariant={selectedVariant}
                sizeAndColorProductData={sizeAndColorProductData}
              />
            ))}
          <Gap gap="2rem" mobileGap="2rem" />
          <Accordion defaultValue={descriptionAccordionState}>
            {productDetailIcons !== undefined && (
              <AccordionItem
                variant="default"
                theme={{ item: `${styles.accordion} ${styles.benefitsAccordion}` }}
                header="Benefits"
                name="Benefits"
                key="Benefits">
                <ProductDetailIcons productDetailIcons={productDetailIcons} />
              </AccordionItem>
            )}
            <AccordionItem
              variant="default"
              theme={{ item: styles.accordion }}
              header="Product description"
              name="Product description"
              key={product?.handle}
              ref={descriptionDropdownRef}>
              <Typography
                theme={{ root: styles.descriptionAccordionText }}
                variant="body"
                dangerouslySetInnerHTML={{ __html: product?.descriptionHtml }}
              />
            </AccordionItem>
            {descriptionDropdownMetafields?.map(({ key, header }) => {
              return product?.metafields !== undefined && renderMetafieldItems(key, header, product?.metafields)
            })}
          </Accordion>
          <Gap gap="1.25rem" mobileGap="1.25rem" />
          {selectedVariant?.sku && (
            <Typography theme={{ root: styles.sku }} variant="caption">
              SKU: {selectedVariant.sku}
            </Typography>
          )}
        </ProductDetails>
      </ProductSection>
      <ProductUpsellCarousel products={recommendedProducts?.productRecommendations?.slice(0, 3)} />
    </>
  )
}
