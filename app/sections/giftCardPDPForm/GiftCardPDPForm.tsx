import { Input, Option, Select, Textarea, Typography } from '@overdose/components'
import { Image } from '@shopify/hydrogen'
import { AddToCartButton, IconCalendar } from '~/components'
import React, { SyntheticEvent, useEffect, useState } from 'react'

import { mock } from './GiftCardPDPForm.mock'
import styles from './GiftCardPDPForm.module.css'
import { GiftCardPDPFormProps } from './GiftCardPDPForm.types'

export const GiftCardPDPForm: React.FC<GiftCardPDPFormProps> = ({ product, analytics, selectedVariant }) => {
  const { options } = product
  const { message, payment } = mock

  const initialFormValue = {
    message: '' || message?.options[0]?.label,
    value: 0 || options[0]?.values[0],
    sendDate: '',
    senderName: '',
    receipientName: '',
    receipientEmail: '',
    receipientConfirmEmail: '',
    personalisedMessage: '',
  }
  const [formDetails, setFormDetails] = useState(initialFormValue)

  const linesToAdd = [
    {
      key: 'message',
      value: formDetails?.message,
    },
    {
      key: 'value',
      value: formDetails?.value,
    },
    {
      key: 'sendDate',
      value: formDetails?.sendDate,
    },
    {
      key: 'senderName',
      value: formDetails?.senderName,
    },
    {
      key: 'receipientName',
      value: formDetails?.receipientName,
    },
    {
      key: 'receipientEmail',
      value: formDetails?.receipientEmail,
    },
    {
      key: 'receipientConfirmEmail',
      value: formDetails?.receipientConfirmEmail,
    },
    {
      key: 'personalisedMessage',
      value: formDetails?.personalisedMessage,
    },
  ]

  useEffect(() => {
    if (options[0]?.values[0]) {
      setFormDetails((form) => {
        return { ...form, value: options[0].values[0] }
      })
    }
  }, [options])

  const handleInputDateChange = (e: SyntheticEvent) => {
    setFormDetails((form) => {
      return { ...form, sendDate: (e.target as HTMLInputElement).value }
    })
  }

  if (!product) {
    return null
  }

  return (
    <div className={styles.root}>
      <Typography tag="h1" variant="displayMedium" weight="light">
        eGift Card
      </Typography>

      <Typography tag="p" variant="displayExtraSmall">
        Share The Love with a Hairhouse eGift Voucher. Sent to your recipient via email and redeemable online &
        in-store.
      </Typography>

      {message?.label && !!message?.options?.length && (
        <div className={styles.options}>
          <Typography tag="h6" variant="body">
            {message.label}
          </Typography>
          <Select
            name="properties[message]"
            defaultValue={message.options[0].label}
            onChange={(e) => {
              return setFormDetails((form) => {
                return { ...form, message: e }
              })
            }}
            theme={{
              root: styles.dropdown,
            }}>
            {message.options.map((option) => {
              return (
                <Option key={option.id} value={option.label} label={option.label}>
                  <Typography tag="p" variant="body">
                    {option.label}
                  </Typography>
                </Option>
              )
            })}
          </Select>
        </div>
      )}
      {!!options?.length && options[0]?.name && !!options[0]?.values?.length && (
        <div className={styles.options}>
          <Typography tag="h6" variant="body">
            {options[0].name}
          </Typography>
          <Select
            name="properties[value]"
            defaultValue={options[0].values[0]}
            theme={{
              root: styles.dropdown,
            }}
            onChange={(val: string) => {
              setFormDetails((form) => {
                return { ...form, value: val }
              })
            }}>
            {options[0].values.map((option, index) => {
              return (
                <Option key={index} value={option} label={`${option}`}>
                  <Typography tag="p" variant="body">
                    {`${option}`}
                  </Typography>
                </Option>
              )
            })}
          </Select>
        </div>
      )}
      <div className={styles.options}>
        <Typography tag="h6" variant="body">
          Send date
        </Typography>
        <div className="relative">
          <label htmlFor="sendDate">
            <input
              value={formDetails.sendDate}
              id="sendDate"
              name="properties[sendDate]"
              type="date"
              className={styles.inputDate}
              placeholder=""
              onChange={handleInputDateChange}
            />
          </label>
          <button type="button" className="absolute right-3 top-[13px] cursor-pointer">
            <IconCalendar />
          </button>
        </div>
      </div>

      <div className={styles.options}>
        <Typography tag="h6" variant="body">
          Sender name
        </Typography>
        <Input
          name="properties[senderName]"
          value={formDetails.senderName}
          onChange={(e) => {
            return setFormDetails((form) => {
              return { ...form, senderName: e }
            })
          }}
          theme={{
            root: styles.input_box,
          }}
        />
      </div>

      <div className={styles.options}>
        <Typography tag="h6" variant="body">
          Recipient&apos;s name
        </Typography>
        <Input
          name="properties[receipientName]"
          value={formDetails.receipientName}
          onChange={(e) => {
            return setFormDetails((form) => {
              return { ...form, receipientName: e }
            })
          }}
          theme={{
            root: styles.input_box,
          }}
        />
      </div>

      <div className={styles.options}>
        <Typography tag="h6" variant="body">
          Recipient&apos;s email
        </Typography>
        <Input
          name="properties[receipientEmail]"
          value={formDetails.receipientEmail}
          onChange={(e) => {
            return setFormDetails((form) => {
              return { ...form, receipientEmail: e }
            })
          }}
          theme={{
            root: styles.input_box,
          }}
        />
      </div>

      <div className={styles.options}>
        <Typography tag="h6" variant="body">
          Confirm recipient&apos;s email
        </Typography>
        <Input
          name="properties[receipientConfirmEmail]"
          value={formDetails.receipientConfirmEmail}
          onChange={(e) => {
            return setFormDetails((form) => {
              return { ...form, receipientConfirmEmail: e }
            })
          }}
          theme={{
            root: styles.input_box,
          }}
        />
      </div>

      <div className={styles.options}>
        <Typography tag="h6" variant="body">
          Personalised message (optional)
        </Typography>
        <Textarea
          name="properties[personalisedMessage]"
          value={formDetails.personalisedMessage}
          onChange={(e) => {
            return setFormDetails((form) => {
              return { ...form, personalisedMessage: e }
            })
          }}
          wrapperStyle={{
            minHeight: 80,
          }}
          theme={{ root: styles.pMsg }}
        />
        <Typography tag="label" variant="caption">
          Max character count: 1000
        </Typography>
      </div>

      {payment.length > 0 && (
        <div className={styles.options}>
          <Typography tag="h4" variant="pageheading">
            {formDetails.value}
          </Typography>
          <div className={styles.payment}>
            {payment.map((pay) => {
              return (
                <div className={styles.pay} key={pay.id}>
                  <Typography variant="caption">{pay.text}</Typography>
                  <Image data={pay} alt="" />
                </div>
              )
            })}
          </div>
        </div>
      )}

      <AddToCartButton
        lines={[
          {
            quantity: 1,
            merchandiseId: selectedVariant.id,
            attributes: linesToAdd,
          },
        ]}
        analytics={{
          products: [analytics],
          totalValue: analytics?.totalValue,
        }}
        data-test="add-to-cart"
        variant="primary"
        className="h-[45px]">
        <Typography
          tag="span"
          variant="body"
          theme={{ root: 'flex items-center justify-center font-medium text-white' }}>
          Add to Bag
        </Typography>
      </AddToCartButton>
    </div>
  )
}
