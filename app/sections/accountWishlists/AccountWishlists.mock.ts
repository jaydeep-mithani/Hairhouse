import { AccountWishlistsProps } from './AccountWishlists.types'

export const mock: AccountWishlistsProps = {
  wishlists: [
    {
      customerid: '6902928802105',
      id: 'gid://shopify/Metaobject/4088955193',
      products: [
        {
          id: '8177039081785',
          title: '1 Hour Express Tan 225ml',
          image: {
            id: '40859328610617',
            admin_graphql_api_id: 'gid://shopify/ProductImage/40859328610617',
            src: 'https://cdn.shopify.com/s/files/1/0706/9679/6473/p…dcf1-fc63-4aa9-af75-9d91ea60bc6c.png?v=1679130291',
          },
        },
        {
          id: '8177271144761',
          title: 'Healthy Hair Strengthening Conditioner 1L',
          image: {
            id: '40859835924793',
            admin_graphql_api_id: 'gid://shopify/ProductImage/40859835924793',
            src: 'https://cdn.shopify.com/s/files/1/0706/9679/6473/p…f882-0149-4d1d-94ca-46e7c56a63c2.jpg?v=1679132211',
          },
        },
      ],
      wishlist_title: 'Saved for later',
    },
    {
      customerid: '6902928802105',
      id: 'gid://shopify/Metaobject/4088987961',
      products: [
        {
          id: '8177271144761',
          title: 'Healthy Hair Strengthening Conditioner 1L',
          image: {
            id: '40859835924793',
            admin_graphql_api_id: 'gid://shopify/ProductImage/40859835924793',
            src: 'https://cdn.shopify.com/s/files/1/0706/9679/6473/products/media_7c3bf882-0149-4d1d-94ca-46e7c56a63c2.jpg?v=1679132211',
          },
        },
      ],
      wishlist_title: 'Default wishlist',
    },
  ],
}
