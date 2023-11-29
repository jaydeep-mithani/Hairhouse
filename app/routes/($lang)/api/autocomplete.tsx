import { LoaderArgs, json } from '@shopify/remix-oxygen'

export const loader = async ({ request, context }: LoaderArgs) => {
  const urlParams = new URLSearchParams(new URL(request.url).search)
  const input = urlParams.get('input') ?? ''
  const types = urlParams.get('types') ?? ''

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?components=country:au&input=${input}&types=${types}&key=${context?.env?.GOOGLE_MAPS_KEY}`,
    )

    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`)
    }

    return json(await res.json())
  } catch (error) {
    console.error('An error occurred:', error)
    // Handle the error appropriately in your app
    return json({ error: 'Failed to fetch data.' }, { status: 500 })
  }
}

export default function autocompleteApiRoute() {
  return null
}
