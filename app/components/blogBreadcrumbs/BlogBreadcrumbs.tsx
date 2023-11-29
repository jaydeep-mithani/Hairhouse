import { Breadcrumbs } from '@overdose/components'

import { IconBreadCrumb } from '../Icon'
import styles from './BlogBreadcrumbs.module.css'
import { BlogBreadcrumbProps } from './BlogBreadcrumbs.types'

export function BlogBreadcrumbs(data: BlogBreadcrumbProps) {
  if (!data?.routes) {
    return null
  }
  const { routes, className } = data
  return (
    <div className={styles.blogBreadcrumbsWrapper}>
      <Breadcrumbs routes={routes} separator={<IconBreadCrumb />} className={className} />
    </div>
  )
}
