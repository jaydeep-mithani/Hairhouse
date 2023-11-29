import type { CustomerUpdateInput, CustomerUpdatePayload } from '@shopify/hydrogen/storefront-api-types'
import { json, redirect, type ActionFunction } from '@shopify/remix-oxygen'
import { assertApiErrors } from '~/lib/utils'
import invariant from 'tiny-invariant'

import { getCustomer } from '../../account'

export interface ActionData {
  success?: boolean
  formError?: string
  fieldErrors?: {
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    currentPassword?: string
    newPassword?: string
    newPassword2?: string
  }
}

const badRequest = (data: ActionData) => json(data, { status: 400 })

export const action: ActionFunction = async ({ request, context, params }) => {
  const formData = await request.formData()

  const customerAccessToken = await context.session.get('customerAccessToken')

  invariant(customerAccessToken, 'You must be logged in to update your account details.')

  // Double-check current user is logged in.
  // Will throw a logout redirect if not.
  await getCustomer(context, customerAccessToken)

  const formDataHas = (formData: FormData, key: string) => {
    if (!formData.has(key)) return false

    const value = formData.get(key)
    return typeof value === 'string' && value.length > 0
  }

  if (formData.has('newPassword') && formData.get('newPassword') !== formData.get('newPassword2')) {
    return badRequest({
      fieldErrors: {
        newPassword2: 'New passwords must match.',
      },
    })
  }

  try {
    const customer: CustomerUpdateInput = {}

    formDataHas(formData, 'firstName') && (customer.firstName = formData.get('firstName') as string)
    formDataHas(formData, 'lastName') && (customer.lastName = formData.get('lastName') as string)
    formDataHas(formData, 'email') && (customer.email = formData.get('email') as string)
    formDataHas(formData, 'phone') && (customer.phone = formData.get('phone') as string)
    formDataHas(formData, 'newPassword') && (customer.password = formData.get('newPassword') as string)

    const data = await context.storefront.mutate<{
      customerUpdate: CustomerUpdatePayload
    }>(CUSTOMER_UPDATE_MUTATION, {
      variables: {
        customerAccessToken,
        customer,
      },
    })

    assertApiErrors(data.customerUpdate)

    if (formDataHas(formData, 'salonRedirect')) {
      return redirect(
        params?.lang ? `${params.lang}/${formData.get('salonRedirect')}` : `/${formData.get('salonRedirect')}`,
      )
    }

    return redirect(params?.lang ? `${params.lang}/account` : '/account')
  } catch (error: any) {
    return badRequest({ formError: error.message })
  }
}

/*
  Customer Mutation
*/

const CUSTOMER_UPDATE_MUTATION = `#graphql
  mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
  `
