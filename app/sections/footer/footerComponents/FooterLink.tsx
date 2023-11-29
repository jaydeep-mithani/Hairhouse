import { Link } from '~/components'
import { type EnhancedMenuItem, addPrefixSlashToUrl } from '~/lib/utils'

export const FooterLink = ({
  item,
  className,
  children,
}: {
  item: EnhancedMenuItem
  className: string
  children?: JSX.Element
}) => {
  const to = addPrefixSlashToUrl(item?.to || item?.url)
  const target = item?.openInNewWindow ? '_blank' : '_self'

  if (!to) {
    return children
  }

  if (to.startsWith('http')) {
    return (
      <a href={to} target={target} rel="noopener noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} target={target} prefetch="intent" className={className}>
      {children}
    </Link>
  )
}
