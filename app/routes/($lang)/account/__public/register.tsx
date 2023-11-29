import type { CustomerCreatePayload } from '@shopify/hydrogen/storefront-api-types'
import { type MetaFunction, redirect, json, type ActionFunction, type LoaderArgs } from '@shopify/remix-oxygen'
import { CustomerSignup } from '~/sections/customerSignup'
import { customerSignupSettings } from '~/sections/customerSignup/data/customerSignupData'

import { doLogin } from './login'

export async function loader({ context, params }: LoaderArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken')

  if (customerAccessToken) {
    return redirect(params.lang ? `${params.lang}/account` : '/account')
  }

  return new Response(null)
}

type ActionData = {
  formError?: string
}

const badRequest = (data: ActionData) => json(data, { status: 400 })

export const action: ActionFunction = async ({ request, context, params }) => {
  const { session, storefront } = context
  const formData = await request.formData()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')
  const phone = formData.get('phone')
  const isSalonBooking = formData.get('isSalonBooking')

  const errorArray = [
    !email,
    !password,
    !firstName,
    !lastName,
    !phone,
    typeof email !== 'string',
    typeof password !== 'string',
    typeof firstName !== 'string',
    typeof lastName !== 'string',
    typeof phone !== 'string',
  ]
  const hasError = errorArray.some((error) => {
    return error
  })

  if (hasError) {
    return badRequest({
      formError: 'Something went wrong. Please try again later.',
    })
  }

  try {
    const data = await storefront.mutate<{
      customerCreate: CustomerCreatePayload
    }>(CUSTOMER_CREATE_MUTATION, {
      variables: {
        input: {
          email,
          phone,
          password,
          firstName,
          lastName,
        },
      },
    })

    if (!data?.customerCreate?.customer?.id) {
      /**
       * Something is wrong with the user's input.
       */
      throw new Error(data?.customerCreate?.customerUserErrors.join(', '))
    }

    const customerAccessToken = await doLogin(context, { email, password })
    session.set('customerAccessToken', customerAccessToken)

    if (isSalonBooking) {
      return redirect(params.lang ? `${params.lang}/pages/salon-booking` : '/pages/salon-booking', {
        headers: {
          'Set-Cookie': await session.commit(),
        },
      })
    }

    return redirect(params.lang ? `${params.lang}/account` : '/account', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    })
  } catch (error: unknown) {
    if (storefront.isApiError(error)) {
      return badRequest({
        formError: 'Something went wrong. Please try again later.',
      })
    }

    /**
     * The user did something wrong, but the raw error from the API is not super friendly.
     * Let's make one up.
     */
    return badRequest({
      formError:
        'Sorry. We could not create an account with this email. User might already exist, try to login instead.',
    })
  }
}

export const meta: MetaFunction = () => {
  return {
    title: 'Register',
  }
}

export default function Register() {
  return customerSignupSettings && <CustomerSignup data={customerSignupSettings?.data} />
}

const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
        email
        phone
        firstName
        lastName
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`
