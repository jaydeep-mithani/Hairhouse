import { AccountOrdersProps } from './AccountOrders.types'

export const mock: AccountOrdersProps = {
  isMainPage: false,
  orders: [
    {
      id: 'gid://shopify/Order/5371660337465?key=718d517c38c0e47a9202df2563da290a',
      orderNumber: 1010,
      processedAt: '2023-04-19T08:39:01Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'FULFILLED',
      currentTotalPrice: { amount: '99.9', currencyCode: 'AUD' },
      lineItems: {
        edges: [
          { node: { variant: null, title: '1 Hour Express Tan 225ml' } },
          { node: { variant: null, title: '1 Minute Treatment 150ml' } },
        ],
      },
    },
    {
      id: 'gid://shopify/Order/5371660206393?key=42c2e930d2d47275bc8830a934390229',
      orderNumber: 1009,
      processedAt: '2023-04-19T08:36:53Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      currentTotalPrice: { amount: '66.95', currencyCode: 'AUD' },
      lineItems: {
        edges: [
          { node: { variant: null, title: '1 Hour Express Tan 225ml' } },
          { node: { variant: null, title: '1-800-Hold-Me No-Crunch Flexible Hold Hairspray 164ml' } },
        ],
      },
    },
    {
      id: 'gid://shopify/Order/5371660042553?key=de7bb4fae64d1cf8abd11b7f29a219b2',
      orderNumber: 1008,
      processedAt: '2023-04-19T08:37:34Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      currentTotalPrice: { amount: '32.95', currencyCode: 'AUD' },
      lineItems: { edges: [{ node: { variant: null, title: '1 Minute Treatment 150ml' } }] },
    },
    {
      id: 'gid://shopify/Order/5371660337465?key=718d517c38c0e47a9202df2563da290a',
      orderNumber: 1007,
      processedAt: '2023-04-19T08:39:01Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'FULFILLED',
      currentTotalPrice: { amount: '99.9', currencyCode: 'AUD' },
      lineItems: {
        edges: [
          { node: { variant: null, title: '1 Hour Express Tan 225ml' } },
          { node: { variant: null, title: '1 Minute Treatment 150ml' } },
        ],
      },
    },
    {
      id: 'gid://shopify/Order/5371660206393?key=42c2e930d2d47275bc8830a9343902291',
      orderNumber: 1006,
      processedAt: '2023-04-19T08:36:53Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      currentTotalPrice: { amount: '66.95', currencyCode: 'AUD' },
      lineItems: {
        edges: [
          { node: { variant: null, title: '1 Hour Express Tan 225ml' } },
          { node: { variant: null, title: '1-800-Hold-Me No-Crunch Flexible Hold Hairspray 164ml' } },
        ],
      },
    },
    {
      id: 'gid://shopify/Order/5371660042553?key=de7bb4fae64d1cf8abd11b7f29a219b22',
      orderNumber: 1005,
      processedAt: '2023-04-19T08:37:34Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      currentTotalPrice: { amount: '32.95', currencyCode: 'AUD' },
      lineItems: { edges: [{ node: { variant: null, title: '1 Minute Treatment 150ml' } }] },
    },
    {
      id: 'gid://shopify/Order/5371660337465?key=718d517c38c0e47a9202df2563da290a3',
      orderNumber: 1004,
      processedAt: '2023-04-19T08:39:01Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'FULFILLED',
      currentTotalPrice: { amount: '99.9', currencyCode: 'AUD' },
      lineItems: {
        edges: [
          { node: { variant: null, title: '1 Hour Express Tan 225ml' } },
          { node: { variant: null, title: '1 Minute Treatment 150ml' } },
        ],
      },
    },
    {
      id: 'gid://shopify/Order/5371660206393?key=42c2e930d2d47275bc8830a9343902294',
      orderNumber: 1003,
      processedAt: '2023-04-19T08:36:53Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      currentTotalPrice: { amount: '66.95', currencyCode: 'AUD' },
      lineItems: {
        edges: [
          { node: { variant: null, title: '1 Hour Express Tan 225ml' } },
          { node: { variant: null, title: '1-800-Hold-Me No-Crunch Flexible Hold Hairspray 164ml' } },
        ],
      },
    },
    {
      id: 'gid://shopify/Order/5371660042553?key=de7bb4fae64d1cf8abd11b7f29a219b25',
      orderNumber: 1002,
      processedAt: '2023-04-19T08:37:34Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      currentTotalPrice: { amount: '32.95', currencyCode: 'AUD' },
      lineItems: { edges: [{ node: { variant: null, title: '1 Minute Treatment 150ml' } }] },
    },
    {
      id: 'gid://shopify/Order/5371660337465?key=718d517c38c0e47a9202df2563da290a6',
      orderNumber: 1001,
      processedAt: '2023-04-19T08:39:01Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'FULFILLED',
      currentTotalPrice: { amount: '99.9', currencyCode: 'AUD' },
      lineItems: {
        edges: [
          { node: { variant: null, title: '1 Hour Express Tan 225ml' } },
          { node: { variant: null, title: '1 Minute Treatment 150ml' } },
        ],
      },
    },
    {
      id: 'gid://shopify/Order/5371660206393?key=42c2e930d2d47275bc8830a9343902297',
      orderNumber: 1000,
      processedAt: '2023-04-19T08:36:53Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      currentTotalPrice: { amount: '66.95', currencyCode: 'AUD' },
      lineItems: {
        edges: [
          { node: { variant: null, title: '1 Hour Express Tan 225ml' } },
          { node: { variant: null, title: '1-800-Hold-Me No-Crunch Flexible Hold Hairspray 164ml' } },
        ],
      },
    },
    {
      id: 'gid://shopify/Order/5371660042553?key=de7bb4fae64d1cf8abd11b7f29a219b28',
      orderNumber: 10099,
      processedAt: '2023-04-19T08:37:34Z',
      financialStatus: 'PAID',
      fulfillmentStatus: 'UNFULFILLED',
      currentTotalPrice: { amount: '32.95', currencyCode: 'AUD' },
      lineItems: { edges: [{ node: { variant: null, title: '1 Minute Treatment 150ml' } }] },
    },
  ],
}
