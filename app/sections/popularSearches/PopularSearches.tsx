import { Link } from '@overdose/components'

import styles from './popularSearches.module.css'
import { PopularSearchesProps } from './PopularSearches.types'

export const PopularSearches: React.FC<PopularSearchesProps> = ({ headline, searchTerms }) => {
  return (
    <div className={styles.root}>
      {headline && <p className={styles.title}>{headline}</p>}

      {searchTerms?.length > 0 ? (
        <ul className={styles.list}>
          {searchTerms.map((searchText, i) => {
            return (
              <li key={i} className={styles.listItem}>
                <Link to={`/search?q=${searchText}`}>{searchText}</Link>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}
