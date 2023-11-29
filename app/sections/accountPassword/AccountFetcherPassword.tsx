import { useFetcher } from '@remix-run/react'

import { AccountPassword } from './AccountPassword'
import { AccountPasswordProps } from './AccountPassword.types'

export const AccountFetcherPassword = (data: AccountPasswordProps['data']) => {
  const fetcher = useFetcher()

  if (!data) {
    return null
  }

  return <AccountPassword fetcher={fetcher} data={data} />
}
