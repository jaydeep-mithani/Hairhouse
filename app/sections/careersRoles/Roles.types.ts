import { Page } from 'types/Page.types'

import { RolesFragment } from './Roles.fragment.generated'

export type RolesProps = RolesFragment & { page?: Page }
