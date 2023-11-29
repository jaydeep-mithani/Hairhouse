import { Typography, Breadcrumbs, BreadcrumbItem } from '@overdose/components'
import { useLoaderData, Await, Link } from '@remix-run/react'
import type { Collection, Filter, Product } from '@shopify/hydrogen/storefront-api-types'
import { Section, SortFilter, ProductGrid, ProductCarousel } from '~/components'
import React, { Suspense } from 'react'

export const SectionSearchMain = () => {
  const { searchTerm, products, noResultRecommendations, appliedFilters } = useLoaderData<typeof loader>()
  const noResults = products?.nodes?.length === 0

  /**
   * Formats the mock data for a product carousel.
   * @param products - The array of products to be included in the carousel.
   * @returns The formatted mock data for the product carousel.
   */
  const formatProductCarouselMockData = (products: Product[]) => {
    return {
      id: 'testID',
      titlle: 'Our hair bestsellers',
      highlightColour: {
        hex: null,
      },
      tabs: [
        {
          getCollectionByHandle: {
            collection: products,
          },
        },
      ],
    }
  }

  return (
    <>
      <div className="pt-9 px-4 lg:pt-10 lg:px-12">
        <Breadcrumbs>
          <BreadcrumbItem>
            <Link to="/" title="Home">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Search results</BreadcrumbItem>
        </Breadcrumbs>
        {searchTerm && (
          <Typography variant="displayExtraLarge" tag="h1" weight="bold" theme={{ root: 'pt-2' }}>
            Search results for &quot;{searchTerm}&quot;
          </Typography>
        )}
        {noResults && (
          <div className="flex flex-col bg-[var(--color-brand-secondary-light-brown)] p-3 mt-6 text-[var(--color-text-primary)] lg:gap-1">
            <Typography tag="p" variant="body" weight="bold">
              Your search returned no results.
            </Typography>
            <Typography tag="p" variant="body" theme={{ root: 'text-[var(--color-text-secondary)] font-[350]' }}>
              Sorry, we couldn&apos;t find any products. Please check your spelling or try searching for similar terms.
            </Typography>
          </div>
        )}
      </div>
      {!searchTerm || noResults ? (
        <Suspense>
          <Await errorElement="There was a problem loading related products" resolve={noResultRecommendations}>
            {(data) => {
              return (
                <ProductCarousel
                  data={formatProductCarouselMockData(data.featuredProducts)}
                  className="[--carouselWrapperPadding:67px_0] lg:[--carouselWrapperPadding:100px_0] [--carouselBackgroundColor:transparent] "
                />
              )
            }}
          </Await>
        </Suspense>
      ) : (
        <Section padding="none" className="px-4 lg:px-12 py-6 lg:pb-[60px]">
          <SortFilter
            filters={products?.filters as Filter[]}
            appliedFilters={appliedFilters}
            collection={{ products } as Collection}>
            <ProductGrid key="search" url={`/search?q=${searchTerm}`} collection={{ products } as Collection} />
          </SortFilter>
        </Section>
      )}
    </>
  )
}
