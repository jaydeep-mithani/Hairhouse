import useScript from '~/hooks/useScript'

export const useBaazarVoice = (): void => {
  const baazarvoiceScriptURL =
    'https://apps.bazaarvoice.com/deployments/hairhouse_warehouse/hairhouse/staging/en_AU/bv.js'

  useScript(baazarvoiceScriptURL)
}
