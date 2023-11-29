export const Close: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = ({
  height = '26',
  width = '26',
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.25 6.75L6.75 19.25" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.75 6.75L19.25 19.25" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
