import { Typography, Button, Checkbox, CheckboxGroup } from '@overdose/components'
import clsx from 'clsx'

import { mock } from './AccountCommunication.mock'
import styles from './AccountCommunication.module.css'
import { AccountCommunicationProps } from './AccountCommunication.types'

export const AccountCommunication = ({ data = mock.data }: AccountCommunicationProps) => {
  if (!data) {
    return null
  }
  const { isNewsLetter } = data

  return (
    <div className="w-full md:max-w-[678px]">
      <Typography tag="p" variant="displayLarge" theme={{ root: 'mb-1' }}>
        Communication
      </Typography>
      <Typography variant="bodyLarge" tag="p" theme={{ root: clsx('font-[350]', styles.text) }}>
        Welcome to your best hair day ever. Let us know how what you want to hear about. Find out more about how we use
        your information by reading our{' '}
        <Button variant="link" href="/account" theme={{ root: clsx(styles.link, 'underline-offset-2') }}>
          <Typography variant="bodyLarge" tag="span" theme={{ root: clsx('font-[350]', styles.text) }}>
            Privacy Policy
          </Typography>
        </Button>
        .
      </Typography>
      <div className={clsx('my-6 md:my-8 w-full h-px', styles.line)} />
      <form method="post" action="/account/communication">
        <Checkbox
          label="Sign up to the Hairhouse newsletter"
          hint="You will still receive Order Confirmations, Order Dispatch and Shipping notifications if you choose not to receive the Hairhouse newsletter."
          idSuffix="newsletter"
          name="newsletter"
          defaultChecked={!!isNewsLetter}
          theme={{ root: clsx('font-[500] w-full mb-6 md:mb-8 items-start', styles.checkbox) }}
        />
        <div className="mb-6 md:mb-8">
          <Typography tag="p" variant="body" theme={{ root: 'mb-2 font-medium' }}>
            Alert preferences
          </Typography>
          <CheckboxGroup
            name="alertPreferences"
            idSuffix="alertPreferences"
            options={['Email', 'SMS']}
            theme={{ root: clsx('mr-12 font-[350]', styles.chekboxes, styles.checkbox) }}
          />
        </div>
        <Button htmlType="submit" status="primary" theme={{ root: 'w-full md:w-[250px]' }}>
          Save changes
        </Button>
      </form>
    </div>
  )
}
