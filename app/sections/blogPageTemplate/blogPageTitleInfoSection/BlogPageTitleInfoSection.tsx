import { Input, Typography, Button } from '@overdose/components'
import { useLocation, useSearchParams, useNavigate } from '@remix-run/react'
import { IconSearch } from '~/components'
import clsx from 'clsx'
import { useState, useEffect } from 'react'

import styles from './BlogPageTitleInfoSection.module.css'
import { BlogPageTitleInfoSectionProps } from './BlogPageTitleInfoSection.types'

export const BlogPageTitleInfoSection = (props: BlogPageTitleInfoSectionProps) => {
  const { title, subtitle, url, blogs } = props
  const [params] = useSearchParams()
  const [searchInputOpened, setSearchInputOpened] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.get('s')) {
      const searchTermVal = String(params.get('s'))
      setSearchTerm(searchTermVal)
      setSearchInputOpened(true)
    }
  }, [params, searchTerm])

  if (!title && !subtitle && !url && !blogs?.length) {
    return null
  }

  const performSearch = (searchTermValue: string) => {
    if (params.get('page')) {
      params.delete('page')
    }
    if (searchTermValue?.length) {
      setSearchTerm(String(searchTermValue))
      params.set('s', String(searchTermValue))
    } else {
      setSearchTerm('')
      params.delete('s')
    }
    navigate(`${location.pathname}?${params.toString()}`)
  }

  return (
    <div className={styles.root}>
      {(title || subtitle) && (
        <div className={styles.titleAndSubtitle}>
          {title && (
            <div className={styles.titleWrapper}>
              <Typography
                tag="h1"
                variant="displayLarge"
                theme={{
                  root: styles.blogTitle,
                }}>
                {title}
              </Typography>
            </div>
          )}
          {subtitle && (
            <div className={styles.subtitleWrapper}>
              <Typography
                tag="p"
                theme={{
                  root: styles.blogSubtitle,
                }}>
                {subtitle}
              </Typography>
            </div>
          )}
        </div>
      )}
      {!!blogs?.length && (
        <div className={styles.blogCategoriesAndSearch}>
          <div className={clsx(styles.searchInputWrapper, { [styles.searchInputOpened]: searchInputOpened })}>
            <Input
              variant="underlined"
              name="s"
              allowClear
              placeholder="Enter keyword to search..."
              value={searchTerm}
              theme={{ root: styles.searchInput }}
              onChange={(value: string) => {
                return performSearch(value)
              }}
            />
            <Button
              variant="link"
              theme={{ root: styles.iconSearchWrapper }}
              onClick={() => {
                return setSearchInputOpened(!searchInputOpened)
              }}>
              <IconSearch width={24} height={24} />
            </Button>
          </div>
          <ul className={styles.blogItems}>
            {blogs.map((blog, index) => {
              return (
                <li
                  className={clsx(styles.blogItem, { [styles.activeItem]: url === blog?.url })}
                  key={`bkey${index + 1}`}>
                  <Button variant="link" theme={{ root: styles.blogItemLink }} href={`/${blog?.url}`}>
                    {blog?.title}
                  </Button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
