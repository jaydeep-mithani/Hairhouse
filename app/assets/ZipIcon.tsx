const ZipIcon = ({ grayscale }: { grayscale?: boolean }) => {
  const style = grayscale ? { filter: 'grayscale(1)' } : { filter: 'none' }
  return (
    <svg style={style} width="33" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)" opacity=".8">
        <mask id="b" maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="13">
          <path d="M33 .5H0v12h33V.5Z" fill="#fff" />
        </mask>
        <g mask="url(#b)">
          <path
            d="m.84 10.07.285 2.284h10.02l-.329-2.617H6.145l-.04-.324 4.302-2.946-.288-2.289H.101l.328 2.616h4.68l.04.327-4.31 2.948Z"
            fill="#000"
          />
          <path d="m11.283 4.178 1.025 8.176h10.026L21.31 4.178H11.283Z" fill="#AA8FFF" />
          <path
            d="M32.848 7.121c-.23-1.837-1.704-2.95-3.706-2.943h-6.67l1.025 8.176h3l-.205-1.635h3.175c2.499 0 3.642-1.526 3.381-3.598Zm-3.705 1.306-3.137.003-.246-1.962 3.154.002c.742.01 1.122.419 1.183.979.038.36-.13.977-.954.977ZM14.279 3.092c.527-.555.435-1.48-.206-2.065-.64-.585-1.588-.61-2.116-.054-.528.555-.436 1.48.205 2.064.641.586 1.589.61 2.117.055Z"
            fill="#000"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0h33v12H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ZipIcon
