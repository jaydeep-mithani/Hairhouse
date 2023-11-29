import { CampaignLandingProps } from './CampaignLanding.types'

const imageUrl = 'https://media.graphassets.com/ML0tgUs9QFaCYzkJ5ZJw'
export const mock: CampaignLandingProps = {
  data: {
    sections: [
      {
        __typename: 'TextAndImageBlock',
        buttonTextAndImageBlock: [
          {
            buttonText: 'Shop eGift Vouchers',
            buttonTheme: 'primary',
            buttonUrl: '/',
            displayButton: true,
          },
        ],
        contentAlignment: 'center',
        image: {
          image: {
            url: 'https://media.graphassets.com/Z8hQ2aaMRGKZt2XHtu0U',
            altText: null,
          },
        },
        description: {
          html: '<p>Give them the power to pick their perfect hair ritual with a Gift Card or eGift Voucher.</p><p></p><p>Physical Gift Cards available for purchase in-store only. eGift Voucher can be purchased online.</p>',
          text: 'Give them the power to pick their perfect hair ritual with a Gift Card or eGift Voucher.nnPhysical Gift Cards available for purchase in-store only. eGift Voucher can be purchased online.',
        },
        imagePosition: 'left',
        imageWidth: 50,
        title: 'Give the gift of choice',
      },
      {
        __typename: 'CampaignLandingHeroBanner',
        id: 'clha8ltr001ky0b2ohmbwzfdj',
        adminTitle: 'Campaign Landing Hero Banner',
        image: {
          image: {
            altText: 'background',
            url: 'https://media.graphassets.com/yatOS7OSsq7CCU2xa3NL',
          },
        },
        logo: {
          image: {
            altText: 'logo',
            url: 'https://media.graphassets.com/CsuTMNqLTuyM8Cj5bNJY',
          },
        },
      },
      {
        __typename: 'ShopByGroup',
        id: 'clhabk4iq00hx0b2la56kwqqw',
        subtitle: '',
        title: 'Holiday gifts by price',
        shopByGroup: 'column',
        images: [
          {
            label: 'Gifts under $30',
            link: '',
            image: {
              altText: null,
              url: 'https://s3-alpha-sig.figma.com/img/799c/35c9/4e34ff4a4938a8e94655db394b188a03?Expires=1685318400&Signature=VPZitreRytHKvJ03Atsy~14cZn4lptVwYdykAINhT4qDj53Q6Nfkx~kiRoe~kwNcVLaB8flLyZ-7Xu4iuGY4mn4Y-BUuDrNGCqDhDpNtrVxKDyL6Hlvx4Fg5NEw0CeZJBUDRDIqmy7ITtVgybC0E1zmlg3tqlVlDiM3c5aafADGW8fT6Z~QBHaoUP0yRS2U~uXzZt4WYc-rNTcsi7NaHtO2q8DEmI02DSYXbJhCi6IYH8tpGyrGgndjmJrPdqoJz2gH3~tjhz1fdkGwZBrgarkhi93B9WTUuXDeVdy96BaH9~6k8Y4G0H8BjIzNXslZ8thgcSCuFAPg9wLqxRmr5Ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
          },
          {
            label: 'Gifts under $50',
            link: '',
            image: {
              altText: null,
              url: 'https://s3-alpha-sig.figma.com/img/f28d/fc36/eaa8376948c4f6a5dcabc4d5ad96c90e?Expires=1685318400&Signature=d522nON9hIy8vXybYtvJJp04LLbthpNOaYiMRFtSSqToOn-yst-9a43z3ut9ZgBO6TEXbBjKW40~oN7BS~ZBP2H1K1IrobQl0EITi60n7pzajFN3QYDwN6VFYqRrR7N2npEiAta01~SIw8N~werQVVF5oOwX3njHCw7qBw1jJDaNNf2oVtjRQBjTNmaCBwbJhGllWEfsNnQeHFSasG4jhfuzoaOJeltLJT7P8qX-5ZK9wc3u0Rw2BEuYcfyGfjh60R1Av7SvkWLGDTqCUpbmkTDdotmVP0-N5d7KNYygt60GDijq--F8ui35Pdidgvwb8F7agwHLu-wPZyoFf-byaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
          },
          {
            label: 'Gifts under $100',
            link: '',
            image: {
              altText: null,
              url: 'https://s3-alpha-sig.figma.com/img/a873/63eb/76a3194c072abd9da8f464e45a755039?Expires=1685318400&Signature=oTFUEQqayg4KoZwuHF9nADAKJO3kiyCVPyKtWwe3SA~6OGn0z3MKo5AEawlj3KFgKBrHUzBT-e8sGrXFcC1Hu5MP9-~jhFgoGEmkSyUUHZSuVF191H6NfeT60kFv5zi3LKRaintfJSWT7P8t1Skh7Rrvr200Lhvm08zwPI~yabt2TwTqi2Tp1h-knbXhiUcjby~b5i8zc0bTGe2~nZpNzVg2Hn7yqT5RzwJ5e~XsDYpd6uMwJMBUVDNDn3NwAgvD8fmTUGTLvtbHwhLeLOWZ8t1ng5e83j~NR9I5tnF2fAARB1dmD4Vve7FVc~oiwXiIMaGbi0syJLX-l3b~7iV7bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
          },
          {
            label: 'Skincare',
            link: '',
            image: {
              altText: null,
              url: 'https://s3-alpha-sig.figma.com/img/86fc/1563/acdf8eb9683de37e4940b94f0e31bf7d?Expires=1685318400&Signature=ALyLWOmzsGkkkkia5jA3i4rYq4DedanxVlX-NkTv~MtNDY-4puDdHJJOkYylQ6EhNTsyJLXXh8JW3BgytvzLYDOdTKzCoLJVrRr00Y5u1UOwTUfVN5wjy-jbHpgzu96pDn06da5YtzPJGLvJZ4-VGTIDwTIFYibYQXjht5D7GXmpSw8ZZQhm5v9ma4cvpHz7zu5vo64ELhj3a5T9oxqznbSGXCSaADUr9atVathmb1ATyHnkq3QDKTPpNW2FM7ZjPAT~G4kv8ak0iZHzoTtwHM6-92IzyrgKC891zfTxS2PLlk9RT1c128MV5CWQCb2J-jLQvRMnDjf5ADwvCNlwcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
          },
          {
            label: 'Gifts under $30',
            link: '',
            image: {
              altText: null,
              url: 'https://s3-alpha-sig.figma.com/img/799c/35c9/4e34ff4a4938a8e94655db394b188a03?Expires=1685318400&Signature=VPZitreRytHKvJ03Atsy~14cZn4lptVwYdykAINhT4qDj53Q6Nfkx~kiRoe~kwNcVLaB8flLyZ-7Xu4iuGY4mn4Y-BUuDrNGCqDhDpNtrVxKDyL6Hlvx4Fg5NEw0CeZJBUDRDIqmy7ITtVgybC0E1zmlg3tqlVlDiM3c5aafADGW8fT6Z~QBHaoUP0yRS2U~uXzZt4WYc-rNTcsi7NaHtO2q8DEmI02DSYXbJhCi6IYH8tpGyrGgndjmJrPdqoJz2gH3~tjhz1fdkGwZBrgarkhi93B9WTUuXDeVdy96BaH9~6k8Y4G0H8BjIzNXslZ8thgcSCuFAPg9wLqxRmr5Ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
          },
          {
            label: 'Gifts under $50',
            link: '',
            image: {
              altText: null,
              url: 'https://s3-alpha-sig.figma.com/img/f28d/fc36/eaa8376948c4f6a5dcabc4d5ad96c90e?Expires=1685318400&Signature=d522nON9hIy8vXybYtvJJp04LLbthpNOaYiMRFtSSqToOn-yst-9a43z3ut9ZgBO6TEXbBjKW40~oN7BS~ZBP2H1K1IrobQl0EITi60n7pzajFN3QYDwN6VFYqRrR7N2npEiAta01~SIw8N~werQVVF5oOwX3njHCw7qBw1jJDaNNf2oVtjRQBjTNmaCBwbJhGllWEfsNnQeHFSasG4jhfuzoaOJeltLJT7P8qX-5ZK9wc3u0Rw2BEuYcfyGfjh60R1Av7SvkWLGDTqCUpbmkTDdotmVP0-N5d7KNYygt60GDijq--F8ui35Pdidgvwb8F7agwHLu-wPZyoFf-byaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
          },
          {
            label: 'Gifts under $100',
            link: '',
            image: {
              altText: null,
              url: 'https://s3-alpha-sig.figma.com/img/a873/63eb/76a3194c072abd9da8f464e45a755039?Expires=1685318400&Signature=oTFUEQqayg4KoZwuHF9nADAKJO3kiyCVPyKtWwe3SA~6OGn0z3MKo5AEawlj3KFgKBrHUzBT-e8sGrXFcC1Hu5MP9-~jhFgoGEmkSyUUHZSuVF191H6NfeT60kFv5zi3LKRaintfJSWT7P8t1Skh7Rrvr200Lhvm08zwPI~yabt2TwTqi2Tp1h-knbXhiUcjby~b5i8zc0bTGe2~nZpNzVg2Hn7yqT5RzwJ5e~XsDYpd6uMwJMBUVDNDn3NwAgvD8fmTUGTLvtbHwhLeLOWZ8t1ng5e83j~NR9I5tnF2fAARB1dmD4Vve7FVc~oiwXiIMaGbi0syJLX-l3b~7iV7bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
          },
          {
            label: 'Skincare',
            link: '',
            image: {
              altText: null,
              url: 'https://s3-alpha-sig.figma.com/img/86fc/1563/acdf8eb9683de37e4940b94f0e31bf7d?Expires=1685318400&Signature=ALyLWOmzsGkkkkia5jA3i4rYq4DedanxVlX-NkTv~MtNDY-4puDdHJJOkYylQ6EhNTsyJLXXh8JW3BgytvzLYDOdTKzCoLJVrRr00Y5u1UOwTUfVN5wjy-jbHpgzu96pDn06da5YtzPJGLvJZ4-VGTIDwTIFYibYQXjht5D7GXmpSw8ZZQhm5v9ma4cvpHz7zu5vo64ELhj3a5T9oxqznbSGXCSaADUr9atVathmb1ATyHnkq3QDKTPpNW2FM7ZjPAT~G4kv8ak0iZHzoTtwHM6-92IzyrgKC891zfTxS2PLlk9RT1c128MV5CWQCb2J-jLQvRMnDjf5ADwvCNlwcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
          },
        ],
      },
      {
        __typename: 'FeaturedProducts',
        id: 'product_id',
        title: 'Shop our festive favourites',
        subtitle: '',
        rating: 5,
        totalRating: 299,
        products: {
          id: 'id',
          handle: 'handle',
          collection: [
            {
              id: 'id',
              title: 'The Farrah Straightener',
              publishedAt: 'publishedAt',
              handle: 'handle',
              vendor: 'vendor',
              variants: {
                nodes: [
                  {
                    id: 'qwe',
                    image: {
                      url: 'https://media.graphassets.com/mpIZ8SltRqRdT5HvBYtR',
                      altText: 'altText',
                      width: 120,
                      height: 120,
                    },
                    price: {
                      amount: '120',
                      currencyCode: 'AUS',
                    },
                    compareAtPrice: {
                      amount: '120',
                      currencyCode: 'AUS',
                    },
                    selectedOptions: {
                      name: 'name',
                      value: 'value',
                    },
                    product: {
                      handle: 'handle',
                      title: 'The Farrah Straightener',
                    },
                  },
                ],
              },
              description: 'This titanium-plated straightener promises a smooth, frizz-free finish. ',
            },
            {
              id: 'id1',
              title: 'The Farrah Straightener',
              publishedAt: 'publishedAt',
              handle: 'handle',
              vendor: 'vendor',
              variants: {
                nodes: [
                  {
                    id: 'qwe',
                    image: {
                      url: 'https://media.graphassets.com/mpIZ8SltRqRdT5HvBYtR',
                      altText: 'altText',
                      width: 120,
                      height: 120,
                    },
                    price: {
                      amount: '120',
                      currencyCode: 'AUS',
                    },
                    compareAtPrice: {
                      amount: '120',
                      currencyCode: 'AUS',
                    },
                    selectedOptions: {
                      name: 'name',
                      value: 'value',
                    },
                    product: {
                      handle: 'handle',
                      title: 'title',
                    },
                  },
                ],
              },
              description: 'This titanium-plated straightener promises a smooth, frizz-free finish. ',
            },
            {
              id: 'id2',
              title: 'The Farrah Straightener',
              publishedAt: 'publishedAt',
              handle: 'handle',
              vendor: 'vendor',
              variants: {
                nodes: [
                  {
                    id: 'qwe',
                    image: {
                      url: 'https://media.graphassets.com/mpIZ8SltRqRdT5HvBYtR',
                      altText: 'altText',
                      width: 120,
                      height: 120,
                    },
                    price: {
                      amount: '120',
                      currencyCode: 'AUS',
                    },
                    compareAtPrice: {
                      amount: '120',
                      currencyCode: 'AUS',
                    },
                    selectedOptions: {
                      name: 'name',
                      value: 'value',
                    },
                    product: {
                      handle: 'handle',
                      title: 'title',
                    },
                  },
                ],
              },
              description: 'This titanium-plated straightener promises a smooth, frizz-free finish. ',
            },
          ],
        },
      },
      {
        __typename: 'SectionOffer',
        id: 'clhfrqc6o0qh90c1890kq4r1z',
        offerName: 'Our Offers',
        backgroundColor: '#f9f5f0',
        offerItems: [
          {
            description:
              'When you purchase a selected Halo straightener & the Halo X3 Titanium 3 Piece Curler. T&Cs apply.',
            heading: 'Save $100',
            buttonText: 'Shop Now',
            url: '/',
            topLeftBoxText: 'Save $100',
            image: {
              url: imageUrl,
              width: 1412,
              altText: '',
            },
          },
          {
            description: 'T&Cs Apply.',
            heading: '20% Off Matrix Styling Range',
            buttonText: 'Shop Now',
            url: '/',
            topLeftBoxText: '20% Off',
            image: {
              url: imageUrl,
              width: 1418,
              altText: '',
            },
          },
          {
            description: 'When you buy 2 products. T&Cs Apply.',
            heading: 'Free Gift with Goldwell',
            buttonText: 'Shop Now',
            url: '/',
            topLeftBoxText: 'FREE GIFT',
            image: {
              url: imageUrl,
              width: 1416,
              altText: '',
            },
          },
          {
            description: 'when you purchase the ghd Original Hair Straightener. T&Cs Apply.',
            heading: 'Free Gift',
            buttonText: 'Shop Now',
            url: '/',
            topLeftBoxText: 'FREE GIFT',
            image: {
              url: imageUrl,
              width: 1014,
              altText: '',
            },
          },
          {
            description: 'Use promo code: MERMADEDUO',
            heading: 'Free Gifts with orders $50+',
            buttonText: 'Shop Now',
            url: '/',
            topLeftBoxText: 'FREE GIFT',
            image: {
              url: imageUrl,
              width: 944,
              altText: '',
            },
          },
          {
            description: 'Sign Up to Style Society & get 10% Off your next purchase*.',
            heading: 'Style Society 10% Off',
            buttonText: 'Shop Now',
            url: '/',
            topLeftBoxText: '10% Off',
            image: {
              url: imageUrl,
              width: 1300,
              altText: '',
            },
          },
          {
            description: 'Valued at $29.90. T&Cs Apply.',
            heading: 'Free Gift with Coco & Eve',
            buttonText: 'Shop Now',
            url: '/',
            topLeftBoxText: 'FREE GIFT',
            image: {
              url: 'https://media.graphassets.com/7uIfLBER0udMQVn4cwLL',
              width: 1416,
              altText: '',
            },
          },
          {
            description: '',
            heading: '',
            topLeftBoxText: '',
            buttonText: '',
            url: '/',
            image: {
              url: 'https://media.graphassets.com/qooBPLEaR7OcLwjZ1RMa',
              width: 412,
              altText: '',
            },
          },
        ],
      },
      {
        __typename: 'CampaignBrands',
        title: 'Holiday gifts by brands',
        brands: [
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/2040/1491/3aa1142b000ceadac69eae103574011c?Expires=1684713600&Signature=ZZUbPeR6Anwy~KYiLCsfA5vihe-QKFe9TcB-QSQyo4cpulxCAdYGzHwuXIShNKtvq-apVKuCjzInV6VqgPStf-SlgAK2ko~dkQt89w8CiGWsz9-xqGK1j0aS2N-6UvqfzhcsIp4Dzs0DfjwfY1ZVsY4cVu4LYuTGXjtXBAmMugNmHrHv6x2Xfs9RfkwPVtWfIRG34qtUQTyvV4NYPofDMyMGzVFMD6Je~6dDOSQYgDm--xeeTTHDsxNGRW4VvlEq8u7rB5rLdSWzdnjC7w6NVlvddVFfRLIpd2jhvB09XXr0POus-fdll7DYbzDPjK86OzEOnwlg7WCTSDGk1sO3aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'kevin.murphy',
          },
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/869f/c119/6fc0920362be9f44063e47e2753ce5bd?Expires=1684713600&Signature=ETiW8bWFOZJAPTVtNLao2bssJOlz-um8fZLJTgFbaL0AxmIVyTrW0KezpUIf0ibbuypvj8a5KgBgsvj7U2Uv8ux0x5nTDPQJZjepdKwphF~tk-sitgacOiLd1wOrKHxCv8m~Pq5DHplyszrKSXnJHARYKd8MiRndbLOED438RY49cP8HDxci3gZF7aEyW9bPAC3qU~NwoZx0sdWd2GPwfyLu2fDPbfuatHNUoI~Mb-4mOZ2gVXslN7LrmwBG~Z46lh-w2xakAGNOiLzrhzpNO2w1-L~T8rYh0enTRSizG4hrm9R~CPAUk4Dt3lfD1hDRZWQfXBHfco-Yxpnq25r8Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'revlon professional',
          },
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/3ffe/152d/9999747fe39c96754b7b543fffd65fec?Expires=1684713600&Signature=Boen9PBvVAnjuhSbuF~M5jBBY8AZxouRjKa5GUTLvg9e9nE9~9rIItMWnxzLxnnTZCnCzAEyENdwRi~zn-N11M8j6VaIC3CztWQu9enGSI0KyBIfviljvi-lymsmOFfm6U5~io5fN5HVVAAJEKaCyjuCcsUOOY3kzUA1W7uhvecMtG4U2cIde8Me0r4EYqWrsLlVQz23J0b7gd5jemaM3oJ0cfIyLkXFyo5OBXuW2FCjZdvM0rV39cbRbk52oVhwLy-IF7DBiht59QjiKBoHf~dZ0U6EpQ3mN7e-fLWxOgmvQje1AvgXNy4DWLRAvvYB2Tm~KKoRLdclV0NvAZYSHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'eleven australia',
          },
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/7ddf/45ca/bfa6144002cde2e3d9fa64717e970b0b?Expires=1684713600&Signature=Ksrl1Xa3sqdqJOAiHXPHMF9fkVolM3dLiy1~zu1i9uVczc3MuUMO0ZPmnz1wx6wQCg1FR~89wSzFG0m6ioTjUhntRnK6VR-jDRBr8eeKes9y0VcK1nnkLPdm-uIxLsTvOXPNypnL-eLfzRboInq9QDD4CNIJh-lXwKCrIGiXSJsagp2AGz-p44v~7bGykrNM-pZbMlcfD9asmkmcWegkGzehRhxauCMlBUzzKlSgkX5bTJePileHFY4YyUu-YhftM2qcen5bJ70sEQxm2oq6Zqef-BheJLdLTUATYMqEV5zgQdj-YijDUecurgYpT6Qgz63g6ZbVUhySQ9-CvlIS~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'good day hair',
          },
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/869f/c119/6fc0920362be9f44063e47e2753ce5bd?Expires=1684713600&Signature=ETiW8bWFOZJAPTVtNLao2bssJOlz-um8fZLJTgFbaL0AxmIVyTrW0KezpUIf0ibbuypvj8a5KgBgsvj7U2Uv8ux0x5nTDPQJZjepdKwphF~tk-sitgacOiLd1wOrKHxCv8m~Pq5DHplyszrKSXnJHARYKd8MiRndbLOED438RY49cP8HDxci3gZF7aEyW9bPAC3qU~NwoZx0sdWd2GPwfyLu2fDPbfuatHNUoI~Mb-4mOZ2gVXslN7LrmwBG~Z46lh-w2xakAGNOiLzrhzpNO2w1-L~T8rYh0enTRSizG4hrm9R~CPAUk4Dt3lfD1hDRZWQfXBHfco-Yxpnq25r8Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'revlon professional',
          },
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/869f/c119/6fc0920362be9f44063e47e2753ce5bd?Expires=1684713600&Signature=ETiW8bWFOZJAPTVtNLao2bssJOlz-um8fZLJTgFbaL0AxmIVyTrW0KezpUIf0ibbuypvj8a5KgBgsvj7U2Uv8ux0x5nTDPQJZjepdKwphF~tk-sitgacOiLd1wOrKHxCv8m~Pq5DHplyszrKSXnJHARYKd8MiRndbLOED438RY49cP8HDxci3gZF7aEyW9bPAC3qU~NwoZx0sdWd2GPwfyLu2fDPbfuatHNUoI~Mb-4mOZ2gVXslN7LrmwBG~Z46lh-w2xakAGNOiLzrhzpNO2w1-L~T8rYh0enTRSizG4hrm9R~CPAUk4Dt3lfD1hDRZWQfXBHfco-Yxpnq25r8Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'revlon professional',
          },
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/7ddf/45ca/bfa6144002cde2e3d9fa64717e970b0b?Expires=1684713600&Signature=Ksrl1Xa3sqdqJOAiHXPHMF9fkVolM3dLiy1~zu1i9uVczc3MuUMO0ZPmnz1wx6wQCg1FR~89wSzFG0m6ioTjUhntRnK6VR-jDRBr8eeKes9y0VcK1nnkLPdm-uIxLsTvOXPNypnL-eLfzRboInq9QDD4CNIJh-lXwKCrIGiXSJsagp2AGz-p44v~7bGykrNM-pZbMlcfD9asmkmcWegkGzehRhxauCMlBUzzKlSgkX5bTJePileHFY4YyUu-YhftM2qcen5bJ70sEQxm2oq6Zqef-BheJLdLTUATYMqEV5zgQdj-YijDUecurgYpT6Qgz63g6ZbVUhySQ9-CvlIS~A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'good day hair',
          },
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/869f/c119/6fc0920362be9f44063e47e2753ce5bd?Expires=1684713600&Signature=ETiW8bWFOZJAPTVtNLao2bssJOlz-um8fZLJTgFbaL0AxmIVyTrW0KezpUIf0ibbuypvj8a5KgBgsvj7U2Uv8ux0x5nTDPQJZjepdKwphF~tk-sitgacOiLd1wOrKHxCv8m~Pq5DHplyszrKSXnJHARYKd8MiRndbLOED438RY49cP8HDxci3gZF7aEyW9bPAC3qU~NwoZx0sdWd2GPwfyLu2fDPbfuatHNUoI~Mb-4mOZ2gVXslN7LrmwBG~Z46lh-w2xakAGNOiLzrhzpNO2w1-L~T8rYh0enTRSizG4hrm9R~CPAUk4Dt3lfD1hDRZWQfXBHfco-Yxpnq25r8Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'revlon professional',
          },
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/3ffe/152d/9999747fe39c96754b7b543fffd65fec?Expires=1684713600&Signature=Boen9PBvVAnjuhSbuF~M5jBBY8AZxouRjKa5GUTLvg9e9nE9~9rIItMWnxzLxnnTZCnCzAEyENdwRi~zn-N11M8j6VaIC3CztWQu9enGSI0KyBIfviljvi-lymsmOFfm6U5~io5fN5HVVAAJEKaCyjuCcsUOOY3kzUA1W7uhvecMtG4U2cIde8Me0r4EYqWrsLlVQz23J0b7gd5jemaM3oJ0cfIyLkXFyo5OBXuW2FCjZdvM0rV39cbRbk52oVhwLy-IF7DBiht59QjiKBoHf~dZ0U6EpQ3mN7e-fLWxOgmvQje1AvgXNy4DWLRAvvYB2Tm~KKoRLdclV0NvAZYSHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'eleven australia',
          },
          {
            image: {
              url: 'https://s3-alpha-sig.figma.com/img/2040/1491/3aa1142b000ceadac69eae103574011c?Expires=1684713600&Signature=ZZUbPeR6Anwy~KYiLCsfA5vihe-QKFe9TcB-QSQyo4cpulxCAdYGzHwuXIShNKtvq-apVKuCjzInV6VqgPStf-SlgAK2ko~dkQt89w8CiGWsz9-xqGK1j0aS2N-6UvqfzhcsIp4Dzs0DfjwfY1ZVsY4cVu4LYuTGXjtXBAmMugNmHrHv6x2Xfs9RfkwPVtWfIRG34qtUQTyvV4NYPofDMyMGzVFMD6Je~6dDOSQYgDm--xeeTTHDsxNGRW4VvlEq8u7rB5rLdSWzdnjC7w6NVlvddVFfRLIpd2jhvB09XXr0POus-fdll7DYbzDPjK86OzEOnwlg7WCTSDGk1sO3aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            },
            altText: 'kevin.murphy',
          },
        ],
      },
      {
        __typename: 'ShopByGroup',
        subtitle:
          "Discover a special spoil for everyone. From fussy fellas to your boujie BFF—and don't forget yourself!",
        title: 'Holiday gifts by category',
        images: [
          {
            label: 'Set To Sleigh',
            link: 'Shop Haircare Sets',
            image: {
              altText: null,
              url: 'https://media.graphassets.com/mnC6ZSSfQUCdUoEADKLC',
            },
          },
          {
            label: 'Spark Joy',
            link: 'Shop Electrical Gifts',
            image: {
              altText: null,
              url: 'https://media.graphassets.com/8R9GjaH8R3yK3dcMiOF4',
            },
          },
          {
            label: 'Oh-La-La-la',
            link: 'Shop Luxe Gifts',
            image: {
              altText: null,
              url: 'https://media.graphassets.com/gp0nYzpQBOHdHJS6JjXg',
            },
          },
          {
            label: 'Stocking Fillers',
            link: 'Shop Gifts Under $25',
            image: {
              altText: null,
              url: 'https://media.graphassets.com/BGy0ZnX5RomaEzeZy0O1',
            },
          },
        ],
        shopByGroup: 'row',
      },
      {
        __typename: 'GiftFinder',
        title: `It's here! Be inspired with holiday hauls & wish-worthy gifting, our Christmas drop has officially arrived.`,
        cover: {
          image: {
            url: 'https://s3-alpha-sig.figma.com/img/6aa8/9fec/849988522767ff4ac5e64d1b980472c2?Expires=1684713600&Signature=KNKriRWmgoBjRR9ufJnROLaekCFOuqhIxLV~rJd7n1paLfcHQ0xzN3NLlU8xSVnIgw5RmINMedxtUWz2WwhWb-niy375O0KSggZNPSzAXd0EgZ6-bXTy21AImmol2mZcTHyAKr35-1cWE7bMUFrAC1Lnw7~lat2u5tpORZT07DpyNxj-XqpjMdoVcu7CO9E4U-1VEhgYD1z7AMmRhhUH2NwrqAW2R1e54A6HBDOSHRGMz2nrd3rF0aN0vUCTOJvr0cmFupPK4Q3bq5nC~Hr2p~1duzRiF6YwRWHdQ1fbzsbDQL1LjUHDaP4X7hECXsYzXMQgJu4IVYHpwzyEoHP19g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          },
          altText: 'cover image',
        },
        questionTemplate: [
          {
            title: 'Gift Finder',
            question: "It's the season for wish-worthy gifts and holiday hauls. Are you ready to get gifting?",
            answers: [
              {
                answer: {
                  image: {
                    url: 'https://s3-alpha-sig.figma.com/img/9a93/96f8/595714d4ea806c1fbe4adca4f8ceec18?Expires=1684713600&Signature=WAiZY3x1L8NOVNuxPcxQsgsVUJd9BHCgGjeoN8dXYCLC6X3EGMN0nwM1kDewpwiCewWw5Z~Mb67RXv3J5YrsN0xkRoQpnMCK33aV0f4393dN97wiKo7LR~GdKZL3im4FdyC8gp2FsUz1g6x~G1orWlsLgRRmZjw~XFRhWw1EgCI7fW-nEJ47V-GgCAADKfI8kgJWuHFN1CRiZJqRg3a~-QjYXLDCZCexqKnxIXEI2dPI9mgvbKFCCSGsWTklrFT7uwRh5RJSmxCYeooow5RDmmtaJy1FsduWSZ2NlnWNuuKgJnVgZuycScaM53LMZHpKvzgWgVAmAneHLAibGnoLbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  },
                  altText: 'no thanks',
                  ans: "I'm a pro, just looking for inspo",
                },
              },
              {
                answer: {
                  image: {
                    url: 'https://s3-alpha-sig.figma.com/img/d358/df3c/7947d111674bb72d303eaf6249c431b9?Expires=1684713600&Signature=emulfkspAd6CnwF9XaoG5-ENy1XqPLzHk5XJ8NIJ0VFq0LCuu6pqYDZ8xlphBQGVhgIoJBXGVGONufXn~1lQNoDKV3LZpCMV6xqQQSKOkRaC5lJJZrCyaqUSsVAr8YbfA6ybxNjMIIFcHDWgx-wjqzmk8euMmYp0jmWfmmcDQtjzY0cfx8Mk8SLSvELc5yMR6EyXaUC8e5BsXeVkAQrPI4NKDQHSTdVvaAebVaZcjfgMYKd2kBT0y2SW05CS3YYaQd6v5Eh36mfPo1IC6Gm95JA2QrFkcP8dz9Q-EwLlvIrbjSm2k7qCtsh4zg4PrJ2Db3iifjN9fjpcZGcg1AbdOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  },
                  altText: 'yes',
                  ans: 'Send help, gifting stresses me out',
                },
              },
            ],
          },
          {
            title: 'Gift Finder',
            question: 'Looking for some great gifts?',
            answers: [
              {
                answer: {
                  image: {
                    url: 'https://s3-alpha-sig.figma.com/img/9a93/96f8/595714d4ea806c1fbe4adca4f8ceec18?Expires=1684713600&Signature=WAiZY3x1L8NOVNuxPcxQsgsVUJd9BHCgGjeoN8dXYCLC6X3EGMN0nwM1kDewpwiCewWw5Z~Mb67RXv3J5YrsN0xkRoQpnMCK33aV0f4393dN97wiKo7LR~GdKZL3im4FdyC8gp2FsUz1g6x~G1orWlsLgRRmZjw~XFRhWw1EgCI7fW-nEJ47V-GgCAADKfI8kgJWuHFN1CRiZJqRg3a~-QjYXLDCZCexqKnxIXEI2dPI9mgvbKFCCSGsWTklrFT7uwRh5RJSmxCYeooow5RDmmtaJy1FsduWSZ2NlnWNuuKgJnVgZuycScaM53LMZHpKvzgWgVAmAneHLAibGnoLbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  },
                  altText: 'no thanks',
                  ans: "I'm a pro, just looking for inspo",
                },
              },
              {
                answer: {
                  image: {
                    url: 'https://s3-alpha-sig.figma.com/img/d358/df3c/7947d111674bb72d303eaf6249c431b9?Expires=1684713600&Signature=emulfkspAd6CnwF9XaoG5-ENy1XqPLzHk5XJ8NIJ0VFq0LCuu6pqYDZ8xlphBQGVhgIoJBXGVGONufXn~1lQNoDKV3LZpCMV6xqQQSKOkRaC5lJJZrCyaqUSsVAr8YbfA6ybxNjMIIFcHDWgx-wjqzmk8euMmYp0jmWfmmcDQtjzY0cfx8Mk8SLSvELc5yMR6EyXaUC8e5BsXeVkAQrPI4NKDQHSTdVvaAebVaZcjfgMYKd2kBT0y2SW05CS3YYaQd6v5Eh36mfPo1IC6Gm95JA2QrFkcP8dz9Q-EwLlvIrbjSm2k7qCtsh4zg4PrJ2Db3iifjN9fjpcZGcg1AbdOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  },
                  altText: 'yes',
                  ans: 'Send help, gifting stresses me out',
                },
              },
            ],
          },
          {
            title: 'Gift Finder',
            question: 'Gifts that will bring joy to you and everyone that recieves them!',
            answers: [
              {
                answer: {
                  image: {
                    url: 'https://s3-alpha-sig.figma.com/img/9a93/96f8/595714d4ea806c1fbe4adca4f8ceec18?Expires=1684713600&Signature=WAiZY3x1L8NOVNuxPcxQsgsVUJd9BHCgGjeoN8dXYCLC6X3EGMN0nwM1kDewpwiCewWw5Z~Mb67RXv3J5YrsN0xkRoQpnMCK33aV0f4393dN97wiKo7LR~GdKZL3im4FdyC8gp2FsUz1g6x~G1orWlsLgRRmZjw~XFRhWw1EgCI7fW-nEJ47V-GgCAADKfI8kgJWuHFN1CRiZJqRg3a~-QjYXLDCZCexqKnxIXEI2dPI9mgvbKFCCSGsWTklrFT7uwRh5RJSmxCYeooow5RDmmtaJy1FsduWSZ2NlnWNuuKgJnVgZuycScaM53LMZHpKvzgWgVAmAneHLAibGnoLbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  },
                  altText: 'no thanks',
                  ans: "I'm a pro, just looking for inspo",
                },
              },
              {
                answer: {
                  image: {
                    url: 'https://s3-alpha-sig.figma.com/img/d358/df3c/7947d111674bb72d303eaf6249c431b9?Expires=1684713600&Signature=emulfkspAd6CnwF9XaoG5-ENy1XqPLzHk5XJ8NIJ0VFq0LCuu6pqYDZ8xlphBQGVhgIoJBXGVGONufXn~1lQNoDKV3LZpCMV6xqQQSKOkRaC5lJJZrCyaqUSsVAr8YbfA6ybxNjMIIFcHDWgx-wjqzmk8euMmYp0jmWfmmcDQtjzY0cfx8Mk8SLSvELc5yMR6EyXaUC8e5BsXeVkAQrPI4NKDQHSTdVvaAebVaZcjfgMYKd2kBT0y2SW05CS3YYaQd6v5Eh36mfPo1IC6Gm95JA2QrFkcP8dz9Q-EwLlvIrbjSm2k7qCtsh4zg4PrJ2Db3iifjN9fjpcZGcg1AbdOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  },
                  altText: 'yes',
                  ans: 'Send help, gifting stresses me out',
                },
              },
            ],
          },
        ],
        buttons: [
          {
            button: {
              buttonText: 'Back',
              buttonTheme: 'secondary',
              buttonUrl: '/',
            },
          },
          {
            button: {
              buttonText: 'Next',
              buttonTheme: 'secondary',
              buttonUrl: '/',
            },
          },
        ],
      },
      {
        __typename: 'Testimonials',
        title: 'The Cut',
        people: [
          {
            tag: 'Expert Advice',
            image: {
              image: {
                url: 'https://s3-alpha-sig.figma.com/img/ec1f/9d12/04bda3373f86f62dac4c9617943b3961?Expires=1684713600&Signature=GZco0qzC35swITL6M4UIhGVFhMugpjOeOsQ3yIExTQuPnbTE5kxMTvHiJXBD7XTQK1EMiZtI7hzD7VSjMjAAuKHMhEsZvsBbDLiTQx0ybwjc5Sp~mwkM86WP1y7R1j5xHD~UNMvMf5A5s-q0MhR72bJvYraWpldEVYdczu~oe69T2dtyzkKmruATQWB8HXiUcK27JIVQB1YSF2hDR7WnR~bQkCeuCpk1xOs6kVKGZMi0djFOk-8Xh4~7D3xUDdVTeZGTwd6iUE-RcyFlyijJFg4DowTd6H06AlSt9JHhikC4qMMyZRNvDGZkJo99EAIl~ylsIcZfpsLf41wsFc~fzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              },
              altText: 'user 1',
            },
            subject: 'Bond Builders: Everything You Need To Know',
            postDate: 'Posted 11 hours ago',
            user: 'Lily Brown',
            contentPeak:
              'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum...',
            button: {
              buttonText: 'Read now',
              buttonTheme: 'primary',
              buttonUrl: '/',
            },
          },
          {
            tag: 'Trending Now',
            image: {
              image: {
                url: 'https://s3-alpha-sig.figma.com/img/fe5a/3263/fdd60813ab8de919b175c64c98bc1612?Expires=1684713600&Signature=lWvzQy~ftbikH1tnFkBO9eiRup7xDBCXHwRnK5JwXInZtTJcV0PxzqxM9w8-vwzcsUhojC9Sy1f7kUgtxRpycOv2saRTZJAmE2ytrzKEFBCU8~5phfHKGr9TgzdKp6mAMCTPEzC0KDdrx6Zgj~hiqGax0jyPT07QOPfkpTwLamfHih5M47CXMseGOW6HqphXYqxy4YxfeMH-aF6QCgiR32Wa3mGCDX~laC2vFF0D4kKBsJ56gFAV0JJNLAbJPhOlnX38hmG9iRnSoJQ-IETO6z1NXbKEJV8Dfk23qwKpk2mkBJWis4LRKWao~Xy~3g6aef7gmNMwxk7Whpx48kGZKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              },
              altText: 'user 2',
            },
            subject: 'The Shower Series : Monique Riley',
            postDate: 'Posted 11 hours ago',
            user: 'Lily Brown',
            contentPeak:
              'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum...',
            button: {
              buttonText: 'Read now',
              buttonTheme: 'primary',
              buttonUrl: '/',
            },
          },
          {
            tag: 'Trending Now',
            image: {
              image: {
                url: 'https://s3-alpha-sig.figma.com/img/d501/f13a/4914e0868a08f7ae551f70f83175ef89?Expires=1684713600&Signature=MBjXR9v3C8klwdbNa5sEfKzWSgD9YWg~V~ErkUpiFkOOnz4LXg0FmGUWmP1ZiYW0wfjegOAa6akDTMqJOAsci66z-3-4RxWFd6Xf~X0ncjIG9IiuwxrSJdcVTi1TjfDVOSiSQXKylV~tda5BgiTVhdKCl1zgGs4JLq3-HgqHY9xmj13fsy9vxMLlVF4Ekz8UOu03Xtf-OL9ciP7mVV61VJX4nrBlUxdMC7K~JJG4D1ihZSfl7IQNIEjc95NRsbgu1gBlGfdJE6QxorMlnlXU25A905BoJOLgtjCWCiqAocqbEZRmRo-sIaXxu9la8kxVwlGYYdlHSc3uJkVU1ko8DA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              },
              altText: 'user 3',
            },
            subject: 'House Newness : Introducing Maria Nila',
            postDate: 'Posted 11 hours ago',
            user: 'Lily Brown',
            contentPeak:
              'Lorem ipsum dolor sit amet consectetur. Quisque eleifend metus blandit dui quam sodales ipsum...',
            button: {
              buttonText: 'Read now',
              buttonTheme: 'primary',
              buttonUrl: '/',
            },
          },
        ],
      },
    ],
  },
}
