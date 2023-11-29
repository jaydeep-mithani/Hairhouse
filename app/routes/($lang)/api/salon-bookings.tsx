import { json, type ActionArgs } from '@shopify/remix-oxygen'
import { type SalonBookingActions, SalonBookingAction } from '~/lib/type'
import invariant from 'tiny-invariant'

const OK_STATUS = 200

export async function action({ request, context }: ActionArgs) {
  const { session } = context

  const [formData, customerAccessToken] = await Promise.all([request.formData(), session.get('customerAccessToken')])
  const salonBookingAction = formData.get('salonBookingAction') as SalonBookingActions
  const hairLength = formData.get('hairLength')
  const shortcutSiteid = formData.get('shortcutSiteid')
  const serviceId = formData.get('serviceId')
  const employeeNumber = formData.get('employeeNumber')
  const date = formData.get('date')
  const startTime = formData.get('startTime')
  const duration = formData.get('duration')
  const specialRequest = formData.get('specialRequest')

  async function salonBooking({ method, endpointSuffix }: { method: string; endpointSuffix?: string }) {
    const requestHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: customerAccessToken,
    }

    const requestBody = method !== 'GET' && {
      body: JSON.stringify({
        serviceid: serviceId,
        shortcut_siteid: shortcutSiteid,
        employee_number: employeeNumber,
        date,
        start_time: startTime,
        duration,
        special_request: specialRequest,
      }),
    }

    try {
      const response = await fetch(`${context?.env?.SALON_BOOKING_API_ENDPOINT}/${endpointSuffix}`, {
        method,
        headers: requestHeader,
        ...requestBody,
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

  switch (salonBookingAction) {
    case SalonBookingAction.GET_HAIR_LENGTH:
      result = await salonBooking({ method: 'GET', endpointSuffix: 'hairlength' })
      break
    case SalonBookingAction.GET_HAIR_SERVICES:
      if (hairLength && shortcutSiteid) {
        result = await salonBooking({
          method: 'GET',
          endpointSuffix: `hairservices?hair_length=${hairLength}&shortcut_siteid=${shortcutSiteid}`,
        })
      }
      break
    case SalonBookingAction.GET_ADDONS:
      if (serviceId && shortcutSiteid) {
        result = await salonBooking({
          method: 'GET',
          endpointSuffix: `servicesaddons?serviceId=${serviceId}&shortcut_siteid=${shortcutSiteid}`,
        })
      }
      break
    case SalonBookingAction.GET_HAIR_STYLIST:
      if (serviceId && shortcutSiteid) {
        result = await salonBooking({
          method: 'GET',
          endpointSuffix: `hairstylist?serviceId=${serviceId}&shortcut_siteid=${shortcutSiteid}`,
        })
      }
      break
    case SalonBookingAction.CALCULATE_AVALIABLE_APPOINTMENTS:
      result = await salonBooking({
        method: 'POST',
        endpointSuffix: 'calculateavailableappointments',
      })
      break
    case SalonBookingAction.POST_BOOKING:
      result = await salonBooking({
        method: 'POST',
        endpointSuffix: 'bookschedule',
      })
      break
    default:
      invariant(false, `${salonBookingAction} salon booking action is not defined`)
  }

  return json(result)
}
