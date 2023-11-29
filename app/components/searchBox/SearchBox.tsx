import { Typography, Input, Modal, Button, Link, useScrollLock } from '@overdose/components'
import { useFetcher, useNavigate } from '@remix-run/react'
import { IconSearch, ProductCard } from '~/components'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useDebounce } from 'react-use'

import styles from './SearchBox.module.css'

export const SearchBox = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('*')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [products, setProducts] = useState([])
  const [suggestions, setSuggestions] = useState()
  const fetcher = useFetcher()
  const navigate = useNavigate()
  const searchBoxRef = useRef(null)

  const SEARCH_DEBOUNCE = 500
  const POPULAR_PRODUCTS_COUNT = 5
  const noResults = searchTerm === '*' || !fetcher?.data?.nodes?.length

  useScrollLock(isModalVisible)

  useDebounce(
    () => {
      if (!searchTerm) {
        return null
      }
      return fetcher.submit({ searchTerm }, { method: 'post', action: '/search' })
    },
    SEARCH_DEBOUNCE,
    [searchTerm],
  )

  useEffect(() => {
    // Set the value of --modalTopOffset to the top position of the searchBoxRef element,
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty(
        '--modalTopOffset',
        `${searchBoxRef?.current?.getBoundingClientRect().top}px`,
      )
    }
    // query for 5 popular products if searchTerm has default value
    if (searchTerm === '*') {
      setProducts(fetcher?.data?.nodes?.length && fetcher.data.nodes.slice(0, POPULAR_PRODUCTS_COUNT))
    } else {
      !noResults && setProducts(fetcher?.data?.nodes)
    }
    setSuggestions(fetcher?.data?.suggestions)
  }, [fetcher.data, searchTerm, noResults])

  return (
    <div className={clsx(styles.root, className)}>
      <switch
        className={isModalVisible ? styles.customMask : styles.maskHidden}
        onClick={() => {
          return setIsModalVisible(false)
        }}
      />
      <Input
        variant="underlined"
        prefix={<IconSearch />}
        theme={{ root: clsx(styles.input, 'flex gap-[10px] lg:gap-5') }}
        allowClear
        placeholder="Search brands, products, articles..."
        onChange={(value) => {
          return value ? setSearchTerm(value) : setSearchTerm('*')
        }}
        onFocus={() => {
          return setIsModalVisible(true)
        }}
        onKeyDown={(e) => {
          e.code === 'Enter' && searchTerm && navigate(`/search?q=${searchTerm}`)
        }}
      />
      <div ref={searchBoxRef} style={{ height: '1px' }} />
      <Modal
        visible={isModalVisible}
        simple
        footer={null}
        theme={{
          root: styles.modalRoot,
          content: styles.contentModal,
          modal: styles.customModal,
          mask: styles.maskHidden,
        }}>
        <div className={styles.modalWrapper}>
          <div className={styles.searchMenu}>
            {!!suggestions?.length &&
              suggestions.map((refineFacet, index) => {
                return (
                  <div key={`${refineFacet.title}${index}`}>
                    {refineFacet?.title && (
                      <Typography
                        tag="p"
                        variant="subheading"
                        weight="bold"
                        theme={{
                          root: clsx(styles.title, styles.titleBorder),
                        }}>
                        {refineFacet.title}
                      </Typography>
                    )}
                    {refineFacet?.values?.length ? (
                      refineFacet.values.map((value, index) => {
                        return (
                          <Link key={index} to={`/search?q=${value}`}>
                            <Typography tag="p" variant="body" key={index} theme={{ root: styles.refineFacet }}>
                              {value}
                            </Typography>
                          </Link>
                        )
                      })
                    ) : (
                      <Typography tag="p" variant="body" key={index} theme={{ root: styles.refineFacet }}>
                        No search results found
                      </Typography>
                    )}
                  </div>
                )
              })}
          </div>
          <div className={styles.productsWrapper}>
            {noResults && searchTerm !== '*' && fetcher?.data?.searchMetaData?.queryParams?.q && (
              <div className="flex flex-col bg-[var(--color-brand-secondary-light-brown)] p-3 mt-1 mb-2 text-[var(--color-text-primary)] lg:gap-1">
                <Typography tag="p" variant="body" weight="bold">
                  Your search for &apos;{searchTerm}&apos; returned no results.
                </Typography>
                <Typography tag="p" variant="body" theme={{ root: 'text-[var(--color-text-secondary)] font-[350]' }}>
                  Sorry, we couldn&apos;t find any products. Please check your spelling or try searching for similar
                  terms.
                </Typography>
              </div>
            )}
            <div className={clsx(styles.titleWrapper, styles.titleBorder)}>
              <Typography
                tag="p"
                variant="subheading"
                weight="bold"
                theme={{
                  root: styles.title,
                }}>
                {noResults ? 'Popular products' : 'Products'}
              </Typography>
              <Typography
                tag="p"
                variant="caption"
                theme={{
                  root: styles.titleResults,
                }}>
                {!noResults && `${fetcher?.data?.pageInfo?.numberOfProducts} result(s) found for ‘${searchTerm}’`}
              </Typography>
            </div>

            <div className={clsx(styles.products, noResults ? styles.recommendedProducts : styles.productResults)}>
              {!!products?.length &&
                products.map((product) => {
                  return (
                    <ProductCard
                      product={product as Product}
                      key={product.id}
                      placement="instantSearch"
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        setIsModalVisible(false)
                        product?.handle && navigate(`/products/${product.handle}`)
                      }}
                    />
                  )
                })}
            </div>
            {!noResults && searchTerm && (
              <Button
                href={`/search?q=${searchTerm}`}
                variant="solid"
                status="primary"
                theme={{ root: styles.viewAllButton }}>
                View all results
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  )
}
