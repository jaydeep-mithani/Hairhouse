import { LoaderArgs, json } from '@shopify/remix-oxygen'

export const loader = async ({ request }: LoaderArgs) => {
  const urlParams = new URLSearchParams(new URL(request.url).search)
  const latitude = urlParams.get('latitude') ?? ''
  const longitude = urlParams.get('longitude') ?? ''
  const distance = urlParams.get('distance') ?? ''
  const top = urlParams.get('top') ?? ''

  const url = `https://locationservices-ggyjkzlnja-ts.a.run.app/api/v1/locations?latitude=${latitude}&longitude=${longitude}&distance=${distance}&top=${top}`

  const res = await fetch(url)

  return json(await res.json())
}

export default function storeListApiRoute() {
  return null
}
