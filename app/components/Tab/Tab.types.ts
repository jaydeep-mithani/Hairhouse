import { Dispatch, SetStateAction } from 'react'

export type TabProps = {
  initialTab?: string
  tab: { id: number; text: string }
  disabled: boolean
  activeTab: string
  setActiveTab: Dispatch<SetStateAction<string>>
  className?: string
}
