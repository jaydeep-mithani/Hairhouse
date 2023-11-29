import { useLoaderData } from '@remix-run/react'
import { json, LoaderArgs } from '@shopify/remix-oxygen'
import invariant from 'tiny-invariant'
import { createClient } from 'urql'

export async function loader({ request, params, context }: LoaderArgs) {
  invariant(params.sectionHandle, 'Missing page handle')
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
    // { sections },
    {
      headers: {
        // TODO cacheLong()
      },
    },
  )
}

export default function Section() {
  // const { sections } = useLoaderData<typeof loader>()

  return <div>{/* <HygraphSections sections={sections} /> */}</div>
}
