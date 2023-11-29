import { BreadcrumbItem, Breadcrumbs } from '@overdose/components'
import { Link } from '@remix-run/react'
import { Gap } from '~/components/productSection/Gap'

export const generateBreadCrumbsByUrl = ({
  hide = null,
  pathname = '',
}: {
  hide?: boolean | null
  pathname?: string
}) => {
  const title = pathname?.split('/')?.at(-1)?.replace('-', ' ') ?? ''
  const item = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    !hide && (
      <>
        <Gap gap="1rem" mobileGap="1rem" />
        <Breadcrumbs
          style={{
            marginLeft: '100px',
          }}>
          <BreadcrumbItem>
            <Link to="/" title="Home">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>{item}</BreadcrumbItem>
        </Breadcrumbs>
        <Gap gap="1rem" mobileGap="1rem" />
      </>
    )
  )
}
