import { Typography, Option, Select } from '@overdose/components'
import { ShopifyAnalyticsProduct } from '@shopify/hydrogen'
import { Metafield } from '@shopify/hydrogen/storefront-api-types'
import { getMetafieldByKey, transformData } from '~/lib/utils'
import { useState } from 'react'

import { AddToCartButton } from '../AddToCartButton'
import { ProductInfoIcon } from '../Icon'
import { BuyNowPayLater } from '../productSection/buyNowPayLater'
import AfterpayProvider from '../productSection/buyNowPayLater/afterpayProvider'
import ZipProvider from '../productSection/buyNowPayLater/zipProvider'
import { ColorSwatchStitch } from '../productSection/colorSwatchStitch'
import { Gap } from '../productSection/Gap'
import { PriceWithDiscount } from '../productSection/priceWithDiscount'
import { CompareAtPrice } from '../productSection/priceWithDiscount/compareAtPrice'
import { Discount } from '../productSection/priceWithDiscount/discount'
import { Price } from '../productSection/priceWithDiscount/price'
import { SizeSelectorStitch } from '../productSection/sizeSelectorStitch'
import { SaleTag } from '../saleTag/SaleTag'
import styles from './ProductForm.module.css'
import { ProductFormProps } from './ProductForm.types'

interface AddToCartTextProps {
  isOutOfStock: boolean
  preOrderMetafield: Metafield
  selectedSize: string
}

interface SizeData {
  [key: string]: {
    custitem_size_variant: string
  }
}

const AMOUNT_SELECTOR_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const AddToCartText: React.FC<AddToCartTextProps> = ({ isOutOfStock, preOrderMetafield, selectedSize }) => {
  let text = 'Add To Bag'

  if (preOrderMetafield?.value.toLowerCase() === 'true') {
    text = 'Pre-Order'
  } else if (selectedSize) {
    text += ` - ${selectedSize}`
  }

  if (isOutOfStock) {
    return (
      <Typography tag="span" variant="body">
        Sold out
      </Typography>
    )
  }

  return (
    <Typography tag="span" className="flex items-center justify-center gap-2">
      <Typography tag="span" variant="body">
        {text}
      </Typography>
    </Typography>
  )
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  analytics,
  selectedVariant,
  sizeAndColorProductData,
  isOnSale = null,
  packValueAt = null,
}) => {
  const { handle } = product

  const { colorData, sizeData } = transformData(sizeAndColorProductData) ?? { colorData: {}, sizeData: {} }

  const selectedSize = (sizeData as SizeData)[handle]?.custitem_size_variant

  const [quantity, setQuantity] = useState('1')

  const isOutOfStock = !selectedVariant?.availableForSale

  const preOrderMetafield = getMetafieldByKey(product, 'custitem_pre_orderitem')
  const preOrderDateMetafield = getMetafieldByKey(product, 'custitem_pre_orderdate')

  const actualPrice =
    (selectedVariant.compareAtPrice && parseFloat(selectedVariant.compareAtPrice.amount)) ||
    parseFloat(selectedVariant.price?.amount)

  const isOnDiscount =
    selectedVariant?.price?.amount &&
    selectedVariant?.compareAtPrice?.amount &&
    Number(selectedVariant.price.amount) < Number(selectedVariant.compareAtPrice?.amount)

  const productAnalytics: ShopifyAnalyticsProduct = {
    ...analytics.products[0],
    quantity: 1,
  }

  const renderOptions = (options: number[]) => {
    return options.map((option) => {
      return (
        <Option key={option} value={option} label={option}>
          <Typography tag="p" variant="body">
            {option}
          </Typography>
        </Option>
      )
    })
  }

  const seletedStore = typeof window !== 'undefined' ? localStorage.getItem('selectedStore') : null
  const parsedSelectedStore = seletedStore && JSON.parse(seletedStore)

  const attributesLineItems = [
    {
      key: 'preOrder',
      value: preOrderMetafield?.value ?? 'false',
    },
    {
      key: '_parcel_dimension_cm@1',
      value: '60x20x40',
    },
    {
      key: '_parcel_weight_kg@1',
      value: '1',
    },
    {
      key: '_store',
      value: parsedSelectedStore?.rendr_store_id,
    },
  ]

  return (
    <>
      {Object.keys(sizeData).length !== 0 && <SizeSelectorStitch sizeData={sizeData} />}
      {Object.keys(colorData).length !== 0 && <ColorSwatchStitch colorData={colorData} handle={handle} />}
      {(Object.keys(sizeData).length !== 0 || Object.keys(colorData).length !== 0) && (
        <Gap gap="1.5rem" mobileGap="1.5rem" />
      )}
      <PriceWithDiscount>
        {selectedVariant?.price && <Price price={selectedVariant?.price} />}
        {isOnDiscount && selectedVariant?.compareAtPrice && <CompareAtPrice price={selectedVariant.compareAtPrice} />}
        {isOnDiscount && selectedVariant?.compareAtPrice?.amount && (
          <Discount originalPrice={selectedVariant.compareAtPrice.amount} salePrice={selectedVariant.price.amount} />
        )}
        {isOnSale && packValueAt && <SaleTag isOnSale={isOnSale} packValueAt={packValueAt} />}
      </PriceWithDiscount>
      <Gap gap="0.5rem" mobileGap="0.5rem" />
      <BuyNowPayLater>
        {actualPrice !== null && actualPrice !== undefined && <ZipProvider amount={actualPrice} />}
        {actualPrice !== null && actualPrice !== undefined && <AfterpayProvider amount={actualPrice} />}
      </BuyNowPayLater>
      <Gap gap="1.5rem" mobileGap="1.5rem" />
      <div className={styles.amountWithButtonContainer}>
        <Select
          theme={{ root: styles.amountContainer }}
          name={quantity}
          placeholder="1"
          defaultValue={quantity}
          options={AMOUNT_SELECTOR_LIST}
          onChange={(e) => {
            setQuantity(e)
          }}>
          {renderOptions(AMOUNT_SELECTOR_LIST)}
        </Select>
        <AddToCartButton
          lines={[
            {
              merchandiseId: selectedVariant.id,
              quantity: Number(quantity),
              attributes: attributesLineItems,
            },
          ]}
          width="full"
          variant={isOutOfStock ? 'secondary' : 'primary'}
          data-test="add-to-cart"
          className={styles.addToCartButton}
          analytics={{
            products: [analytics],
            totalValue: parseFloat(productAnalytics.price),
          }}>
          {preOrderMetafield && (
            <AddToCartText
              isOutOfStock={isOutOfStock}
              preOrderMetafield={preOrderMetafield}
              selectedSize={selectedSize}
            />
          )}
        </AddToCartButton>
      </div>

      {preOrderDateMetafield?.value && (
        <>
          <Gap gap="0.75rem" mobileGap="0.75rem" />
          <Typography as="span" variant="caption" theme={{ root: styles.preOrderText }}>
            <ProductInfoIcon />
            This item is available for pre-order with shipping estimated for {preOrderDateMetafield.value}
          </Typography>
        </>
      )}
    </>
  )
}
