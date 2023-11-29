import { Typography, Button, Option, Select } from '@overdose/components'
import React, { useState, useEffect } from 'react'

import { SectionCollectionDropDownProps } from './SectionCollectionDropDown.types'
import styles from './styles/SectionCollectionDropDown.module.css'

export const SectionCollectionDropDown: React.FC<SectionCollectionDropDownProps> = ({
  shopifyCollections,
  headline,
}) => {
  const [option, setOption] = useState<{ url: string; title: string }>({
    url: shopifyCollections[0]?.collectionPage?.collection?.handle ?? '',
    title: shopifyCollections[0]?.title ?? '',
  })
  const [id, setId] = useState(shopifyCollections[0]?.id ?? '0')

  useEffect(() => {
    const collection = shopifyCollections.find((collection) => {
      return collection.id === id
    })

    if (collection) {
      setOption({
        url: collection?.collectionPage?.collection?.handle ?? '',
        title: collection?.title ?? '',
      })
    }
  }, [id, shopifyCollections])

  return (
    <div className={styles.root}>
      <Typography
        tag="p"
        variant="displayLarge"
        theme={{
          root: styles.title,
        }}>
        <span>{headline}</span>
      </Typography>
      <Select
        defaultValue={id}
        theme={{
          root: styles.select,
          suffix: styles.selectSuffix,
          arrow: styles.selectArrow,
        }}
        onChange={(id: string) => {
          setId(id)
        }}>
        {!!shopifyCollections?.length &&
          shopifyCollections?.map((option, index) => {
            return (
              <Option key={`${option.title}${index}`} value={option.id} label={option.title}>
                <Typography
                  tag="p"
                  variant="displayExtraLarge"
                  theme={{
                    root: styles.options,
                  }}>
                  {option?.title}
                </Typography>
              </Option>
            )
          })}
      </Select>

      <Button
        variant="body"
        href={`/collections/${option.url}`}
        theme={{
          root: styles.button,
        }}>
        View products
      </Button>
    </div>
  )
}
