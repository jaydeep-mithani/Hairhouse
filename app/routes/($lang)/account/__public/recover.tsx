import { Form, useActionData } from '@remix-run/react'
import type { CustomerRecoverPayload } from '@shopify/hydrogen/storefront-api-types'
import { json, redirect, type MetaFunction, type ActionFunction, type LoaderArgs } from '@shopify/remix-oxygen'
import { ResetPassword } from '~/sections/resetPassword'

export async function loader({ context, params }: LoaderArgs) {
  const customerAccessToken = await context.session.get('customerAccessToken')

  if (customerAccessToken) {
    return redirect(params.lang ? `${params.lang}/account` : '/account')
  }

  return new Response(null)
}

type ActionData = {
  formError?: string
  resetRequested?: boolean
}

const badRequest = (data: ActionData) => json(data, { status: 400 })

export const action: ActionFunction = async ({ request, context }) => {
  const formData = await request.formData()
  const email = formData.get('email')

  if (!email || typeof email !== 'string') {
    return badRequest({
      formError: 'Please provide an email.',
    })
  }

  try {
    await context.storefront.mutate<{
      customerRecover: CustomerRecoverPayload
    }>(CUSTOMER_RECOVER_MUTATION, {
      variables: { email },
    })

    return json({ resetRequested: true })
  } catch (error) {
    return badRequest({
      formError: 'Something went wrong. Please try again later.',
    })
  }
}

export const meta: MetaFunction = () => {
  return {
    title: 'Recover Password',
  }
}

export default function Recover() {
  const actionData = useActionData<ActionData>()
  const isSubmitted = actionData?.resetRequested

  return (
    <div className="flex justify-center my-24 px-4">
      <div className="max-w-md w-full">
        {isSubmitted ? (
          <>
            <h1 className="text-4xl">Request Sent.</h1>
            <p className="mt-4">
              If that email address is in our system, you will receive an email with instructions about how to reset
              your password in a few minutes.
            </p>
          </>
        ) : (
          <Form method="post" noValidate className="pt-6 pb-8 mt-4 mb-4 space-y-3">
            <ResetPassword
              data={{
                title: 'Reset your password',
                subtitle: {
                  text: 'Enter the email address associated with your account to receive a link to reset your password.',
                  html: '<></>',
                },
              }}
            />
          </Form>
        )}
      </div>
    </div>
  )
}

const CUSTOMER_RECOVER_MUTATION = `#graphql
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`
