import type { Preview } from '@storybook/react'
import '../app/styles/app.css'
import './styles.css'
import { RemixBrowser } from '@remix-run/react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
