import { Typography, Option, Select } from '@overdose/components'
import { useLocation, useSearchParams, useNavigate } from '@remix-run/react'
import clsx from 'clsx'

import { getSortLink, sortMenuItems } from './SortFilter.helpers'
import styles from './SortFilter.module.css'
import { SortMenuProps } from './SortFilter.types'

export function SortMenu({ className }: SortMenuProps) {
  const [params] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const activeItem = sortMenuItems.find((item) => item.key === params.get('sort'))

  return (
    <Select
      name="SortBy"
      defaultValue={activeItem}
      placeholder="Please select"
      prefix={
        <Typography
          tag="p"
          variant="body"
          theme={{
            root: styles.selectTitle,
          }}>
          Sort By:
        </Typography>
      }
      theme={{
        root: clsx(styles.select, className),
        prefix: styles.selectPrefix,
        arrow: styles.selectArrow,
      }}
      onChange={(value) => navigate(getSortLink(value.key, params, location), { replace: true })}>
      {sortMenuItems.map((item, index) => {
        return (
          <Option key={`${item.key}${index}`} value={item} label={item.label}>
            <Typography
              tag="p"
              variant="body"
              theme={{
                root: styles.selectOptions,
              }}>
              {item.label}
            </Typography>
          </Option>
        )
      })}
    </Select>
  )
}
