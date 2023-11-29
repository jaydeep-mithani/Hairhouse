import { Typography } from '@overdose/components'
import { useNavigate } from '@remix-run/react'
import { Container } from '~/components/container'
import React, { useState } from 'react'

import styles from './ColorSwatchStitch.module.css'

interface ColorData {
  [handle: string]: {
    colour_name: string
    custitem_hex_colour1: string
    custitem_hex_colour2?: string
  }
}

interface ColorSwatchProps {
  colorData: ColorData
  handle: string
}

export const ColorSwatchStitch: React.FC<ColorSwatchProps> = ({ colorData, handle }) => {
  const navigate = useNavigate()

  const initialHandle = handle || Object.keys(colorData)[0]
  const [selectedColor, setSelectedColor] = useState(initialHandle)
  const selectedColorName = colorData[selectedColor]?.colour_name || ''

  const onColorClick = (handle: string) => {
    navigate(`/products/${handle}`, { replace: true })
    setSelectedColor(handle)
  }

  return (
    <Container flexDirection="column" gap="0.75rem">
      <Typography tag="span">
        <Typography theme={{ root: styles.text }}>Colour:</Typography> {selectedColorName}
      </Typography>
      <Container display="flex" gap="1rem" margin="0 0 0 6px" flexWrap="wrap">
        {Object.entries(colorData).map(([handle, colors]) => {
          return (
            <button
              type="button"
              key={`color-swatch-${handle}`}
              className={`${styles.colorSwatch} ${handle === selectedColor ? styles.selectedColorSwatch : ''}`}
              style={{
                background: colors.custitem_hex_colour2
                  ? `linear-gradient(to bottom right, ${colors.custitem_hex_colour1} 50%, ${colors.custitem_hex_colour2} 50%)`
                  : colors.custitem_hex_colour1,
              }}
              onClick={() => {
                return onColorClick(handle)
              }}
            />
          )
        })}
      </Container>
    </Container>
  )
}
