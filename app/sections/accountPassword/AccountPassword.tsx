import { Typography, Button, InputPassword } from '@overdose/components'
import clsx from 'clsx'
import { useState } from 'react'

import styles from './AccountPassword.module.css'
import { AccountPasswordProps } from './AccountPassword.types'

export const AccountPassword = ({ data, fetcher }: AccountPasswordProps) => {
  const [isValidcurrentPassword, setisValidCurrentPassword] = useState(true)
  const [isValidnewPassword, setisValidNewPassword] = useState(true)
  const [isValidnewPassword2, setisValidNewPassword2] = useState(true)
  const [newPassword, setNewPassword] = useState('')
  const [newPassword2, setNewPassword2] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')

  if (!data) {
    return null
  }

  const handleCurrentPassword = (password: string) => {
    setCurrentPassword(password)
    if (!password || password === '') {
      setisValidCurrentPassword(false)
    } else {
      setisValidCurrentPassword(true)
    }
  }

  const handleNewPassword = (password: string) => {
    setNewPassword(password)
    if (password.length < 8) {
      setisValidNewPassword(false)
    } else {
      setisValidNewPassword(true)
    }
  }

  const handleNewPassword2 = (password: string) => {
    setNewPassword2(password)
    if (newPassword !== password) {
      setisValidNewPassword2(false)
    } else {
      setisValidNewPassword2(true)
    }
  }

  const renderForm = () => {
    return (
      <>
        <div className="mb-6 md:mb-8">
          <InputPassword
            name="currentPassword"
            label="Current password"
            theme={{ root: styles.input }}
            onChange={handleCurrentPassword}
          />
          {!isValidcurrentPassword && (
            <Typography tag="p" variant="caption" theme={{ root: clsx(styles.error, 'ml-3') }}>
              Please enter your current password before entering a new password.
            </Typography>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <div>
              <InputPassword
                name="newPassword"
                label="New password"
                theme={{ root: styles.input }}
                onChange={handleNewPassword}
              />
              {!isValidnewPassword && (
                <Typography tag="p" variant="caption" theme={{ root: clsx(styles.error, 'ml-3') }}>
                  Passwords must be at least 8 characters.
                </Typography>
              )}
            </div>
            <div>
              <InputPassword
                name="newPassword2"
                label="Confirm new password"
                theme={{ root: styles.input }}
                onChange={handleNewPassword2}
              />
              {!isValidnewPassword2 && (
                <Typography tag="p" variant="caption" theme={{ root: clsx(styles.error, 'ml-3') }}>
                  New passwords must match.
                </Typography>
              )}
            </div>
          </div>
        </div>
        <Button
          htmlType="submit"
          status="primary"
          theme={{ root: 'w-full md:max-w-[250px]' }}
          disabled={
            (fetcher && fetcher.state === 'submitting') ||
            !isValidcurrentPassword ||
            !isValidnewPassword ||
            !isValidnewPassword2 ||
            !newPassword ||
            !newPassword2 ||
            !currentPassword
          }>
          Update password
        </Button>
      </>
    )
  }

  return (
    <div className="mb-[64px] max-w-[678px] mt-8 lg:mt-0 ">
      <Typography tag="p" variant="displayLarge" theme={{ root: 'mb-6 md:mb-10' }}>
        Update password
      </Typography>
      {fetcher ? (
        <fetcher.Form method="post" action="/account/edit">
          {renderForm()}
        </fetcher.Form>
      ) : (
        renderForm()
      )}
    </div>
  )
}
