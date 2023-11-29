import { IconMenu } from '~/components'

export const MobileHeader = ({ isHome, openMenu }: { isHome: boolean; openMenu: () => void }) => {
  return (
    <header
      role="banner"
      className={`${
        isHome
          ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
          : 'bg-contrast/80 text-primary'
      } flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`}>
      <div className="flex items-center justify-start w-full gap-4">
        <button type="button" onClick={openMenu} className="relative flex items-center justify-center w-8 h-8">
          <IconMenu />
        </button>
      </div>
    </header>
  )
}
