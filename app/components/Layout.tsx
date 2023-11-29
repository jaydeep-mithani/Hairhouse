import { LoadingLogo } from '~/components'
import { mock } from '~/components/loadingLogo/LoadingLogo.mock'
import { GlobalLoaderContext } from '~/provider/globalLoader'
import { useContext } from 'react'

import type { LayoutData } from '../root'

export function Layout({ children }: { children: React.ReactNode; layout: LayoutData }) {
  const { isLoaderShown } = useContext(GlobalLoaderContext)
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      {isLoaderShown && <LoadingLogo {...mock} />}
    </>
  )
}
