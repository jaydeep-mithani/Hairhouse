import { LoaderArgs, json } from '@shopify/remix-oxygen'

export const loader = async ({ request }: LoaderArgs) => {
  const urlParams = new URLSearchParams(new URL(request.url).search)
  const placeID = urlParams.getAll('place_id') ?? []

  try {
    const res = await fetch(
      `https://locationservices-ggyjkzlnja-ts.a.run.app/api/v1/predictiveSearch-Select?place_id=${placeID}`,
    )
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`)
    }

    return json(await res.json())
  } catch (error) {
    console.error('An error occurred:', error)
    // Handle the error appropriately in your app
    return json({ error: `Failed to fetch data. ${error}` }, { status: 500 })
  }
}

export default function storeLatLngApiRoute() {
  return null
}
