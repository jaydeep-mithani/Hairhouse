import { Link, Outlet, useLoaderData } from '@remix-run/react'
import { json, LoaderArgs } from '@shopify/remix-oxygen'
import { useEffect, useState } from 'react'
import invariant from 'tiny-invariant'
import { createClient } from 'urql'
// import { HygraphSections } from '~/components'

export async function loader({ request, params, context }: LoaderArgs) {
  const { pathname } = new URL(request.url)

  const client = createClient({
    url: context?.env?.HYGRAPH_API_ENDPOINT,
    fetchOptions: () => {
      const token = context?.env?.PRIVATE_HYGRAPH_PERMANENT_AUTH_TOKEN
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      }
    },
  })

  // const sections: HygraphModelQuery = await client
  //   .query(HygraphModelDocument, { url: pathname })
  //   .toPromise()
  //   .then((result) => {
  //     return result?.data
  //   })

  return json(
    // { sections, pathname },
    {
      headers: {
        // TODO cacheLong()
      },
    },
  )
}
function convertToKebabCase(str: string) {
  return str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`).replace(/^-/, '')
}

export default function docs() {
  // const { pathname, sections } = useLoaderData<typeof loader>()
  const [isPanelActive, setIsPanelActive] = useState(false)

  // useEffect(() => {
  //   if (pathname === '/docs') {
  //     setIsPanelActive(true)
  //   }
  // }, [pathname])

  // const sectionNames =
  //   sections.pageTemplate?.sections.reduce<Set<string>>((accumulator, section) => {
  //     if (section?.__typename) {
  //       accumulator.add(section.__typename)
  //     }
  //     return accumulator
  //   }, new Set()) || new Set()

  return (
    <div>
      <div style={{ margin: '0', display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            minWidth: '200px',
            display: isPanelActive ? 'flex' : 'none',
            height: '100vh',
            flexDirection: 'column',
            margin: '2rem',
            gap: '0.5rem',
            borderRight: '1px solid black',
          }}>
          <div style={{ fontSize: '26px', borderBottom: '1px solid black' }}>
            <h3>Sections</h3>
          </div>
          {/* {Array.from(sectionNames).map((sectionName, index) => (
              <Link key={index} target="_blank" to={`/docs/${convertToKebabCase(sectionName)}`} prefetch="intent">
                {sectionName}
              </Link>
            ))} */}
        </div>
        {/* <HygraphSections sections={sections} /> */}
      </div>
    </div>
  )
}
