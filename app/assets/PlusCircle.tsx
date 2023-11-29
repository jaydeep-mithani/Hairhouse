import React from 'react'

export const PlusCircle = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  const { stroke, ...rest } = props
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={`${stroke || '#000'}`}
      {...rest}>
      <path
        d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39759 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6025 5.39759 18.3334 9.99996 18.3334Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 6.66675V13.3334" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.66663 10H13.3333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
