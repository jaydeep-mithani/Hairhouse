import { Disclosure } from '@headlessui/react'
import { Typography, Button } from '@overdose/components'
import { Form } from '@remix-run/react'
import type { MenuItem } from '@shopify/hydrogen/storefront-api-types'
import { IconChevron, IconChevronUp } from '~/components'
import clsx from 'clsx'
import { Suspense, useState } from 'react'

import { FooterHelpBlock } from '../footer/footerComponents/FooterHelpBlock'
import styles from './AccountSidebar.module.css'
import { AccountSidebarProps } from './AccountSidebar.types'

const PATHNAME = '/account'
const PATHNAME_LOGOUT = '/logout'

const HELPCENTER_BOX = {
  html: '<p><strong>NEED ASSISTANCE?</strong></p><p>We’re here to help!<br>Our service team is available to chat Monday to Friday 9am - 5pm.</p><p></p>',
  text: 'NEED ASSISTANCE?\\nWe’re here to help! Our service team is available to chat Monday to Friday 9am - 5pm.\\n',
}

const ASSISTANCE_CTA = [
  {
    buttonText: 'Help Centre',
    ctaType: 'secondary',
    id: 'climsx8v10sqr0b2pu0rw2ygb',
    openInNewWindow: false,
    url: 'help-centre',
    __typename: 'Cta',
  },
]

export const AccountSidebar = ({ menu }: AccountSidebarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  if (!menu) {
    return null
  }

  return (
    <div className="w-full relative mb-0 shrink-0 lg:mb-5 lg:w-64 xl:w-[312px]">
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="absolute top-2 right-3 lg:hidden">
        {isMobileMenuOpen ? <IconChevronUp /> : <IconChevron />}
      </button>
      <div
        className={clsx(styles.sidebarMenu, {
          'h-full overflow-visible': isMobileMenuOpen,
        })}>
        {(menu?.items || []).map((item: MenuItem) => {
          return (
            <section
              key={item?.id}
              className={clsx(styles.menuSection, {
                [styles.menuSectionBtn]: item?.items?.length,
              })}>
              {item?.items?.length ? (
                <Disclosure>
                  {({ open }) => {
                    return (
                      <>
                        <Disclosure.Button>
                          <div className={styles.menuBtnBlock}>
                            {item?.title && (
                              <Typography variant="body" tag="p" weight="bold">
                                {item?.title}
                              </Typography>
                            )}
                            {!!item?.items?.length && <span>{open ? <IconChevronUp /> : <IconChevron />}</span>}
                          </div>
                        </Disclosure.Button>
                        <div
                          className={clsx('overflow-hidden transition-all duration-300', {
                            'max-h-48 h-fit mt-4': open,
                            'max-h-0': !open,
                          })}>
                          <Suspense>
                            <Disclosure.Panel static>
                              <nav className={styles.subMenu}>
                                {item?.items?.map((subItem) => {
                                  return (
                                    <Button
                                      variant="link"
                                      prefetch="intent"
                                      href={PATHNAME + subItem.to}
                                      key={subItem.id}
                                      theme={{ root: clsx('justify-start', styles.subMenuBtnLink) }}>
                                      {subItem?.title && (
                                        <Typography
                                          tag="span"
                                          variant="body"
                                          theme={{ root: styles.subMenuLink }}
                                          key={subItem.id}>
                                          {subItem?.title}
                                        </Typography>
                                      )}
                                    </Button>
                                  )
                                })}
                              </nav>
                            </Disclosure.Panel>
                          </Suspense>
                        </div>
                      </>
                    )
                  }}
                </Disclosure>
              ) : (
                <>
                  {item.to === PATHNAME_LOGOUT && (
                    <Form method="post" action="/account/logout">
                      <button type="submit">
                        {item?.title && (
                          <Typography tag="span" variant="body" weight="bold">
                            {item?.title}
                          </Typography>
                        )}
                      </button>
                    </Form>
                  )}
                  {item?.to !== PATHNAME_LOGOUT && (
                    <Button
                      variant="link"
                      prefetch="intent"
                      href={item?.to === PATHNAME ? PATHNAME : PATHNAME + item.to}
                      theme={{ root: clsx('justify-start', styles.subMenuBtnLink) }}>
                      {item?.title && (
                        <Typography tag="span" variant="body" weight="bold">
                          {item?.title}
                        </Typography>
                      )}
                    </Button>
                  )}
                </>
              )}
            </section>
          )
        })}
      </div>
      <div className="hidden lg:block">
        <FooterHelpBlock isAccount assistanceCtAs={ASSISTANCE_CTA} helpCentreBox={HELPCENTER_BOX} />
      </div>
    </div>
  )
}
