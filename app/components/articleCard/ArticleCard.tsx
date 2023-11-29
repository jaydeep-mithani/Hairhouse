import { Typography, Button, Image } from '@overdose/components'
import { Link, Bullet } from '~/components'

import styles from './ArticleCard.module.css'
import { ArticleCardProps } from './ArticleCard.types'

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { postedDate, name, image, description, expertName, button, topLeftBoxText } = article

  /**
   * Formats a date string or Date object into a readable format.
   * If the date is within the threshold hours, it returns the elapsed hours ago.
   * Otherwise, it returns the day and month.
   *
   * @param date The date string or Date object
   * @returns The formatted date string
   */
  const formatDate = (date: string | Date) => {
    const THRESHOLD_HOURS = 24
    const postedDate = new Date(date)
    const currentDate = new Date()
    const hours = Math.floor(Math.abs(Number(currentDate) - Number(postedDate)) / 36e5)
    const month = postedDate.toLocaleString('default', { month: 'long' }).slice(0, 3)
    const day = postedDate.getDate()

    return hours <= THRESHOLD_HOURS ? `${hours} hours ago` : `${day} ${month}`
  }

  return (
    <div className={styles.root}>
      <Link to={button?.url || ''}>
        {topLeftBoxText && (
          <Typography
            tag="p"
            variant="caption"
            theme={{
              root: styles.tag,
            }}>
            {topLeftBoxText}
          </Typography>
        )}
        {image?.url && (
          <Image
            alt={image?.altText || name || ''}
            className="object-cover w-full"
            src={image?.url}
            height={400}
            sizes="(min-width: 768px) 50vw, 100vw"
            width={600}
            loaderOptions={{
              scale: 2,
              crop: 'center',
            }}
          />
        )}
      </Link>
      <Typography
        tag="p"
        variant="subheading"
        weight="bold"
        theme={{
          root: styles.title,
        }}>
        {name}
      </Typography>
      <div className={styles.authorAndDate}>
        {postedDate && (
          <>
            <Typography tag="p" variant="body">
              Posted {formatDate(postedDate)}
            </Typography>
            <Bullet />
          </>
        )}
        {expertName && (
          <Typography tag="p" variant="body">
            {expertName}
          </Typography>
        )}
      </div>
      {description?.text && (
        <Typography
          tag="p"
          variant="body"
          theme={{
            root: styles.excerpt,
          }}>
          {description.text}
        </Typography>
      )}
      <Button
        variant="link"
        href={button?.url}
        theme={{
          root: styles.button,
        }}>
        Read now
      </Button>
    </div>
  )
}
