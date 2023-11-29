import { Select, Typography, Option } from '@overdose/components'
import { useNavigate, useLocation } from '@remix-run/react'
import React, { useState, useEffect } from 'react'

interface SizeData {
  [handle: string]: {
    custitem_size_variant: string
  }
}

interface OptionType {
  value: string
  content: string
}

const generateOptions = (sizeData: SizeData): OptionType[] => {
  return Object.entries(sizeData)
    .sort(([keyA, valueA], [keyB, valueB]) => {
      return valueA.custitem_size_variant.localeCompare(valueB.custitem_size_variant)
    })
    .map(([handle, size]) => {
      return {
        value: handle,
        content: size.custitem_size_variant,
      }
    })
}

interface SizeSelectorStitchProps {
  sizeData: SizeData
}

export const SizeSelectorStitch: React.FC<SizeSelectorStitchProps> = ({ sizeData }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const options = generateOptions(sizeData)

  const [currentSize, setCurrentSize] = useState<string>('')

  const HANDLE_POSITION_IN_URL = 2

  useEffect(() => {
    const handle = location.pathname.split('/')[HANDLE_POSITION_IN_URL]
    if (handle && sizeData.hasOwnProperty(handle)) {
      setCurrentSize(handle)
    }
  }, [location.pathname, sizeData])

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement> | string) => {
    const newSize = e as string
    navigate(`/products/${newSize}`)
  }

  return (
    <Select name="Size Selector" value={currentSize} onChange={handleSizeChange}>
      {options.map((option) => {
        return (
          <Option key={option.value} value={option.value} label={option.content}>
            <Typography tag="p" variant="body">
              {option.content}
            </Typography>
          </Option>
        )
      })}
    </Select>
  )
}
