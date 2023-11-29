import { Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import clsx from 'clsx'

import { mock } from './AccountBarcode.mock'
import styles from './AccountBarcode.module.css'
import { AccountBarcodeProps } from './AccountBarcode.types'

export const AccountBarcode = ({
  accountNumber = mock.accountNumber,
  barcodeImageUrl = mock.barcodeImageUrl,
}: AccountBarcodeProps) => {
  if (!accountNumber && !barcodeImageUrl) {
    return null
  }
  const accountNumberValue = accountNumber?.replace(/\D/g, '')
  return (
    <div className="md:pb-[30px] mb-[60px] md:mb-10 flex flex-col md:flex-row md:justify-between items-center gap-y-5 md:gap-y-0">
      <div className="pt-0 md:pt-[10px] text-center md:text-left">
        <Typography tag="p" variant="pageheading" theme={{ root: 'mb-[5px]' }}>
          Style Society Rewards Card
        </Typography>
        <Typography tag="p" variant="caption" theme={{ root: styles.thinText }}>
          Scan your Membership Barcode every time you shop in-store.
        </Typography>
      </div>
      <div className="flex flex-col items-center">
        {accountNumber && (
          <Typography tag="p" variant="body" theme={{ root: clsx(styles.thinText, 'mb-1') }}>
            {`Account Number: ${accountNumberValue}`}
          </Typography>
        )}
        {barcodeImageUrl && (
          <div className={clsx('w-[350px] h-[70px] overflow-hidden', styles.barcode)}>
            <Image data={{ url: barcodeImageUrl, width: 350, height: 70, altText: accountNumberValue }} />
          </div>
        )}
      </div>
    </div>
  )
}
