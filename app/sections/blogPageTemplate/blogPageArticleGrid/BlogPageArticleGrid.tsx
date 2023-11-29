import { Pagination } from '@overdose/components'
import { useLocation, useSearchParams, useNavigate } from '@remix-run/react'
import { ArticleGridItem } from '~/components'

import styles from './BlogPageArticleGrid.module.css'
import { BlogPageArticleGridProps } from './BlogPageArticleGrid.types'

export const BlogPageArticleGrid = (data: BlogPageArticleGridProps) => {
  const { articles, totalPages, currentPage } = data
  const [params] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()

  const goToPage = (currentPage: number) => {
    if (currentPage === 1) {
      params.delete('page')
    } else {
      params.set('page', String(currentPage))
    }
    navigate(`${location.pathname}?${params.toString()}`)
  }

  return (
    <div className={styles.root}>
      <div className={styles.blogPageGrid}>
        {!articles?.length ? (
          <p className="mb-4 w-full text-center">No articles found...</p>
        ) : (
          <>
            {articles.map((articleItem, index) => {
              return (
                <div className={styles.gridItemArticle} key={`ai${index + 1}`}>
                  <ArticleGridItem article={articleItem?.node} />
                </div>
              )
            })}
          </>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.paginationWrapper}>
          <Pagination
            total={totalPages}
            siblings={1}
            initialPage={1}
            page={currentPage}
            onChange={(page: number) => {
              goToPage(page)
            }}
            theme={{
              root: styles.pagination,
            }}
          />
        </div>
      )}
    </div>
  )
}
