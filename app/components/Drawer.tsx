import { Dialog, Transition } from '@headlessui/react'
import { Typography } from '@overdose/components'
import { IconClose } from '~/components'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

import styles from './Drawer.module.css'

/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */
export function Drawer({
  heading,
  open,
  onClose,
  openFrom = 'right',
  children,
  isMenu = false,
  yScroll = false,
}: {
  heading?: string | React.ReactNode
  open: boolean
  onClose: () => void
  openFrom: 'right' | 'left'
  children: React.ReactNode
  isMenu?: boolean
  yScroll?: boolean
}) {
  const offScreen = {
    right: 'translate-x-full',
    left: '-translate-x-full',
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className={clsx('fixed inset-0', styles.cover)} />
        </Transition.Child>

        <div className="fixed inset-0">
          {isMenu && <div className={styles.menuTopLinks} />}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={clsx('fixed inset-y-0 flex max-w-full', {
                [styles.scroll]: isMenu,
                'right-0': openFrom === 'right',
              })}>
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom={offScreen[openFrom]}
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo={offScreen[openFrom]}>
                <Dialog.Panel
                  className={clsx(
                    'w-screen text-left align-middle transition-all transform shadow-xl',
                    styles.wrapper,
                    {
                      'min-h-screen h-max overflow-y-scroll': isMenu || yScroll,
                      [styles.menuDrawer]: isMenu,
                      'h-screen-dynamic': !isMenu,
                    },
                  )}>
                  <div
                    className={clsx('sticky flex items-center', {
                      'justify-between': heading && heading !== 'Cart',
                      'justify-end': !heading,
                      [styles.menuDrawerHeader]: isMenu,
                      'bg-white z-20': heading === 'Login',
                      'top-0 pt-4 lg:pt-[28px] sm:pt-6 px-4 sm:px-6 justify-end': heading === 'Cart',
                      'top-0 pt-[13px] sm:pt-6 px-4 sm:px-6 mb-2 sm:mb-4': !isMenu && heading !== 'Cart',
                    })}>
                    {heading !== null &&
                      heading !== 'Cart' &&
                      (typeof heading === 'string' ? (
                        <Dialog.Title>
                          <div className={styles.pageTitle}>
                            <Typography tag="span" variant="pageheading">
                              {heading}
                            </Typography>
                          </div>
                        </Dialog.Title>
                      ) : (
                        <div>{heading}</div>
                      ))}
                    <button
                      type="button"
                      className="transition text-primary hover:text-primary/50"
                      onClick={onClose}
                      data-test="close-cart">
                      <IconClose aria-label="Close panel" className="w-7 h-7" />
                    </button>
                  </div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

/* Use for associating arialabelledby with the title */
Drawer.Title = Dialog.Title

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault)

  function openDrawer() {
    setIsOpen(true)
  }

  function closeDrawer() {
    setIsOpen(false)
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  }
}
