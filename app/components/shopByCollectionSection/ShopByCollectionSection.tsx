import { Typography, Button, Option, Select } from '@overdose/components'
import { ShopByCollectionElementsFragment } from 'graphql/HygraphModel.generated'
import React, { useState } from 'react'

import styles from './styles/ShopByCollectionSection.module.css'

export const ShopByCollectionSection = ({ data }: ShopByCollectionElementsFragment) => {
  const { button, title, menu } = data
  const defaultValue = menu.menuNavigation[0]
  const [url, setUrl] = useState(defaultValue?.url)

  return (
    <div className={styles.root}>
      <Typography
        tag="p"
        variant="displayLarge"
        theme={{
          root: styles.title,
        }}>
        {title}
      </Typography>

      <Select
        name={menu.menuNavigation.title}
        defaultValue={defaultValue}
        theme={{
          root: styles.select,
          suffix: styles.selectSuffix,
          arrow: styles.selectArrow,
        }}
        onChange={(value) => setUrl(value.url)}>
        {menu.menuNavigation?.map((option, index) => {
          return (
            <Option key={`${option.title}${index}`} value={option} label={option.title}>
              <Typography
                tag="p"
                variant="displayExtraLarge"
                theme={{
                  root: styles.options,
                }}>
                {option.title}
              </Typography>
            </Option>
          )
        })}
      </Select>

      {button && (
        <Button
          variant="solid"
          status={button.theme}
          href={url}
          theme={{
            root: styles.button,
          }}>
          {button.text}
        </Button>
      )}
    </div>
  )
}
