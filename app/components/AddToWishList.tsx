import { useState } from 'react'

import { IconWishList } from './Icon'

type AddToWishListProps = {
  className?: string
}

export const AddToWishList = ({ className }: AddToWishListProps) => {
  const [added, setAdded] = useState(false)

  const addWishList = () => {
    setAdded(!added)
  }
  return (
    <button className={className} onClick={addWishList}>
      {added ? (
        <IconWishList fill="red" stroke="red" className="m-auto" />
      ) : (
        <IconWishList fill="none" stroke="black" className="m-auto" />
      )}
    </button>
  )
}
