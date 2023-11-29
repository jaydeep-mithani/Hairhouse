import { json, type ActionArgs } from '@shopify/remix-oxygen'
import { queryRecsResults, transformRecsProduct, UnbxdParams, getUnbxdParams } from '~/lib/unbxd.helper'
import { extractCookieValue } from '~/lib/utils'

export async function action({ request, context }: ActionArgs) {
  const [formData] = await Promise.all([request.formData()])

  const unbxdPageType = formData.get('pageType')

  const cookies = request.headers.get('Cookie')
  const unbxdUserId = extractCookieValue(cookies, 'unbxd.userId')
  const unbxdParams: UnbxdParams = getUnbxdParams(context)

  const recsProps = { pageType: unbxdPageType, uid: unbxdUserId, unbxdParams }
  const unbxdResponse = await queryRecsResults(recsProps)

  let unbxdRecs = {}
  if (!unbxdResponse?.error) {
    unbxdRecs = {
      titlle: unbxdResponse?.widget1?.widgetTitle,
      tabs: [
        {
          getCollectionByHandle: {
            collection: unbxdResponse?.widget1?.recommendations.map((product) => {
              return transformRecsProduct(product)
            }),
          },
        },
      ],
    }
  } else {
    console.error('Error rendering product recs from unbxd ')
  }

  return json(unbxdRecs)
}
