import { Button, Input } from '@overdose/components'
import { IconRemove, Text, IconApplyPromoCode } from '~/components'
import clsx from 'clsx'

import styles from '../Cart.module.css'
import { CartDiscountsProps } from '../Cart.types'
import { UpdateDiscountForm } from './UpdateDiscountForm'

/**
 * Temporary discount UI
 * @param discountCodes the current discount codes applied to the cart
 * @todo rework when a design is ready
 */
export function CartDiscounts({ discountCodes, className }: CartDiscountsProps) {
  const codes = discountCodes?.map(({ code }) => code).join(', ') || null

  return (
    <>
      {/* Have existing discount, display it with a remove option */}
      <dl className={codes ? 'grid' : 'hidden'}>
        <div className="flex items-center justify-between font-medium">
          <Text as="dt">Discount(s)</Text>
          <div className="flex items-center justify-between">
            <UpdateDiscountForm>
              <button type="submit">
                <IconRemove aria-hidden="true" style={{ height: 18, marginRight: 4 }} />
              </button>
            </UpdateDiscountForm>
            <Text as="dd">{codes}</Text>
          </div>
        </div>
      </dl>

      {/* No discounts, show an input to apply a discount */}
      <UpdateDiscountForm>
        <div className={clsx(codes ? 'hidden' : `flex items-center gap-4 justify-between ${className}`)}>
          <Input
            name="discountCode"
            placeholder="Add promotional code"
            theme={{ root: styles.promoInput }}
            suffix={
              <Button
                variant="ghost"
                status="secondary"
                htmlType="submit"
                size="lg"
                iconOnly
                noHover
                icon={<IconApplyPromoCode />}
                theme={{ root: styles.promoInputButton }}
              />
            }
          />
        </div>
      </UpdateDiscountForm>
    </>
  )
}
