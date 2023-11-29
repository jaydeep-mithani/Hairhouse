import { BrandCardProps, SortedBrands } from '~/sections/brandLogoGrid/BrandCard.types'

export const lettersFilter = [
  {
    name: 'A-E',
    id: 'AE',
    values: ['A', 'B', 'C', 'D', 'E'],
  },
  {
    name: 'F-J',
    id: 'FJ',
    values: ['F', 'G', 'H', 'I', 'J'],
  },
  {
    name: 'K-O',
    id: 'KO',
    values: ['K', 'L', 'M', 'N', 'O'],
  },
  {
    name: 'P-T',
    id: 'PT',
    values: ['P', 'Q', 'R', 'S', 'T'],
  },
  {
    name: 'U-#',
    id: 'U#',
    values: ['U', 'V', 'W', 'X', 'Y', 'Z', /^\d+$/],
  },
]

export const sortedBrands = (brandsArr: BrandCardProps[]) => {
  const arr = brandsArr.filter((item) => {
    return item.brandName && item.brandUrl
  })
  const groupedByAlphabet = arr?.reduce((acc, brand) => {
    const firstLetter = brand?.brandName?.[0].toUpperCase() || ''
    acc[firstLetter] = acc[firstLetter] || []
    acc[firstLetter]?.push(brand)
    return acc
  }, {} as { [key: string]: BrandCardProps[] })

  return Object.keys(groupedByAlphabet)
    .sort((a, b) => {
      if (!Number(a) && Number(b)) {
        return -1
      }

      if (Number(a) && !Number(b)) {
        return 1
      }

      if (a < b) {
        return -1
      }
      return 0
    })
    .reduce((acc, key) => {
      acc.push({
        firstLetter: key,
        data: groupedByAlphabet[key],
      })
      return acc
    }, [] as SortedBrands[])
}
