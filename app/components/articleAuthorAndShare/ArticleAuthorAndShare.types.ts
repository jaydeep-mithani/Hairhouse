import { ArticleAuthorFragment } from './ArticleAuthorAndShare.fragment.generated'

import { ShareIconsProps } from '~/components/shareIcons/ShareIcons.types'

export type ArticleAuthorAndShareProps = ArticleAuthorFragment & { shareIcons?: ShareIconsProps }
