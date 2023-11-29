import React from 'react'

import { SectionSeoTextProps } from './SectionSeoText.types'

export const SectionSeoText: React.FC<SectionSeoTextProps> = ({ page, ...rest }) => {
  return <pre>{JSON.stringify(rest, null, 2)}</pre>
}
