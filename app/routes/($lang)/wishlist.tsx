import { json, type ActionArgs } from '@shopify/remix-oxygen'
import { WishlistAction, type WishlistActions } from '~/lib/type'
import invariant from 'tiny-invariant'

export async function action({ request, context }: ActionArgs) {
  const { session } = context

  const [formData, customerAccessToken] = await Promise.all([request.formData(), session.get('customerAccessToken')])

  const wishlistAction = formData.get('wishlistAction') as WishlistActions

  const isProductAddedToWishlist = (wishlist, productId) => {
    return !!wishlist?.products?.filter((product) => {
      return product?.id === Number(productId)
    })?.length
  }

  async function wishlist({
    method,
    productId,
    endpointSuffix,
    listTitle,
  }: {
    method: string
    productId?: string
    endpointSuffix: string
    listTitle: string
  }) {
    const requestHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: customerAccessToken,
    }

    const requestBody = method !== 'GET' && {
      body: JSON.stringify({
        productids: productId,
        title: listTitle,
      }),
    }

    try {
      if (!customerAccessToken) {
        throw new Error('Login required')
      }
      const response = await fetch(`${context?.env?.WISHLIST_API_ENDPOINT}/${endpointSuffix}`, {
        method,
        headers: requestHeader,
        ...requestBody,
      })

      if (response.status !== 200) {
        throw response
      }

      return await response.json()
    } catch (error: unknown) {
      return new Response(error, {
        status: 401,
        statusText: 'Unauthorized',
      })
    }
  }

  let result

  switch (wishlistAction) {
    case WishlistAction.ADD_ITEM_TO_WISHLIST:
      {
        const rawProductId = formData.get('productId')
        const listTitle = formData.get('listTitle') || 'Default wishlist'
        const productId = rawProductId ? rawProductId.slice(rawProductId.lastIndexOf('/') + 1) : ''
        invariant(productId, 'No item to add')

        const mutatedWishlist = await wishlist({
          method: 'POST',
          productId,
          endpointSuffix: 'wishlistcollection',
          listTitle,
        })

        result = {
          ...mutatedWishlist,
          addedItemId: isProductAddedToWishlist(mutatedWishlist, productId) ? productId : '',
          isUserLoggedIn: !!customerAccessToken,
        }
      }
      break

    case WishlistAction.GET_WISHLIST:
      result = await wishlist({ method: 'GET' })
      break

    case WishlistAction.REMOVE_ITEMS_FROM_WISHLIST:
      // todo: add action
      break
    case WishlistAction.UPSERT_WISHLIST:
      // todo: add action
      break

    default:
      invariant(false, `${wishlistAction} wishlist action is not defined`)
  }

  return json(result)
}
