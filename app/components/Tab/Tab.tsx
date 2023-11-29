import clsx from 'clsx'
import React from 'react'

import { IconDisabled, IconTickWithCircle } from '../Icon'
import styles from './Tab.module.css'
import { TabProps } from './Tab.types'

export const Tab = ({ initialTab, tab, disabled, activeTab, setActiveTab, className = '' }: TabProps) => {
  return (
    <div
      className={`${styles.root} flex items-center justify-center gap-1.5 w-[9.75rem] px-2 pb-4 ${
        activeTab === tab.text ? 'text-black border-b-2 border-solid border-black' : 'text-[#4A4F53] font-[350]'
      }`}>
      {disabled && tab.text !== initialTab ? <IconDisabled /> : <IconTickWithCircle />}
      <button
        disabled={disabled && tab.text !== initialTab}
        className={clsx(`${styles.button} text-xs sm:text-sm`, className)}
        onClick={() => setActiveTab(tab?.text)}>
        {tab.text}
      </button>
    </div>
  )
}
