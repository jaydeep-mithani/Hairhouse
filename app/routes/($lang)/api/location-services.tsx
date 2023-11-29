import { json, type ActionArgs } from '@shopify/remix-oxygen'
import { type LocationServicesActions, LocationServicesAction } from '~/lib/type'
import invariant from 'tiny-invariant'

const OK_STATUS = 200

export async function action({ request, context }: ActionArgs) {
  const { session } = context

  const [formData, customerAccessToken] = await Promise.all([request.formData(), session.get('customerAccessToken')])
  const locationServicesAction = formData.get('locationServicesAction') as LocationServicesActions
  const inputValue = formData.get('inputValue')
  const placeId = formData.get('placeId')
  const latitude = formData.get('latitude')
  const longitude = formData.get('longitude')

  async function locationServices({ method, endpointSuffix }: { method: string; endpointSuffix?: string }) {
    const requestHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: customerAccessToken,
    }

    try {
      const response = await fetch(`${context?.env?.LOCATION_SERVICES_API_ENDPOINT}/${endpointSuffix}`, {
        method,
        headers: requestHeader,
      })

      if (response.status !== OK_STATUS) {
        throw response
      }

      return await response.json()
    } catch (error: unknown) {
      return new Response(error as BodyInit, {
        status: 401,
        statusText: 'Unauthorized',
      })
    }
  }

  let result

  switch (locationServicesAction) {
    case LocationServicesAction.GET_SEARCH_RESULTS:
      if (inputValue) {
        result = await locationServices({
          method: 'GET',
          endpointSuffix: `predictivesearch-postcode-suburb?input=${inputValue}`,
        })
      }
      break
    case LocationServicesAction.GET_MAPS_DATA:
      if (placeId) {
        result = await locationServices({
          method: 'GET',
          endpointSuffix: `predictiveSearch-Select?place_id=${placeId}`,
        })
      }
      break
    case LocationServicesAction.GET_LOCATION_LISTINGS:
      if (latitude && longitude) {
        result = await locationServices({
          method: 'GET',
          endpointSuffix: `locations?latitude=${latitude}&longitude=${longitude}&distance=20&top=5`,
        })
      }
      break
    default:
      invariant(false, `${locationServicesAction} location services action is not defined`)
  }

  return json(result)
}
