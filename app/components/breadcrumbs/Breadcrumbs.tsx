import { Breadcrumbs as BreadcrumbsComponent } from '@overdose/components'

import { IconBreadCrumb } from '../Icon'
import { BreadcrumbProps } from './declarations/Breadcrumbs.types'
import styles from './styles/Breadcrumbs.module.css'
import { getBreadcrumbs } from './utils/getBreadcrumbs'

export function Breadcrumbs(props: BreadcrumbProps) {
  if (!props.crumbData) {
    return null
  }
  const { crumbData, className, ...rest } = props

  return (
    <BreadcrumbsComponent
      routes={getBreadcrumbs(crumbData)}
      separator={<IconBreadCrumb />}
      theme={{ root: styles.breadcrumbs }}
      className={className}
      {...rest}
    />
  )
}
