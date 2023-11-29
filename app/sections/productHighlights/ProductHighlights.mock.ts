import { ProductHighlightsProps } from './ProductHighlights.types'

export const mock: ProductHighlightsProps = {
  totalReviews: 299,
  ratings: 5,
  accordions: [
    {
      title: 'Hairhouse hearts',
      description: {
        html: `<ul>
          <li>✓ Variable temperature controls to suit your hair type</li>
          <li>✓ Titanium floating plates glide through hair effortlessly</li>
          <li>✓ Even & consistent heat distribution</li>
        </ul>`,
      },
    },
    {
      title: 'Reviews',
      description: {
        html: `
          <p>
            ★★★★★ KEEGAN <br>
            ⁠"I love my new ghd Wide Straightener. It does my hair in minutes and has taken half an hour off my usual styling time."
          </p>
          <p>
          <br>
          ★★★★★ ⁠Lauren <br>
          ⁠I bought this a month ago, and it has been amazing! I have thick, curly hair, and it makes my hair so smooth, straight and shiny.
          </p>
       `,
      },
    },
    {
      title: 'Full specifications',
      description: {
        html: `
        <table>
            <tr>
              <td>TECHNOLOGY</td>
              <td>Dual-Zone Technology</td>
            </tr>
            <tr>
              <td>Plate type</td>
              <td>Ceramic</td>
            </tr>
            <tr>
              <td>Plate size</td>
              <td>42mm</td>
            </tr>
            <tr>
              <td>Ideal for</td>
              <td>Thick hair</td>
            </tr>
            <tr>
              <td>Variable temp</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Auto shut off</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Power</td>
              <td>Corded / Universal Voltage</td>
            </tr>
            <tr>
              <td>Warranty</td>
              <td>2 years</td>
            </tr>
        </table>
        `,
      },
    },
  ],
  button: {
    buttonText: 'Shop now',
    buttonUrl: '',
    buttonTheme: 'primary',
    displayButton: true,
  },
  getProductByHandles: [
    {
      productData: [
        {
          node: {
            id: 'ufiskfjs',
            title: 'Hair Straightener',
            price: {
              amount: 249.95,
            },
            product: {
              id: 'uir78njfh44mk',
              title: 'Halo The Farrah Straightener',
              description: `A straightener designed for curly, coarse hair types, The Farrah’s Nano Titanium Technology
              gently conducts an even heat to smooth strands and infuse hair with mega shine. Plus, titanium floating
              plates reduces styling time, preventing damage.`,
            },
            image: {
              altText: 'halo',
              url: 'https://cdn.shopify.com/s/files/1/0706/9679/6473/products/coverportrait.png?v=1681219733&width=1426',
              width: 587,
              height: 587,
            },
          },
        },
      ],
    },
  ],
}
