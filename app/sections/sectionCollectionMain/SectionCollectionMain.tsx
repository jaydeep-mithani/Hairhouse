import { useLoaderData } from '@remix-run/react'
import { Section, SortFilter, ProductGrid } from '~/components'
import React from 'react'

import { SectionCollectionMainProps } from './SectionCollectionMain.types'

export const SectionCollectionMain: React.FC<SectionCollectionMainProps> = ({ page, ...rest }) => {
  const { collection, appliedFilters } = useLoaderData<typeof loader>()

  if (!collection?.products) {
    return null
  }

  return (
    <Section padding="none" className="px-4 py-8 md:p-8 lg:px-12 lg:py-10">
      <SortFilter
        filters={collection?.products?.filters as Filter[]}
        appliedFilters={appliedFilters}
        collection={collection as CollectionType}>
        <ProductGrid
          key={collection?.id}
          collection={collection as CollectionType}
          url={`/collections/${collection?.handle}`}
          data-test="product-grid"
          modulePromoBanner={rest?.modulePromoBanner}
        />
      </SortFilter>
    </Section>
  )
}
