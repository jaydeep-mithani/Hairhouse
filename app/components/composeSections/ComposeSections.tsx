import { Page } from 'types/Page.types'

import { sectionComponents } from '../../sections'

type GenericSection = {
  __typename: string
  id?: string | number
  sections?: GenericSection[]
  [key: string]: unknown
}

interface ComposeSectionsProps {
  sections: GenericSection[]
  page: Page
}

export const ComposeSections = ({ sections, page }: ComposeSectionsProps) => {
  return (
    <>
      {sections?.map((section, index) => {
        const { __typename, sections: nestedSections, ...rest } = section
        const Component = sectionComponents[__typename]

        // TODO: eventually throw an error
        if (!Component) {
          return (
            <div key={section.id || index} style={{ color: 'red', backgroundColor: 'yellow', padding: '2px' }}>
              Could not find section: {__typename}
            </div>
          )
        }

        return (
          <Component key={section.id || index} sectionPosition={index} {...rest}>
            {!!nestedSections && <ComposeSections sections={nestedSections} page={page} />}
          </Component>
        )
      })}
    </>
  )
}
