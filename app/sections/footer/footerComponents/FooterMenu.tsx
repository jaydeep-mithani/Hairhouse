import { Disclosure } from '@headlessui/react'
import { Typography } from '@overdose/components'
import { IconChevron } from '~/components'
import clsx from 'clsx'
import React, { Suspense } from 'react'

import styles from '../Footer.module.css'
import { FooterMenuProps } from '../Footer.types'
import { FooterLink } from './FooterLink'

export const FooterMenu = ({ footerLinks }: FooterMenuProps) => {
  if (!footerLinks?.length) {
    return null
  }
  return (
    <>
      {footerLinks.map((footerLink) => {
        return (
          <section key={footerLink.id} className={styles.menuColumn}>
            <Disclosure>
              {({ open }) => {
                return (
                  <>
                    <Disclosure.Button className={styles.menuBtn}>
                      <div className={styles.menuBtnBlock}>
                        <Typography variant="body" tag="div" weight="bold">
                          <p className="uppercase">{footerLink?.headingLink?.linkText}</p>
                        </Typography>
                        {footerLink?.links?.length > 0 && (
                          <span className="xl:hidden -translate-y-2">
                            <IconChevron />
                          </span>
                        )}
                      </div>
                    </Disclosure.Button>
                    {footerLink?.links?.length > 0 ? (
                      <div
                        className={`${
                          open ? `max-h-48 h-fit mt-6` : `max-h-0 xl:max-h-fit`
                        } overflow-hidden transition-all duration-300`}>
                        <Suspense data-comment="This suspense fixes a hydration bug in Disclosure.Panel with static prop">
                          <Disclosure.Panel static>
                            <nav className={styles.menuNav}>
                              {footerLink.links.map((link) => {
                                return (
                                  <FooterLink key={link.id} item={link}>
                                    <Typography
                                      tag="span"
                                      variant="body"
                                      theme={{
                                        root: clsx(styles.menuLink, {
                                          [styles.menuLinkRed]: link?.linkText === 'Clearance',
                                        }),
                                      }}>
                                      {link?.linkText}
                                    </Typography>
                                  </FooterLink>
                                )
                              })}
                            </nav>
                          </Disclosure.Panel>
                        </Suspense>
                      </div>
                    ) : null}
                  </>
                )
              }}
            </Disclosure>
          </section>
        )
      })}
    </>
  )
}
