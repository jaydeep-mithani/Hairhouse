import React from 'react'

export const MinusCircle = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
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
        d="M10.0001 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6025 1.66675 10.0001 1.66675C5.39771 1.66675 1.66675 5.39771 1.66675 10.0001C1.66675 14.6025 5.39771 18.3334 10.0001 18.3334Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.66675 10H13.3334" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
