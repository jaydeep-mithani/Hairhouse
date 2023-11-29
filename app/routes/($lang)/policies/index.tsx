import { useLoaderData } from '@remix-run/react'
import type { ShopPolicy } from '@shopify/hydrogen/storefront-api-types'
import { json, type LoaderArgs } from '@shopify/remix-oxygen'
import invariant from 'tiny-invariant'

// import { PageHeader, Section, Heading, Link, HygraphSections } from '~/components'
import { createClient } from 'urql'

export const handle = {
  seo: {
    title: 'Policies',
  },
}

export async function loader({ context, request: { url } }: LoaderArgs) {
  const { pathname } = new URL(url)

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

  const data = await context.storefront.query<{
    shop: Record<string, ShopPolicy>
  }>(POLICIES_QUERY)

  invariant(data, 'No data returned from Shopify API')
  const policies = Object.values(data.shop || {})

  if (policies.length === 0) {
    throw new Response('Not found', { status: 404 })
  }

  return json(
    {
      policies,
      // sections,
    },
    {
      headers: {
        // TODO cacheLong()
      },
    },
  )
}

export default function Policies() {
  // const { policies, sections } = useLoaderData<typeof loader>()

  return (
    <>
      {/* <PageHeader heading="Policies" />
      <Section padding="x" className="mb-24">
        {policies.map((policy) => {
          return (
            policy && (
              <Heading className="font-normal text-heading" key={policy.id}>
                <Link to={`/policies/${policy.handle}`}>{policy.title}</Link>
              </Heading>
            )
          )
        })}
        {sections && <HygraphSections sections={sections} />}
      </Section> */}
    </>
  )
}

const POLICIES_QUERY = `#graphql
  fragment Policy on ShopPolicy {
    id
    title
    handle
  }

  query PoliciesQuery {
    shop {
      privacyPolicy {
        ...Policy
      }
      shippingPolicy {
        ...Policy
      }
      termsOfService {
        ...Policy
      }
      refundPolicy {
        ...Policy
      }
      subscriptionPolicy {
        id
        title
        handle
      }
    }
  }
`
