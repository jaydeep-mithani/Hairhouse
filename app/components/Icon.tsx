import { Typography } from '@overdose/components'
import clsx from 'clsx'

type IconProps = JSX.IntrinsicElements['svg'] & {
  direction?: 'up' | 'right' | 'down' | 'left'
}

export interface IIcon {
  icon: string | undefined | null
  className?: string
  width?: string
  height?: string
  title?: string
  viewBox?: string
}

function Icon({ children, className, fill = 'currentColor', stroke, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...props}
      fill={fill}
      stroke={stroke}
      className={clsx('w-5 h-5', className)}>
      {children}
    </svg>
  )
}

// icons from project layout:
export function Logo({ width = '215', height = '36' }: React.ComponentProps<typeof Icon>) {
  return (
    <svg width={width} height={height} viewBox="0 0 215 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.2776 20.2166H44.6831L41.9609 13.4111L39.2776 20.2166Z" fill="black" />
      <path
        d="M81.0051 11.5831C80.6551 11.4275 80.2662 11.2719 79.7996 11.2331C79.3329 11.1553 78.9051 11.1553 78.4774 11.1553H75.3274V16.0941H78.1663C78.594 16.0941 79.0607 16.0941 79.5274 16.0552C80.0329 16.0164 80.4607 15.9386 80.8496 15.783C81.2385 15.6275 81.5496 15.3941 81.8218 15.0441C82.094 14.733 82.2107 14.2664 82.2107 13.6442C82.2107 13.0997 82.094 12.633 81.8607 12.3219C81.6273 12.0108 81.3551 11.7386 81.0051 11.5831Z"
        fill="black"
      />
      <path
        d="M134.943 12.9443C134.36 12.322 133.621 11.8165 132.766 11.4665C131.91 11.1165 130.977 10.9609 129.966 10.9609C128.916 10.9609 127.982 11.1165 127.166 11.4665C126.31 11.8165 125.61 12.322 124.988 12.9443C124.405 13.5665 123.938 14.3054 123.588 15.1998C123.277 16.0554 123.121 16.9887 123.121 17.9998C123.121 19.0109 123.277 19.9831 123.588 20.8387C123.899 21.6942 124.366 22.4331 124.988 23.0553C125.571 23.6775 126.31 24.1831 127.166 24.5331C128.021 24.8831 128.955 25.0775 129.966 25.0775C131.016 25.0775 131.949 24.922 132.766 24.5331C133.621 24.1831 134.321 23.6775 134.943 23.0553C135.527 22.4331 135.993 21.6942 136.343 20.8387C136.655 19.9831 136.81 19.0498 136.81 17.9998C136.81 16.9887 136.655 16.0554 136.343 15.1998C135.993 14.3054 135.527 13.5665 134.943 12.9443Z"
        fill="black"
      />
      <path
        d="M0 0.5V35.4998H214.315V0.5H0ZM25.7054 28.9276H20.8443V19.4777H11.4333V28.9276H6.57218V7.0333H11.4333V15.1999H20.8443V7.0333H25.7054V28.9276ZM48.2219 28.9276L46.3164 24.2999H37.7609L35.9331 28.9276H30.6054L40.0942 7.0333H44.0997L53.6663 28.9276H48.2219ZM63.2718 28.9276H58.4107V7.0333H63.2718V28.9276ZM82.2884 28.9276L77.6995 20.1777H75.2884V28.9276H70.4273V7.0333H78.9439C80.0717 7.0333 81.1217 7.14996 82.1328 7.3444C83.1439 7.57773 83.9995 7.92773 84.7772 8.43328C85.5161 8.93883 86.1383 9.59994 86.5661 10.4555C86.9939 11.311 87.2272 12.361 87.2272 13.6444C87.2272 15.1999 86.8383 16.5221 86.0217 17.5721C85.205 18.661 84.0384 19.3221 82.4828 19.6332L88.0828 28.8887H82.2884V28.9276ZM112.777 28.9276H107.916V19.4777H98.5049V28.9276H93.6439V7.0333H98.5049V15.1999H107.916V7.0333H112.777V28.9276ZM140.932 22.7443C140.349 24.1832 139.532 25.3887 138.482 26.3609C137.432 27.372 136.188 28.1109 134.71 28.6554C133.232 29.1998 131.677 29.472 129.966 29.472C128.255 29.472 126.66 29.1998 125.221 28.6554C123.783 28.1109 122.538 27.3332 121.449 26.3609C120.399 25.3498 119.583 24.1443 118.999 22.7443C118.416 21.3054 118.105 19.7499 118.105 17.9999C118.105 16.2499 118.416 14.6555 118.999 13.2555C119.583 11.8166 120.399 10.611 121.449 9.63883C122.499 8.62773 123.744 7.88884 125.221 7.3444C126.699 6.79996 128.255 6.52774 129.966 6.52774C131.677 6.52774 133.271 6.79996 134.71 7.3444C136.149 7.88884 137.394 8.66661 138.482 9.63883C139.532 10.6499 140.349 11.8555 140.932 13.2555C141.516 14.6944 141.827 16.2499 141.827 17.9999C141.827 19.7499 141.516 21.3443 140.932 22.7443ZM165.549 20.4888C165.549 21.7721 165.354 22.9776 164.966 24.0665C164.577 25.1554 163.993 26.0887 163.216 26.9054C162.438 27.722 161.466 28.3443 160.299 28.772C159.132 29.2387 157.81 29.4331 156.293 29.4331C154.777 29.4331 153.416 29.1998 152.249 28.772C151.082 28.3054 150.11 27.6832 149.332 26.9054C148.555 26.0887 147.971 25.1554 147.582 24.0665C147.194 22.9776 146.999 21.7721 146.999 20.4888V7.0333H151.86V20.2943C151.86 20.9554 151.977 21.6165 152.171 22.161C152.405 22.7443 152.677 23.2499 153.105 23.6776C153.493 24.1054 153.96 24.4165 154.505 24.6498C155.049 24.8832 155.632 24.9998 156.293 24.9998C156.916 24.9998 157.538 24.8832 158.043 24.6498C158.588 24.4165 159.055 24.0665 159.443 23.6776C159.832 23.2499 160.143 22.7443 160.377 22.161C160.61 21.5776 160.688 20.9554 160.688 20.2943V7.0333H165.549V20.4888ZM178.888 29.472C173.793 29.472 170.41 26.4387 170.41 21.6943H175.116C175.116 24.0276 176.71 25.5054 179.199 25.5054C181.182 25.5054 182.427 24.1054 182.427 22.8999C182.427 21.111 180.521 20.5277 178.616 19.8277C174.688 18.3888 170.954 17.1443 170.954 12.6333C170.954 9.44439 174.104 6.48885 178.966 6.48885C183.982 6.48885 186.899 9.52217 186.899 13.4499H182.232C182.232 11.4666 180.988 10.2611 178.966 10.2611C177.06 10.2611 176.01 11.4666 176.01 12.5166C176.01 14.0721 177.76 14.8499 179.471 15.4721C183.088 16.6777 187.482 18.1554 187.482 22.5499C187.443 26.4776 184.215 29.472 178.888 29.472ZM207.782 28.9276H192.304V7.0333H207.238V11.4666H197.165V15.5499H206.693V19.9832H197.165V24.4165H207.821V28.9276H207.782Z"
        fill="black"
      />
    </svg>
  )
}

export function IconClose(props: IconProps) {
  return (
    <Icon {...props} width={30} height={30} viewBox="0 0 30 30" fill="none" stroke={props.stroke || 'currentColor'}>
      <title>Close</title>
      <path d="M22.5 7.50079L7.5 22.5008" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 7.50079L22.5 22.5008" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  )
}

export function CloseWithCircle() {
  return (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8125 8.1875L8.1875 18.8125" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.1875 8.1875L18.8125 18.8125" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="13.5" cy="13.5" r="13" stroke="black" />
    </svg>
  )
}

export function IconChevron() {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12.1617L16 20.1617L24 12.1617" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconChevronUp({ width = '32', height = '32' }: React.ComponentProps<typeof Icon>) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 20L16 12L8 20" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconChevronRight({ width = '20', height = '20' }: React.ComponentProps<typeof Icon>) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 15L12.5 10L7.5 5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconChevronLeft({ width = '20', height = '20' }: React.ComponentProps<typeof Icon>) {
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 15L8 10L13 5" stroke="black" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="round" />
    </svg>
  )
}

export function IconCheck({
  stroke = 'currentColor',
  width = '24',
  height = '25',
  ...props
}: React.ComponentProps<typeof Icon>) {
  return (
    <Icon {...props} width={width} height={height} viewBox="0 0 24 25" fill="none" stroke={stroke}>
      <title>Check</title>
      <path d="M20 6.5L9 17.5L4 12.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
  )
}

export function IconBreadCrumb() {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12.5L10 8.5L6 4.5" stroke="#4A4F53" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconPinMap({ width = '40', height = '40' }: React.ComponentProps<typeof Icon>) {
  return (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 38.3334C20 38.3334 35 28.3334 35 16.6667C35 12.6885 33.4196 8.87319 30.6066 6.06015C27.7936 3.2471 23.9782 1.66675 20 1.66675C16.0218 1.66675 12.2064 3.2471 9.3934 6.06015C6.58035 8.87319 5 12.6885 5 16.6667C5 28.3334 20 38.3334 20 38.3334ZM25 16.6667C25 19.4282 22.7614 21.6667 20 21.6667C17.2386 21.6667 15 19.4282 15 16.6667C15 13.9053 17.2386 11.6667 20 11.6667C22.7614 11.6667 25 13.9053 25 16.6667Z"
        fill="black"
      />
      <path
        d="M20 38.3334L19.7226 38.7494C19.8906 38.8614 20.1094 38.8614 20.2774 38.7494L20 38.3334ZM30.6066 6.06015L30.253 6.4137L30.6066 6.06015ZM9.3934 6.06015L9.74695 6.4137L9.3934 6.06015ZM34.5 16.6667C34.5 22.2991 30.8671 27.5939 27.137 31.5312C25.2822 33.4891 23.4257 35.0879 22.0323 36.1975C21.336 36.7519 20.7564 37.1834 20.3518 37.4756C20.1495 37.6217 19.9911 37.7329 19.8838 37.8072C19.8301 37.8444 19.7893 37.8723 19.7621 37.8908C19.7485 37.9 19.7384 37.9068 19.7318 37.9113C19.7284 37.9135 19.726 37.9151 19.7245 37.9161C19.7237 37.9167 19.7232 37.917 19.7229 37.9172C19.7227 37.9173 19.7227 37.9174 19.7226 37.9174C19.7226 37.9174 19.7226 37.9174 20 38.3334C20.2774 38.7494 20.2775 38.7493 20.2777 38.7492C20.2779 38.7491 20.2782 38.7489 20.2785 38.7487C20.2791 38.7483 20.2799 38.7477 20.281 38.747C20.2831 38.7456 20.2861 38.7436 20.29 38.741C20.2978 38.7357 20.3092 38.728 20.324 38.718C20.3536 38.6979 20.3969 38.6682 20.4531 38.6293C20.5656 38.5514 20.7294 38.4364 20.9373 38.2863C21.353 37.986 21.9453 37.5451 22.6552 36.9798C24.0743 35.8497 25.9678 34.2194 27.863 32.219C31.6329 28.2396 35.5 22.701 35.5 16.6667H34.5ZM30.253 6.4137C32.9723 9.13298 34.5 12.8211 34.5 16.6667H35.5C35.5 12.5559 33.867 8.61341 30.9602 5.70659L30.253 6.4137ZM20 2.16675C23.8456 2.16675 27.5338 3.69442 30.253 6.4137L30.9602 5.70659C28.0533 2.79978 24.1109 1.16675 20 1.16675V2.16675ZM9.74695 6.4137C12.4662 3.69442 16.1544 2.16675 20 2.16675V1.16675C15.8891 1.16675 11.9467 2.79978 9.03984 5.70659L9.74695 6.4137ZM5.5 16.6667C5.5 12.8211 7.02767 9.13298 9.74695 6.4137L9.03984 5.70659C6.13303 8.61341 4.5 12.5559 4.5 16.6667H5.5ZM20 38.3334C20.2774 37.9174 20.2774 37.9174 20.2774 37.9174C20.2773 37.9174 20.2773 37.9173 20.2771 37.9172C20.2768 37.917 20.2763 37.9167 20.2755 37.9161C20.274 37.9151 20.2716 37.9135 20.2682 37.9113C20.2616 37.9068 20.2515 37.9 20.2379 37.8908C20.2107 37.8723 20.1699 37.8444 20.1162 37.8072C20.0089 37.7329 19.8505 37.6217 19.6482 37.4756C19.2436 37.1834 18.664 36.7519 17.9677 36.1975C16.5743 35.0879 14.7178 33.4891 12.863 31.5312C9.13287 27.5939 5.5 22.2991 5.5 16.6667H4.5C4.5 22.701 8.36713 28.2396 12.137 32.219C14.0322 34.2194 15.9257 35.8497 17.3448 36.9798C18.0547 37.5451 18.647 37.986 19.0627 38.2863C19.2706 38.4364 19.4344 38.5514 19.5469 38.6293C19.6031 38.6682 19.6464 38.6979 19.676 38.718C19.6908 38.728 19.7022 38.7357 19.71 38.741C19.7139 38.7436 19.7169 38.7456 19.719 38.747C19.7201 38.7477 19.7209 38.7483 19.7215 38.7487C19.7218 38.7489 19.7221 38.7491 19.7223 38.7492C19.7225 38.7493 19.7226 38.7494 20 38.3334ZM20 22.1667C23.0376 22.1667 25.5 19.7043 25.5 16.6667H24.5C24.5 19.152 22.4853 21.1667 20 21.1667V22.1667ZM14.5 16.6667C14.5 19.7043 16.9624 22.1667 20 22.1667V21.1667C17.5147 21.1667 15.5 19.152 15.5 16.6667H14.5ZM20 11.1667C16.9624 11.1667 14.5 13.6292 14.5 16.6667H15.5C15.5 14.1815 17.5147 12.1667 20 12.1667V11.1667ZM25.5 16.6667C25.5 13.6292 23.0376 11.1667 20 11.1667V12.1667C22.4853 12.1667 24.5 14.1815 24.5 16.6667H25.5Z"
        fill="black"
      />
    </svg>
  )
}

export function IconRewardsTag({ width = '24', height = '24' }: React.ComponentProps<typeof Icon>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.59 13.41L13.42 20.58C13.2343 20.766 13.0137 20.9135 12.7709 21.0141C12.5281 21.1148 12.2678 21.1666 12.005 21.1666C11.7422 21.1666 11.4819 21.1148 11.2391 21.0141C10.9963 20.9135 10.7757 20.766 10.59 20.58L2 12V2H12L20.59 10.59C20.9625 10.9647 21.1716 11.4716 21.1716 12C21.1716 12.5284 20.9625 13.0353 20.59 13.41V13.41Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 7H7.01" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconArrowInCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 16L16 12L12 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 12H16" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const IconClock = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_15592_3616)">
        <path
          d="M7.99967 14.6666C11.6816 14.6666 14.6663 11.6818 14.6663 7.99992C14.6663 4.31802 11.6816 1.33325 7.99967 1.33325C4.31778 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.31778 14.6666 7.99967 14.6666Z"
          stroke="#4A4F53"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 4V8L10.6667 9.33333" stroke="#4A4F53" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_15592_3616">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const IconEmptyOrders = ({ width = '49', height = '48' }: React.ComponentProps<typeof Icon>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.5 4H12.5C11.4391 4 10.4217 4.42143 9.67157 5.17157C8.92143 5.92172 8.5 6.93913 8.5 8V40C8.5 41.0609 8.92143 42.0783 9.67157 42.8284C10.4217 43.5786 11.4391 44 12.5 44H36.5C37.5609 44 38.5783 43.5786 39.3284 42.8284C40.0786 42.0783 40.5 41.0609 40.5 40V18L26.5 4Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M26.5 4V18H40.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const IconEmptyWishlist = ({ width = '49', height = '48' }: React.ComponentProps<typeof Icon>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M42.1802 9.22023C41.1587 8.19824 39.9459 7.38753 38.6109 6.8344C37.276 6.28128 35.8452 5.99658 34.4002 5.99658C32.9553 5.99658 31.5244 6.28128 30.1895 6.8344C28.8546 7.38753 27.6418 8.19824 26.6202 9.22023L24.5002 11.3402L22.3802 9.22023C20.3169 7.15685 17.5183 5.99765 14.6002 5.99765C11.6822 5.99765 8.88362 7.15685 6.82024 9.22023C4.75685 11.2836 3.59766 14.0822 3.59766 17.0002C3.59766 19.9183 4.75685 22.7168 6.82024 24.7802L8.94024 26.9002L24.5002 42.4602L40.0602 26.9002L42.1802 24.7802C43.2022 23.7587 44.0129 22.5459 44.5661 21.2109C45.1192 19.876 45.4039 18.4452 45.4039 17.0002C45.4039 15.5553 45.1192 14.1244 44.5661 12.7895C44.0129 11.4546 43.2022 10.2417 42.1802 9.22023V9.22023Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconArrowLeft({ width = '16', height = '16' }: React.ComponentProps<typeof Icon>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconArrowRight({ width = '32', height = '33' }: React.ComponentProps<typeof Icon>) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const IconCalendar = ({ width = '19', height = '20' }: React.ComponentProps<typeof Icon>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.0417 3.66663H3.95833C3.08388 3.66663 2.375 4.37551 2.375 5.24996V16.3333C2.375 17.2077 3.08388 17.9166 3.95833 17.9166H15.0417C15.9161 17.9166 16.625 17.2077 16.625 16.3333V5.24996C16.625 4.37551 15.9161 3.66663 15.0417 3.66663Z"
        stroke="#737373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.668 2.08337V5.25004" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.33203 2.08337V5.25004" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.375 8.41663H16.625" stroke="#737373" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const IconVideoPlay = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.16602 2.5L15.8327 10L4.16602 17.5V2.5Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconVideoPause = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 28H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1zm-5-2h4V6H8v20zM25 28h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1zm-5-2h4V6h-4v20z" />
    </svg>
  )
}

export const IconSearch = ({ width = '32', height = '32' }: React.ComponentProps<typeof Icon>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.6665 14.861C6.66591 10.9528 9.42618 7.58843 13.2592 6.82543C17.0922 6.06244 20.9304 8.11335 22.4265 11.7239C23.9226 15.3344 22.6599 19.499 19.4105 21.6707C16.1612 23.8423 11.8303 23.4163 9.0665 20.653C7.53001 19.1171 6.66669 17.0336 6.6665 14.861Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20.6519 20.6543L25.3332 25.3356" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const IconAlertCircle = ({ width = '24', height = '24' }: React.ComponentProps<typeof Icon>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 8V12" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 16H12.01" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const IconHeart = ({ width = '36', height = '36' }: React.ComponentProps<typeof Icon>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.9995 28.4866L13.615 23.9866L9.26505 19.4866C6.91165 16.9996 6.91165 13.1071 9.26505 10.6201C10.4174 9.51262 11.9782 8.93387 13.5741 9.02234C15.1699 9.11081 16.6572 9.85854 17.68 11.0866L17.9995 11.4001L18.316 11.0731C19.3389 9.84504 20.8262 9.09731 22.422 9.00884C24.0179 8.92037 25.5787 9.49912 26.731 10.6066C29.0844 13.0936 29.0844 16.9861 26.731 19.4731L22.381 23.9731L17.9995 28.4866Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconBag = ({ width = '32', height = '32' }: React.ComponentProps<typeof Icon>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66697 12.4C6.64917 11.0932 7.69349 10.019 9.0003 10H23.0003C24.3071 10.019 25.3514 11.0932 25.3336 12.4V23.2C25.37 25.814 23.2809 27.9627 20.667 28H11.3336C8.71969 27.9627 6.63063 25.814 6.66697 23.2V12.4Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6668 13.6V8.8C20.7031 6.18604 18.6141 4.03729 16.0001 4C13.3862 4.03729 11.2971 6.18604 11.3335 8.8V13.6"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const IconAccount = ({ width = '30', height = '30' }: React.ComponentProps<typeof Icon>) => {
  return (
    <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 11.25C20 14.0114 17.7614 16.25 15 16.25C12.2386 16.25 10 14.0114 10 11.25C10 8.48858 12.2386 6.25 15 6.25C16.3261 6.25 17.5979 6.77678 18.5355 7.71447C19.4732 8.65215 20 9.92392 20 11.25Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.25 23.7497C11.6098 20.4259 18.3902 20.4259 23.75 23.7497" stroke="black" strokeLinecap="round" />
    </svg>
  )
}

export function IconMenu({ width = '23', height = '16' }: React.ComponentProps<typeof Icon>) {
  return (
    <svg width={width} height={height} viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 7.5C0.723858 7.5 0.5 7.72386 0.5 8C0.5 8.27614 0.723858 8.5 1 8.5V7.5ZM22 8.5C22.2761 8.5 22.5 8.27614 22.5 8C22.5 7.72386 22.2761 7.5 22 7.5V8.5ZM1 14.5C0.723858 14.5 0.5 14.7239 0.5 15C0.5 15.2761 0.723858 15.5 1 15.5V14.5ZM22 15.5C22.2761 15.5 22.5 15.2761 22.5 15C22.5 14.7239 22.2761 14.5 22 14.5V15.5ZM1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5V0.5ZM22 1.5C22.2761 1.5 22.5 1.27614 22.5 1C22.5 0.723858 22.2761 0.5 22 0.5V1.5ZM1 8.5H22V7.5H1V8.5ZM1 15.5H22V14.5H1V15.5ZM1 1.5H22V0.5H1V1.5Z"
        fill="black"
      />
    </svg>
  )
}

// default icons:
export function IconArrow({ direction = 'right' }: IconProps) {
  let rotate

  switch (direction) {
    case 'right':
      rotate = 'rotate-0'
      break
    case 'left':
      rotate = 'rotate-180'
      break
    case 'up':
      rotate = '-rotate-90'
      break
    case 'down':
      rotate = 'rotate-90'
      break
    default:
      rotate = 'rotate-0'
  }

  return (
    <Icon className={`w-5 h-5 ${rotate}`}>
      <title>Arrow</title>
      <path d="M7 3L14 10L7 17" strokeWidth="1.25" />
    </Icon>
  )
}

export function IconCaret({ direction = 'down', stroke = 'currentColor', ...props }: IconProps) {
  let rotate

  switch (direction) {
    case 'down':
      rotate = 'rotate-0'
      break
    case 'up':
      rotate = 'rotate-180'
      break
    case 'left':
      rotate = '-rotate-90'
      break
    case 'right':
      rotate = 'rotate-90'
      break
    default:
      rotate = 'rotate-0'
  }

  return (
    <Icon {...props} className={`w-8 h-8 transition ${rotate}`} fill="transparent" stroke={stroke}>
      <title>Caret</title>
      <path d="M14 8L10 12L6 8" strokeWidth="1.25" />
    </Icon>
  )
}

export function IconSelect(props: IconProps) {
  return (
    <Icon {...props}>
      <title>Select</title>
      <path d="M7 8.5L10 6.5L13 8.5" strokeWidth="1.25" />
      <path d="M13 11.5L10 13.5L7 11.5" strokeWidth="1.25" />
    </Icon>
  )
}

export function IconHelp(props: IconProps) {
  return (
    <Icon {...props}>
      <title>Help</title>
      <path d="M3.375 10a6.625 6.625 0 1 1 13.25 0 6.625 6.625 0 0 1-13.25 0ZM10 2.125a7.875 7.875 0 1 0 0 15.75 7.875 7.875 0 0 0 0-15.75Zm.699 10.507H9.236V14h1.463v-1.368ZM7.675 7.576A3.256 3.256 0 0 0 7.5 8.67h1.245c0-.496.105-.89.316-1.182.218-.299.553-.448 1.005-.448a1 1 0 0 1 .327.065c.124.044.24.113.35.208.108.095.2.223.272.383.08.154.12.34.12.558a1.3 1.3 0 0 1-.076.471c-.044.131-.11.252-.197.361-.08.102-.174.197-.283.285-.102.087-.212.182-.328.284a3.157 3.157 0 0 0-.382.383c-.102.124-.19.27-.262.438a2.476 2.476 0 0 0-.164.591 6.333 6.333 0 0 0-.043.81h1.179c0-.263.021-.485.065-.668a1.65 1.65 0 0 1 .207-.47c.088-.139.19-.263.306-.372.117-.11.244-.223.382-.34l.35-.306c.116-.11.218-.23.305-.361.095-.139.168-.3.219-.482.058-.19.087-.412.087-.667 0-.35-.062-.664-.186-.942a1.881 1.881 0 0 0-.513-.689 2.07 2.07 0 0 0-.753-.427A2.721 2.721 0 0 0 10.12 6c-.4 0-.764.066-1.092.197a2.36 2.36 0 0 0-.83.536c-.225.234-.4.515-.523.843Z" />
    </Icon>
  )
}

export function IconXMark({ stroke = 'currentColor', ...props }: React.ComponentProps<typeof Icon>) {
  return (
    <Icon {...props} fill="transparent" stroke={stroke}>
      <title>Delete</title>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </Icon>
  )
}

export function IconRemove(props: IconProps) {
  return (
    <Icon {...props} fill="transparent" stroke={props.stroke || 'currentColor'}>
      <title>Remove</title>
      <path d="M4 6H16" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 9V14" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 6L6 17H14L14.5 6" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 6L8 5C8 4 8.75 3 10 3C11.25 3 12 4 12 5V6" strokeWidth="1.25" />
    </Icon>
  )
}

export function IconFilters(props: IconProps) {
  return (
    <Icon {...props} fill="transparent" stroke={props.stroke || 'currentColor'}>
      <title>Filters</title>
      <circle cx="4.5" cy="6.5" r="2" />
      <line x1="6" y1="6.5" x2="14" y2="6.5" />
      <line x1="4.37114e-08" y1="6.5" x2="3" y2="6.5" />
      <line x1="4.37114e-08" y1="13.5" x2="8" y2="13.5" />
      <line x1="11" y1="13.5" x2="14" y2="13.5" />
      <circle cx="9.5" cy="13.5" r="2" />
    </Icon>
  )
}

export function ChevronRight({ color = 'black', ...props }: IconProps) {
  return (
    <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.75 26.5L14.25 14L1.75 1.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronLeft({ ...props }: IconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20 24L12 16L20 8" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronUp(props: IconProps) {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17 9L9 1L1 9" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronDown(props: IconProps) {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1L9 9L17 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Bullet(props: IconProps) {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="3" cy="3" r="3" fill="#DFB7B7" />
    </svg>
  )
}

export function IconApplyPromoCode(props: IconProps) {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19.59 12.41L12.42 19.58C12.2343 19.766 12.0137 19.9135 11.7709 20.0141C11.5281 20.1148 11.2678 20.1666 11.005 20.1666C10.7422 20.1666 10.4819 20.1148 10.2391 20.0141C9.99632 19.9135 9.77575 19.766 9.59 19.58L1 11V1H11L19.59 9.59C19.9625 9.96473 20.1716 10.4716 20.1716 11C20.1716 11.5284 19.9625 12.0353 19.59 12.41V12.41Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconRating() {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.08762 11.9765C2.9914 11.9765 2.89453 11.9489 2.81281 11.8932C2.64937 11.7829 2.58017 11.5868 2.64344 11.4079L3.99641 7.53102L0.43901 5.1272C0.274914 5.0163 0.206375 4.82022 0.269641 4.64129C0.331589 4.46237 0.510843 4.34166 0.713163 4.34166H5.1095L6.46247 0.466627C6.52508 0.287704 6.70433 0.166992 6.90665 0.166992C7.10963 0.166992 7.28822 0.287704 7.35083 0.466627L8.70314 4.34166H13.0995C13.3018 4.34166 13.4811 4.46237 13.5437 4.64129C13.6063 4.82022 13.5377 5.0163 13.3743 5.1272L9.81689 7.53102L11.1699 11.4079C11.2318 11.5868 11.1639 11.7829 10.9998 11.8932C10.8364 12.0047 10.6156 12.0035 10.4509 11.8932L6.90665 9.49795L3.36177 11.8932C3.28005 11.9483 3.18384 11.9765 3.08762 11.9765Z"
        fill="black"
      />
    </svg>
  )
}

export function IconWishList(props: IconProps) {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill={props?.fill} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.33432 15L5.18432 11.767L2.0591 8.53403C0.368321 6.74726 0.368321 3.95074 2.0591 2.16397C2.887 1.36829 4.00836 0.95249 5.15487 1.01605C6.30138 1.07961 7.3699 1.61681 8.10478 2.49912L8.33432 2.72435L8.56171 2.48942C9.29659 1.60711 10.3651 1.06991 11.5116 1.00635C12.6581 0.942791 13.7795 1.35859 14.6074 2.15427C16.2982 3.94104 16.2982 6.73756 14.6074 8.52433L11.4822 11.7573L8.33432 15Z"
        stroke={props?.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconTickWithCircle() {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 4.5L6.41671 9.08333L4.33337 7" stroke="#1EAB31" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="1.16669" y="0.5" width="13" height="13" rx="6.5" stroke="#1EAB31" />
    </svg>
  )
}

export function IconHome() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 22V12H15V22" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconScissors() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19.9991 4L8.11914 15.88" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.4707 14.48L20.0007 20" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.11914 8.12012L11.9991 12.0001" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconUser() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function QuickShip() {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12.6875" cy="11.8125" r="6.5625" stroke="black" />
      <path d="M12.6875 11.8125L14.875 8.3125" stroke="black" strokeLinecap="round" />
      <path d="M11.375 2.625L14 2.625" stroke="black" strokeLinecap="round" />
      <path d="M2.625 6.125L5.25 6.125" stroke="black" strokeLinecap="round" />
      <path d="M2.625 16.625L5.25 16.625" stroke="black" strokeLinecap="round" />
      <path d="M0.875 11.375L3.5 11.375" stroke="black" strokeLinecap="round" />
      <path d="M18.375 7.3623L19.6124 6.12487" stroke="black" strokeLinecap="round" />
    </svg>
  )
}

export function IconDisabled() {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.33398 0C3.47641 0 0.333984 3.14243 0.333984 7C0.333984 10.8576 3.47641 14 7.33398 14C11.1916 14 14.334 10.8576 14.334 7C14.334 3.14243 11.1916 0 7.33398 0ZM7.33398 1.07692C10.611 1.07692 13.2571 3.72296 13.2571 7C13.2571 8.44291 12.7396 9.76382 11.8857 10.7903L3.54372 2.44832C4.57016 1.59435 5.89108 1.07692 7.33398 1.07692ZM2.7823 3.20974L11.1242 11.5517C10.0978 12.4057 8.77689 12.9231 7.33398 12.9231C4.05694 12.9231 1.41091 10.277 1.41091 7C1.41091 5.55709 1.92834 4.23618 2.7823 3.20974Z"
        fill="#BDBFC3"
      />
    </svg>
  )
}

export function IconFacebook(props: IconProps) {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18 2.88788H15C13.6739 2.88788 12.4021 3.41466 11.4645 4.35234C10.5268 5.29003 10 6.5618 10 7.88788V10.8879H7V14.8879H10V22.8879H14V14.8879H17L18 10.8879H14V7.88788C14 7.62266 14.1054 7.36831 14.2929 7.18077C14.4804 6.99324 14.7348 6.88788 15 6.88788H18V2.88788Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const SocialIcons = ({ width, height, viewBox, className, title, icon }: IIcon) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || `0 0 24 24`}
      fill="none"
      className={clsx('w-5 h-5', className)}
      width={width || '24'}
      height={height || '24'}>
      <title>{title || icon}</title>
      {(() => {
        switch (icon) {
          case 'facebook.svg':
            return (
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )
          case 'instagram.svg':
            return (
              <>
                <path
                  d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9997 11.3698C16.1231 12.2021 15.981 13.052 15.5935 13.7988C15.206 14.5456 14.5929 15.1512 13.8413 15.5295C13.0898 15.9077 12.2382 16.0394 11.4075 15.9057C10.5768 15.7721 9.80947 15.3799 9.21455 14.785C8.61962 14.1901 8.22744 13.4227 8.09377 12.592C7.96011 11.7614 8.09177 10.9097 8.47003 10.1582C8.84829 9.40667 9.45389 8.79355 10.2007 8.40605C10.9475 8.01856 11.7975 7.8764 12.6297 7.99981C13.4786 8.1257 14.2646 8.52128 14.8714 9.12812C15.4782 9.73496 15.8738 10.5209 15.9997 11.3698Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M17.5 6.5H17.51" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </>
            )
          case 'youtube.svg':
            return (
              <>
                <path
                  d="M22.5406 6.42C22.4218 5.94541 22.1799 5.51057 21.8392 5.15941C21.4986 4.80824 21.0713 4.55318 20.6006 4.42C18.8806 4 12.0006 4 12.0006 4C12.0006 4 5.12057 4 3.40057 4.46C2.92982 4.59318 2.50255 4.84824 2.16192 5.19941C1.82129 5.55057 1.57936 5.98541 1.46057 6.46C1.14579 8.20556 0.991808 9.97631 1.00057 11.75C0.989351 13.537 1.14334 15.3213 1.46057 17.08C1.59153 17.5398 1.83888 17.9581 2.17872 18.2945C2.51855 18.6308 2.93939 18.8738 3.40057 19C5.12057 19.46 12.0006 19.46 12.0006 19.46C12.0006 19.46 18.8806 19.46 20.6006 19C21.0713 18.8668 21.4986 18.6118 21.8392 18.2606C22.1799 17.9094 22.4218 17.4746 22.5406 17C22.8529 15.2676 23.0069 13.5103 23.0006 11.75C23.0118 9.96295 22.8578 8.1787 22.5406 6.42V6.42Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )
          case 'tiktok.svg':
            return (
              <path
                d="M9.68373 0.730509L9.58373 0.730284L9.68373 0.73055V0.730672L9.68373 0.731161L9.68373 0.733109L9.68371 0.740852L9.68364 0.771444L9.68337 0.890773L9.68236 1.34376L9.67876 2.96108L9.66801 7.87328C9.666 8.80377 9.66376 9.73454 9.66168 10.6032C9.65976 11.4038 9.65796 12.1517 9.65658 12.7981C9.6537 14.1455 9.6523 14.998 9.6523 15.0687C9.6523 16.4595 8.39364 17.5825 6.97129 17.5825C5.55222 17.5825 4.4189 16.4476 4.4189 15.0287C4.4189 13.6097 5.5523 12.4763 6.97129 12.4763C7.0019 12.4763 7.04333 12.4811 7.09072 12.4871C7.10706 12.4892 7.12458 12.4914 7.14351 12.4939C7.18284 12.499 7.22827 12.5049 7.28189 12.5113C7.37062 12.522 7.46061 12.5137 7.5459 12.487C7.63119 12.4602 7.70984 12.4157 7.77666 12.3564C7.84348 12.297 7.89695 12.2242 7.93353 12.1426C7.97011 12.0611 7.98897 11.9727 7.98887 11.8833V11.8832V8.80915C7.98885 8.64845 7.9276 8.49379 7.81757 8.37666C7.70754 8.25953 7.55702 8.18872 7.39663 8.17867L7.39661 8.17866C7.36884 8.17692 7.33999 8.17482 7.30989 8.17262C7.21212 8.1655 7.1012 8.15742 6.97129 8.15742C3.18537 8.15742 0.100001 11.2428 0.1 15.0287C0.1 18.8146 3.18537 21.9 6.97129 21.9C10.7571 21.9 13.8426 18.8146 13.8426 15.0287V8.40756V8.19953L14.005 8.32947C15.0538 9.16831 16.3588 9.6981 17.7984 9.6981C17.9942 9.6981 18.1811 9.6865 18.3608 9.66994C18.5177 9.65547 18.6635 9.58291 18.7696 9.4665C18.8758 9.35009 18.9346 9.19822 18.9346 9.04067V5.62362V5.62356C18.9347 5.46385 18.8743 5.31004 18.7655 5.19306C18.6568 5.0761 18.5078 5.00465 18.3486 4.99308C15.9989 4.82451 14.1261 2.99411 13.8817 0.666411L13.8817 0.66633C13.8655 0.511006 13.7924 0.367178 13.6764 0.262597C13.5605 0.158028 13.4099 0.100105 13.2537 0.1L9.68373 0.730509ZM9.68373 0.730509V0.730489M9.68373 0.730509V0.730489M9.68373 0.730489C9.68408 0.563165 9.75078 0.402811 9.86922 0.28461C9.98765 0.166409 10.1481 0.100016 10.3155 0.1M9.68373 0.730489L10.3155 0.1M10.9459 1.36343H11.0457H12.715H12.7953L12.8126 1.44191C13.3358 3.81666 15.191 5.62713 17.5897 6.0813L17.6711 6.09671V6.17955V8.27608V8.38129L17.5661 8.37595C15.9706 8.29493 14.5662 7.49857 13.739 6.2402L13.739 6.24018C13.6643 6.12647 13.5548 6.03992 13.427 5.9934C13.2992 5.94687 13.1597 5.94286 13.0294 5.98195C12.8991 6.02104 12.7849 6.10116 12.7038 6.21037C12.6226 6.31959 12.5789 6.45207 12.5791 6.58812L12.5792 6.58828V15.0287C12.5792 18.1341 10.0768 20.6366 6.97129 20.6366C3.86593 20.6366 1.36343 18.1341 1.36343 15.0287C1.36343 12.0466 3.69 9.68151 6.61895 9.49109L6.72544 9.48417V9.59088V11.1829V11.2741L6.6347 11.2825C4.69761 11.4628 3.15548 13.0514 3.15548 15.0287C3.15548 17.1279 4.87225 18.846 6.97129 18.846C9.06576 18.846 10.9157 17.1972 10.9157 15.0687M10.9459 1.36343L11.0154 15.1163C11.0727 15.1143 11.1157 15.073 11.1157 15.0716L11.1157 15.0706L11.1157 15.0702L11.1157 15.0695L11.1157 15.0687M10.9459 1.36343L10.9457 1.46321C10.9453 1.64663 10.9445 2.00093 10.9434 2.49184C10.9407 3.66359 10.9363 5.61361 10.9314 7.87571C10.9294 8.803 10.9272 9.73103 10.9251 10.5976C10.9232 11.4013 10.9214 12.1522 10.92 12.8005C10.9185 13.4742 10.9175 14.0502 10.9168 14.4532L10.916 14.9188L10.9158 15.0366L10.9157 15.0638L10.9157 15.0687M10.9459 1.36343L11.1455 1.56343M10.9157 15.0687H11.0157H11.1157M10.9157 15.0687L10.9157 15.0677C10.9158 15.0664 10.9586 15.0252 11.0158 15.0231C11.0464 15.022 11.0811 15.032 11.1156 15.0653L11.1157 15.0687M11.1157 15.0687L11.1157 15.0642L11.1158 15.037L11.116 14.9191L11.1168 14.4536C11.1175 14.0505 11.1185 13.4746 11.12 12.8009C11.1214 12.1533 11.1232 11.4037 11.1251 10.6013C11.1272 9.73401 11.1294 8.80494 11.1314 7.87614C11.1363 5.61792 11.1407 3.67108 11.1434 2.49869C11.1443 2.08237 11.1451 1.7637 11.1455 1.56343M11.1455 1.56343H12.6351C13.1925 3.95067 15.0592 5.77288 17.4711 6.26185V8.16978C15.9803 8.06303 14.6787 7.30566 13.9061 6.13034C13.8077 5.98065 13.6637 5.86671 13.4954 5.80546C13.3271 5.7442 13.1435 5.73892 12.9719 5.79038C12.8004 5.84185 12.65 5.94733 12.5432 6.09112C12.4364 6.23486 12.3789 6.40922 12.3791 6.58828C12.3791 6.58834 12.3792 6.58839 12.3792 6.58844L11.1455 1.56343ZM10.3155 0.1H13.2537H10.3155Z"
                fill="black"
                stroke="white"
                strokeWidth="0.2"
              />
            )
          default:
            return ''
        }
      })()}
    </svg>
  )
}

export function IconTikTok(props: IconProps) {
  return (
    <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.68373 1.61839L9.58373 1.61816L9.68373 1.61843V1.61855L9.68373 1.61904L9.68373 1.62099L9.68371 1.62873L9.68364 1.65932L9.68337 1.77865L9.68236 2.23164L9.67876 3.84895L9.66801 8.76116C9.666 9.69165 9.66376 10.6224 9.66168 11.4911C9.65976 12.2917 9.65796 13.0396 9.65658 13.6859C9.6537 15.0334 9.6523 15.8858 9.6523 15.9566C9.6523 17.3474 8.39364 18.4704 6.97129 18.4704C5.55222 18.4704 4.4189 17.3355 4.4189 15.9166C4.4189 14.4976 5.5523 13.3642 6.97129 13.3642C7.0019 13.3642 7.04333 13.369 7.09072 13.375C7.10706 13.377 7.12458 13.3793 7.14351 13.3818C7.18284 13.3869 7.22827 13.3928 7.28189 13.3992C7.37062 13.4099 7.46061 13.4015 7.5459 13.3748C7.63119 13.3481 7.70984 13.3036 7.77666 13.2443C7.84348 13.1849 7.89695 13.112 7.93353 13.0305C7.97011 12.949 7.98897 12.8606 7.98887 12.7712V12.7711V9.69702C7.98885 9.53633 7.9276 9.38167 7.81757 9.26454C7.70754 9.1474 7.55702 9.0766 7.39663 9.06654L7.39661 9.06654C7.36884 9.0648 7.33999 9.06269 7.30989 9.0605C7.21212 9.05338 7.1012 9.0453 6.97129 9.0453C3.18537 9.0453 0.100001 12.1307 0.1 15.9166C0.1 19.7025 3.18537 22.7879 6.97129 22.7879C10.7571 22.7879 13.8426 19.7025 13.8426 15.9166V9.29544V9.08741L14.005 9.21735C15.0538 10.0562 16.3588 10.586 17.7984 10.586C17.9942 10.586 18.1811 10.5744 18.3608 10.5578C18.5177 10.5433 18.6635 10.4708 18.7696 10.3544C18.8758 10.238 18.9346 10.0861 18.9346 9.92854V6.5115V6.51144C18.9347 6.35173 18.8743 6.19791 18.7655 6.08094C18.6568 5.96398 18.5078 5.89253 18.3486 5.88096C15.9989 5.71238 14.1261 3.88199 13.8817 1.55429L13.8817 1.55421C13.8655 1.39888 13.7924 1.25506 13.6764 1.15047C13.5605 1.04591 13.4099 0.987983 13.2537 0.987878L9.68373 1.61839ZM9.68373 1.61839V1.61837M9.68373 1.61839V1.61837M9.68373 1.61837C9.68408 1.45104 9.75078 1.29069 9.86922 1.17249C9.98765 1.05429 10.1481 0.987895 10.3155 0.987878M9.68373 1.61837L10.3155 0.987878M10.9459 2.25131H11.0457H12.715H12.7953L12.8126 2.32979C13.3358 4.70454 15.191 6.51501 17.5897 6.96918L17.6711 6.98459V7.06743V9.16396V9.26917L17.5661 9.26383C15.9706 9.18281 14.5662 8.38645 13.739 7.12808L13.739 7.12806C13.6643 7.01435 13.5548 6.9278 13.427 6.88128C13.2992 6.83475 13.1597 6.83074 13.0294 6.86983C12.8991 6.90892 12.7849 6.98903 12.7038 7.09825C12.6226 7.20747 12.5789 7.33995 12.5791 7.476L12.5792 7.47616V15.9166C12.5792 19.0219 10.0768 21.5245 6.97129 21.5245C3.86593 21.5245 1.36343 19.022 1.36343 15.9166C1.36343 12.9345 3.69 10.5694 6.61895 10.379L6.72544 10.372V10.4788V12.0708V12.1619L6.6347 12.1704C4.69761 12.3506 3.15548 13.9393 3.15548 15.9166C3.15548 18.0157 4.87225 19.7338 6.97129 19.7338C9.06576 19.7338 10.9157 18.0851 10.9157 15.9566M10.9459 2.25131L11.0154 16.0042C11.0727 16.0022 11.1157 15.9609 11.1157 15.9595L11.1157 15.9584L11.1157 15.9581L11.1157 15.9574L11.1157 15.9566M10.9459 2.25131L10.9457 2.35109C10.9453 2.53451 10.9445 2.88881 10.9434 3.37972C10.9407 4.55147 10.9363 6.50149 10.9314 8.76359C10.9294 9.69088 10.9272 10.6189 10.9251 11.4854C10.9232 12.2892 10.9214 13.0401 10.92 13.6884C10.9185 14.3621 10.9175 14.9381 10.9168 15.3411L10.916 15.8066L10.9158 15.9245L10.9157 15.9516L10.9157 15.9566M10.9459 2.25131L11.1455 2.45131M10.9157 15.9566H11.0157H11.1157M10.9157 15.9566L10.9157 15.9556C10.9158 15.9543 10.9586 15.9131 11.0158 15.911C11.0464 15.9098 11.0811 15.9199 11.1156 15.9532L11.1157 15.9566M11.1157 15.9566L11.1157 15.952L11.1158 15.9249L11.116 15.807L11.1168 15.3415C11.1175 14.9384 11.1185 14.3625 11.12 13.6888C11.1214 13.0412 11.1232 12.2916 11.1251 11.4892C11.1272 10.6219 11.1294 9.69282 11.1314 8.76402C11.1363 6.5058 11.1407 4.55896 11.1434 3.38657C11.1443 2.97024 11.1451 2.65158 11.1455 2.45131M11.1455 2.45131H12.6351C13.1925 4.83855 15.0592 6.66076 17.4711 7.14973V9.05766C15.9803 8.95091 14.6787 8.19353 13.9061 7.01822C13.8077 6.86853 13.6637 6.75459 13.4954 6.69334C13.3271 6.63208 13.1435 6.62679 12.9719 6.67826C12.8004 6.72973 12.65 6.8352 12.5432 6.97899C12.4364 7.12274 12.3789 7.2971 12.3791 7.47616C12.3791 7.47621 12.3792 7.47627 12.3792 7.47632L11.1455 2.45131ZM10.3155 0.987878H13.2537H10.3155Z"
        fill="black"
        stroke="white"
        strokeWidth="0.2"
      />
    </svg>
  )
}

export function IconInstagram(props: IconProps) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.0347 2.88788H7.03467C4.27324 2.88788 2.03467 5.12645 2.03467 7.88788V17.8879C2.03467 20.6493 4.27324 22.8879 7.03467 22.8879H17.0347C19.7961 22.8879 22.0347 20.6493 22.0347 17.8879V7.88788C22.0347 5.12645 19.7961 2.88788 17.0347 2.88788Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0349 12.2579C16.1583 13.0901 16.0161 13.9401 15.6286 14.6869C15.2411 15.4337 14.628 16.0393 13.8765 16.4175C13.125 16.7958 12.2733 16.9275 11.4426 16.7938C10.612 16.6601 9.84462 16.268 9.2497 15.673C8.65478 15.0781 8.2626 14.3107 8.12893 13.4801C7.99527 12.6494 8.12693 11.7978 8.50519 11.0462C8.88345 10.2947 9.48905 9.68162 10.2358 9.29412C10.9826 8.90662 11.8326 8.76446 12.6649 8.88787C13.5138 9.01376 14.2997 9.40934 14.9066 10.0162C15.5134 10.623 15.909 11.409 16.0349 12.2579Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.5347 7.38788H17.5447" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconYouTube(props: IconProps) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_1259_374287)">
        <path
          d="M22.5748 7.30788C22.456 6.83329 22.214 6.39845 21.8734 6.04728C21.5328 5.69612 21.1055 5.44106 20.6348 5.30788C18.9148 4.88788 12.0348 4.88788 12.0348 4.88788C12.0348 4.88788 5.15475 4.88788 3.43475 5.34788C2.964 5.48106 2.53673 5.73612 2.1961 6.08728C1.85547 6.43845 1.61354 6.87329 1.49475 7.34788C1.17997 9.09343 1.02599 10.8642 1.03475 12.6379C1.02353 14.4249 1.17752 16.2092 1.49475 17.9679C1.62571 18.4277 1.87306 18.846 2.2129 19.1824C2.55273 19.5187 2.97357 19.7617 3.43475 19.8879C5.15475 20.3479 12.0348 20.3479 12.0348 20.3479C12.0348 20.3479 18.9148 20.3479 20.6348 19.8879C21.1055 19.7547 21.5328 19.4996 21.8734 19.1485C22.214 18.7973 22.456 18.3625 22.5748 17.8879C22.8871 16.1555 23.0411 14.3982 23.0348 12.6379C23.046 10.8508 22.892 9.06658 22.5748 7.30788V7.30788Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.78467 15.9079L15.5347 12.6379L9.78467 9.36786V15.9079Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1259_374287">
          <rect width="24" height="24" fill="white" transform="translate(0.034668 0.887878)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Instagram = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ProductInfoIcon = () => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_11643_37269)">
        <path
          d="M8.49984 15.5834C12.4119 15.5834 15.5832 12.4121 15.5832 8.50008C15.5832 4.58806 12.4119 1.41675 8.49984 1.41675C4.58782 1.41675 1.4165 4.58806 1.4165 8.50008C1.4165 12.4121 4.58782 15.5834 8.49984 15.5834Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1259_374287">
          <rect width="24" height="24" fill="white" transform="translate(0.034668 0.887878)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const IconVideoPlayTransparent = (props: IconProps) => {
  return (
    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M37.5 75C58.2107 75 75 58.2107 75 37.5C75 16.7893 58.2107 0 37.5 0C16.7893 0 0 16.7893 0 37.5C0 58.2107 16.7893 75 37.5 75Z"
        fill="white"
      />
      <path
        d="M31.25 26.8685C31.25 26.0698 32.1401 25.5934 32.8047 26.0365L48.7519 36.6679C49.3457 37.0638 49.3457 37.9362 48.7519 38.3321L32.8047 48.9635C32.1401 49.4066 31.25 48.9302 31.25 48.1315V26.8685Z"
        fill="black"
      />
    </svg>
  )
}

export function IconAppStore(props: IconProps) {
  return (
    <svg width="133" height="44" viewBox="0 0 133 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_1259_377205)">
        <path
          d="M122.409 0.000143H10.5973C10.1897 0.000143 9.78703 0.000143 9.38054 0.002343C9.04027 0.004543 8.70271 0.010934 8.35918 0.016313C7.61286 0.025005 6.86829 0.0899869 6.13195 0.210694C5.39665 0.334029 4.68438 0.56655 4.01923 0.900394C3.3549 1.23706 2.74787 1.67453 2.22019 2.19692C1.68973 2.71784 1.24756 3.31996 0.910662 3.98012C0.572839 4.63896 0.338591 5.34498 0.216009 6.07377C0.0922621 6.80165 0.0256726 7.53792 0.0168384 8.27597C0.00652418 8.61323 0.00543496 8.95161 0 9.28892V34.7146C0.00543496 35.0562 0.00652418 35.387 0.0168384 35.7287C0.0256753 36.4667 0.0922648 37.2029 0.216009 37.9308C0.338253 38.66 0.572514 39.3664 0.910662 40.0255C1.2474 40.6835 1.68964 41.2832 2.22019 41.8012C2.74587 42.326 3.35329 42.7637 4.01923 43.0978C4.68437 43.4325 5.39656 43.6665 6.13195 43.7917C6.86842 43.9114 7.6129 43.9764 8.35918 43.9862C8.70271 43.9937 9.04027 43.9979 9.38054 43.9979C9.78701 44.0001 10.1897 44.0001 10.5973 44.0001H122.409C122.808 44.0001 123.214 44.0001 123.614 43.9979C123.952 43.9979 124.299 43.9937 124.638 43.9862C125.383 43.977 126.126 43.9119 126.861 43.7917C127.599 43.6656 128.314 43.4317 128.982 43.0978C129.647 42.7635 130.254 42.3258 130.779 41.8012C131.309 41.2812 131.752 40.6819 132.093 40.0255C132.428 39.3659 132.66 38.6596 132.781 37.9308C132.905 37.2028 132.974 36.4668 132.987 35.7287C132.991 35.387 132.991 35.0562 132.991 34.7146C133 34.315 133 33.9175 133 33.5114V10.4899C133 10.0871 133 9.68745 132.991 9.28892C132.991 8.95161 132.991 8.61323 132.987 8.27593C132.974 7.53781 132.905 6.8017 132.781 6.07373C132.66 5.34535 132.428 4.6394 132.093 3.98007C131.407 2.65686 130.319 1.57977 128.982 0.900295C128.314 0.567267 127.599 0.334807 126.861 0.210595C126.126 0.0893561 125.383 0.0243515 124.638 0.016159C124.299 0.010791 123.952 0.004345 123.614 0.0022C123.214 0 122.808 0 122.409 0V0.000143Z"
          fill="#A6A6A6"
        />
        <path
          d="M9.38587 43.0375C9.04724 43.0375 8.71678 43.0332 8.38081 43.0258C7.6848 43.0168 6.99042 42.9568 6.30336 42.8463C5.66271 42.7371 5.0421 42.534 4.46199 42.2437C3.88719 41.9557 3.36294 41.5781 2.9093 41.1254C2.44909 40.678 2.06595 40.1591 1.77506 39.5892C1.48096 39.0157 1.27742 38.4009 1.17154 37.7663C1.0572 37.0845 0.995338 36.395 0.986486 35.7038C0.97944 35.4718 0.970215 34.6994 0.970215 34.6994V9.2888C0.970215 9.2888 0.98004 8.52825 0.986542 8.3048C0.995018 7.61475 1.05652 6.92634 1.17052 6.24553C1.27659 5.6092 1.48029 4.99265 1.77455 4.41722C2.06437 3.84776 2.44539 3.32847 2.90282 2.87947C3.35974 2.42621 3.88567 2.04669 4.46144 1.75476C5.04022 1.46533 5.65966 1.26363 6.29901 1.15642C6.98833 1.04484 7.68512 0.98452 8.38354 0.975955L9.38642 0.962524H123.608L124.623 0.976494C125.315 0.984634 126.005 1.04442 126.688 1.15534C127.334 1.2639 127.96 1.467 128.545 1.75798C129.699 2.34631 130.638 3.2771 131.23 4.4199C131.519 4.99136 131.72 5.60288 131.824 6.23371C131.94 6.92011 132.004 7.61394 132.018 8.30964C132.021 8.62116 132.021 8.95578 132.021 9.2888C132.03 9.7013 132.03 10.0939 132.03 10.4898V33.5113C132.03 33.9109 132.03 34.3009 132.021 34.694C132.021 35.0517 132.021 35.3794 132.017 35.7167C132.004 36.4 131.94 37.0814 131.827 37.7555C131.723 38.3947 131.52 39.0143 131.226 39.5925C130.933 40.1562 130.552 40.6706 130.098 41.1168C129.644 41.572 129.118 41.9518 128.542 42.2416C127.958 42.5342 127.333 42.738 126.688 42.8463C126.001 42.9574 125.307 43.0174 124.611 43.0258C124.285 43.0332 123.944 43.0375 123.613 43.0375L122.409 43.0397L9.38587 43.0375Z"
          fill="black"
        />
        <path
          d="M27.5294 22.3307C27.5414 21.4126 27.7878 20.5124 28.2457 19.7138C28.7037 18.9153 29.3582 18.2444 30.1486 17.7635C29.6465 17.0538 28.9841 16.4698 28.2141 16.0578C27.4441 15.6457 26.5876 15.4171 25.7126 15.39C23.8463 15.1961 22.0369 16.4953 21.0858 16.4953C20.1163 16.4953 18.652 15.4093 17.0752 15.4414C16.0552 15.474 15.0612 15.7675 14.19 16.2934C13.3187 16.8193 12.6 17.5595 12.1038 18.442C9.95422 22.1253 11.5576 27.5385 13.6166 30.5157C14.6468 31.9736 15.8509 33.6021 17.4263 33.5444C18.9679 33.4811 19.5437 32.5714 21.4046 32.5714C23.2482 32.5714 23.7884 33.5444 25.3958 33.5076C27.05 33.4811 28.0923 32.0433 29.0863 30.5716C29.8265 29.5328 30.3961 28.3847 30.774 27.1698C29.8129 26.7675 28.9927 26.0941 28.4158 25.2336C27.8388 24.3731 27.5305 23.3635 27.5294 22.3307Z"
          fill="white"
        />
        <path
          d="M24.4931 13.432C25.3951 12.3603 25.8395 10.9829 25.7319 9.59229C24.3539 9.73553 23.081 10.3873 22.1668 11.4179C21.7199 11.9213 21.3775 12.507 21.1594 13.1414C20.9413 13.7759 20.8517 14.4466 20.8956 15.1154C21.5849 15.1224 22.2668 14.9746 22.8899 14.683C23.5131 14.3914 24.0612 13.9636 24.4931 13.432Z"
          fill="white"
        />
        <path
          d="M47.0168 29.8536H41.7559L40.4925 33.5457H38.2642L43.2472 19.8859H45.5624L50.5454 33.5457H48.2791L47.0168 29.8536ZM42.3007 28.1499H46.4709L44.4151 22.1579H44.3576L42.3007 28.1499Z"
          fill="white"
        />
        <path
          d="M61.3069 28.5667C61.3069 31.6615 59.6332 33.6499 57.1075 33.6499C56.4677 33.683 55.8314 33.5372 55.2715 33.229C54.7115 32.9209 54.2506 32.4629 53.9414 31.9075H53.8936V36.8403H51.8281V23.5866H53.8275V25.2431H53.8654C54.1888 24.6904 54.6576 24.2348 55.2218 23.9247C55.786 23.6147 56.4245 23.4618 57.0695 23.4824C59.6234 23.4824 61.3069 25.4805 61.3069 28.5667ZM59.1839 28.5667C59.1839 26.5504 58.131 25.2248 56.5247 25.2248C54.9465 25.2248 53.885 26.5783 53.885 28.5667C53.885 30.5734 54.9465 31.9172 56.5247 31.9172C58.131 31.9172 59.1839 30.6013 59.1839 28.5667Z"
          fill="white"
        />
        <path
          d="M72.3826 28.5667C72.3826 31.6615 70.7089 33.6499 68.1832 33.6499C67.5434 33.683 66.9071 33.5372 66.3472 33.229C65.7872 32.9209 65.3263 32.4629 65.0171 31.9075H64.9693V36.8403H62.9038V23.5866H64.9031V25.2431H64.9411C65.2645 24.6904 65.7332 24.2347 66.2974 23.9247C66.8616 23.6147 67.5002 23.4618 68.1452 23.4824C70.6991 23.4824 72.3826 25.4805 72.3826 28.5667ZM70.2596 28.5667C70.2596 26.5504 69.2067 25.2248 67.6003 25.2248C66.0222 25.2248 64.9607 26.5783 64.9607 28.5667C64.9607 30.5733 66.0222 31.9172 67.6003 31.9172C69.2067 31.9172 70.2596 30.6013 70.2596 28.5667H70.2596Z"
          fill="white"
        />
        <path
          d="M79.7023 29.7397C79.8553 31.0943 81.1849 31.9837 83.0019 31.9837C84.7429 31.9837 85.9954 31.0943 85.9954 29.8729C85.9954 28.8126 85.24 28.1778 83.4512 27.7427L81.6625 27.3163C79.1281 26.7104 77.9515 25.5373 77.9515 23.6338C77.9515 21.277 80.0268 19.6581 82.9737 19.6581C85.8901 19.6581 87.8894 21.277 87.9567 23.6338H85.8716C85.7468 22.2706 84.6082 21.4478 82.9443 21.4478C81.2804 21.4478 80.1418 22.2803 80.1418 23.492C80.1418 24.4578 80.8691 25.026 82.648 25.461L84.1686 25.8306C87.0004 26.4934 88.177 27.6192 88.177 29.6172C88.177 32.1728 86.1202 33.7733 82.8488 33.7733C79.788 33.7733 77.7214 32.2104 77.5879 29.7396L79.7023 29.7397Z"
          fill="white"
        />
        <path
          d="M92.6351 21.2298V23.5866H94.5486V25.2055H92.6351V30.6958C92.6351 31.5487 93.0182 31.9462 93.8594 31.9462C94.0866 31.9423 94.3134 31.9265 94.5388 31.8989V33.5081C94.1607 33.578 93.7763 33.6097 93.3916 33.6026C91.3543 33.6026 90.5598 32.8453 90.5598 30.9138V25.2055H89.0967V23.5866H90.5598V21.2298H92.6351Z"
          fill="white"
        />
        <path
          d="M95.6567 28.5667C95.6567 25.4332 97.5214 23.4642 100.429 23.4642C103.347 23.4642 105.203 25.4332 105.203 28.5667C105.203 31.7088 103.357 33.6692 100.429 33.6692C97.5029 33.6692 95.6567 31.7088 95.6567 28.5667ZM103.098 28.5667C103.098 26.4172 102.103 25.1485 100.429 25.1485C98.7555 25.1485 97.7613 26.4269 97.7613 28.5667C97.7613 30.7248 98.7555 31.9838 100.429 31.9838C102.103 31.9838 103.098 30.7248 103.098 28.5667H103.098Z"
          fill="white"
        />
        <path
          d="M106.906 23.5866H108.876V25.2817H108.924C109.057 24.7523 109.37 24.2844 109.811 23.9567C110.252 23.6291 110.793 23.4616 111.344 23.4824C111.582 23.4816 111.819 23.5071 112.052 23.5587V25.4708C111.751 25.3799 111.438 25.3382 111.124 25.3472C110.824 25.3352 110.524 25.3875 110.247 25.5007C109.969 25.6139 109.719 25.7852 109.515 26.0029C109.31 26.2206 109.156 26.4795 109.062 26.7618C108.968 27.0441 108.937 27.3432 108.971 27.6385V33.5457H106.906L106.906 23.5866Z"
          fill="white"
        />
        <path
          d="M121.575 30.6206C121.297 32.4285 119.518 33.6692 117.242 33.6692C114.315 33.6692 112.498 31.7281 112.498 28.614C112.498 25.4902 114.324 23.4642 117.155 23.4642C119.939 23.4642 121.69 25.3569 121.69 28.3766V29.077H114.583V29.2005C114.55 29.567 114.596 29.9363 114.719 30.2837C114.841 30.6311 115.037 30.9488 115.293 31.2156C115.549 31.4824 115.859 31.6922 116.204 31.8311C116.548 31.9701 116.918 32.0349 117.29 32.0214C117.778 32.0667 118.268 31.9548 118.686 31.7024C119.105 31.45 119.43 31.0706 119.613 30.6206L121.575 30.6206ZM114.592 27.6483H119.623C119.642 27.3187 119.591 26.9889 119.475 26.6796C119.359 26.3702 119.179 26.0881 118.947 25.8507C118.715 25.6134 118.437 25.426 118.128 25.3004C117.82 25.1747 117.488 25.1135 117.155 25.1206C116.819 25.1186 116.485 25.1826 116.174 25.3088C115.863 25.435 115.58 25.621 115.342 25.856C115.103 26.091 114.914 26.3704 114.786 26.678C114.657 26.9856 114.592 27.3154 114.592 27.6483V27.6483Z"
          fill="white"
        />
        <path
          d="M42.0419 9.60413C42.475 9.57337 42.9095 9.63812 43.3142 9.79369C43.7189 9.94927 44.0837 10.1918 44.3822 10.5038C44.6807 10.8158 44.9055 11.1894 45.0405 11.5978C45.1754 12.0062 45.2171 12.4392 45.1625 12.8655C45.1625 14.9623 44.0174 16.1677 42.0419 16.1677H39.6465V9.60413H42.0419ZM40.6765 15.2394H41.9269C42.2363 15.2577 42.546 15.2075 42.8333 15.0924C43.1207 14.9774 43.3785 14.8003 43.588 14.5742C43.7975 14.3481 43.9534 14.0786 44.0444 13.7853C44.1354 13.492 44.1591 13.1823 44.114 12.8788C44.1559 12.5765 44.1297 12.2688 44.0373 11.9776C43.9449 11.6865 43.7886 11.4192 43.5796 11.1949C43.3706 10.9706 43.114 10.7948 42.8283 10.6801C42.5426 10.5654 42.2347 10.5148 41.9269 10.5317H40.6765V15.2394Z"
          fill="white"
        />
        <path
          d="M46.3261 13.6888C46.2946 13.3633 46.3323 13.0349 46.4366 12.7246C46.5409 12.4143 46.7095 12.129 46.9318 11.887C47.154 11.6451 47.4249 11.4517 47.727 11.3194C48.0292 11.1871 48.3559 11.1188 48.6863 11.1188C49.0167 11.1188 49.3434 11.1871 49.6456 11.3194C49.9477 11.4517 50.2186 11.6451 50.4408 11.887C50.6631 12.129 50.8317 12.4143 50.936 12.7246C51.0403 13.0349 51.078 13.3633 51.0465 13.6888C51.0786 14.0146 51.0414 14.3435 50.9374 14.6543C50.8333 14.9651 50.6648 15.2509 50.4425 15.4933C50.2202 15.7358 49.9491 15.9295 49.6467 16.0621C49.3442 16.1947 49.0171 16.2632 48.6863 16.2632C48.3555 16.2632 48.0284 16.1947 47.7259 16.0621C47.4235 15.9295 47.1524 15.7358 46.9301 15.4933C46.7078 15.2509 46.5393 14.9651 46.4352 14.6543C46.3312 14.3435 46.294 14.0146 46.3261 13.6888ZM50.0306 13.6888C50.0306 12.6151 49.5432 11.9872 48.6879 11.9872C47.8294 11.9872 47.3464 12.6151 47.3464 13.6888C47.3464 14.7711 47.8294 15.3941 48.6879 15.3941C49.5432 15.3941 50.0306 14.7668 50.0306 13.6888H50.0306Z"
          fill="white"
        />
        <path
          d="M57.3208 16.1675H56.2962L55.2619 12.5195H55.1837L54.1537 16.1675H53.1388L51.7593 11.2143H52.7611L53.6576 14.9939H53.7314L54.7604 11.2143H55.708L56.7369 14.9939H56.8151L57.7072 11.2143H58.6949L57.3208 16.1675Z"
          fill="white"
        />
        <path
          d="M59.8555 11.2143H60.8063V12.0012H60.8801C61.0053 11.7186 61.2165 11.4817 61.4842 11.3235C61.7519 11.1653 62.0628 11.0937 62.3736 11.1187C62.6171 11.1006 62.8616 11.1369 63.089 11.225C63.3164 11.3131 63.5209 11.4508 63.6872 11.6277C63.8536 11.8046 63.9776 12.0163 64.0501 12.2471C64.1226 12.4779 64.1416 12.7219 64.1059 12.961V16.1675H63.1182V13.2065C63.1182 12.4105 62.7687 12.0146 62.0382 12.0146C61.8729 12.007 61.7078 12.0348 61.5544 12.0963C61.4009 12.1577 61.2627 12.2512 61.1492 12.3704C61.0357 12.4896 60.9496 12.6317 60.8968 12.787C60.8439 12.9422 60.8257 13.1069 60.8432 13.2698V16.1675H59.8555L59.8555 11.2143Z"
          fill="white"
        />
        <path d="M65.6797 9.2807H66.6674V16.1675H65.6797V9.2807Z" fill="white" />
        <path
          d="M68.0404 13.6888C68.009 13.3632 68.0466 13.0348 68.151 12.7245C68.2553 12.4142 68.424 12.1289 68.6462 11.8869C68.8685 11.645 69.1394 11.4516 69.4415 11.3193C69.7437 11.187 70.0705 11.1187 70.4009 11.1187C70.7313 11.1187 71.0581 11.187 71.3603 11.3193C71.6624 11.4516 71.9333 11.645 72.1556 11.8869C72.3778 12.1289 72.5465 12.4142 72.6508 12.7245C72.7552 13.0348 72.7928 13.3632 72.7614 13.6888C72.7934 14.0146 72.7562 14.3435 72.6521 14.6543C72.5481 14.9651 72.3795 15.2508 72.1572 15.4933C71.9349 15.7357 71.6638 15.9295 71.3613 16.0621C71.0588 16.1946 70.7317 16.2631 70.4009 16.2631C70.0701 16.2631 69.743 16.1946 69.4405 16.0621C69.138 15.9295 68.8669 15.7357 68.6446 15.4933C68.4223 15.2508 68.2537 14.9651 68.1497 14.6543C68.0456 14.3435 68.0084 14.0146 68.0404 13.6888ZM71.7449 13.6888C71.7449 12.6151 71.2575 11.9872 70.4023 11.9872C69.5437 11.9872 69.0607 12.6151 69.0607 13.6888C69.0607 14.7711 69.5437 15.3941 70.4023 15.3941C71.2575 15.3941 71.7449 14.7667 71.7449 13.6888H71.7449Z"
          fill="white"
        />
        <path
          d="M73.8013 14.7668C73.8013 13.8751 74.472 13.3611 75.6627 13.2881L77.0184 13.2107V12.7832C77.0184 12.2601 76.6689 11.9647 75.9938 11.9647C75.4424 11.9647 75.0603 12.165 74.9507 12.5152H73.9945C74.0954 11.6644 74.904 11.1187 76.0394 11.1187C77.2941 11.1187 78.0017 11.7369 78.0017 12.7832V16.1675H77.0509V15.4714H76.9728C76.8142 15.7211 76.5914 15.9247 76.3273 16.0613C76.0632 16.198 75.7672 16.2628 75.4695 16.2491C75.2594 16.2708 75.0471 16.2486 74.8462 16.184C74.6453 16.1195 74.4603 16.0139 74.3031 15.8743C74.1459 15.7346 74.02 15.5639 73.9336 15.3731C73.8472 15.1824 73.8021 14.9758 73.8013 14.7668ZM77.0184 14.3435V13.9294L75.7962 14.0067C75.107 14.0524 74.7944 14.2844 74.7944 14.7211C74.7944 15.1669 75.1851 15.4263 75.7225 15.4263C75.8799 15.4421 76.0389 15.4264 76.1901 15.3801C76.3412 15.3338 76.4814 15.2578 76.6024 15.1568C76.7233 15.0558 76.8224 14.9317 76.8939 14.792C76.9653 14.6523 77.0077 14.4998 77.0184 14.3435Z"
          fill="white"
        />
        <path
          d="M79.2998 13.6888C79.2998 12.1236 80.1128 11.1321 81.3773 11.1321C81.69 11.1179 82.0005 11.192 82.2722 11.3459C82.544 11.4998 82.7659 11.727 82.912 12.0011H82.9858V9.2807H83.9735V16.1675H83.0271V15.3849H82.9489C82.7915 15.6572 82.5619 15.8816 82.2849 16.034C82.0078 16.1863 81.694 16.2607 81.3773 16.2491C80.1041 16.2492 79.2998 15.2577 79.2998 13.6888ZM80.3201 13.6888C80.3201 14.7394 80.8205 15.3715 81.6573 15.3715C82.4898 15.3715 83.0043 14.7302 83.0043 13.6931C83.0043 12.6607 82.4844 12.0103 81.6573 12.0103C80.8259 12.0103 80.3201 12.6468 80.3201 13.6888H80.3201Z"
          fill="white"
        />
        <path
          d="M88.06 13.6888C88.0285 13.3633 88.0662 13.0349 88.1704 12.7246C88.2747 12.4143 88.4434 12.129 88.6656 11.887C88.8879 11.6451 89.1587 11.4517 89.4609 11.3194C89.763 11.1871 90.0898 11.1188 90.4202 11.1188C90.7506 11.1188 91.0773 11.1871 91.3795 11.3194C91.6816 11.4517 91.9525 11.6451 92.1747 11.887C92.3969 12.129 92.5656 12.4143 92.6699 12.7246C92.7742 13.0349 92.8118 13.3633 92.7804 13.6888C92.8124 14.0146 92.7753 14.3435 92.6712 14.6543C92.5672 14.9651 92.3986 15.2509 92.1764 15.4933C91.9541 15.7358 91.683 15.9295 91.3806 16.0621C91.0781 16.1947 90.751 16.2632 90.4202 16.2632C90.0894 16.2632 89.7623 16.1947 89.4598 16.0621C89.1574 15.9295 88.8863 15.7358 88.664 15.4933C88.4417 15.2509 88.2731 14.9651 88.1691 14.6543C88.0651 14.3435 88.0279 14.0146 88.06 13.6888ZM91.7644 13.6888C91.7644 12.6151 91.2771 11.9872 90.4218 11.9872C89.5633 11.9872 89.0803 12.6151 89.0803 13.6888C89.0803 14.7711 89.5633 15.3941 90.4218 15.3941C91.2771 15.3941 91.7644 14.7668 91.7644 13.6888Z"
          fill="white"
        />
        <path
          d="M94.1055 11.2143H95.0563V12.0012H95.1301C95.2553 11.7186 95.4665 11.4817 95.7342 11.3235C96.0019 11.1653 96.3128 11.0937 96.6236 11.1187C96.8671 11.1006 97.1116 11.1369 97.339 11.225C97.5664 11.3131 97.7709 11.4508 97.9372 11.6277C98.1036 11.8046 98.2276 12.0163 98.3001 12.2471C98.3726 12.4779 98.3916 12.7219 98.3559 12.961V16.1675H97.3682V13.2065C97.3682 12.4105 97.0187 12.0146 96.2882 12.0146C96.1229 12.007 95.9578 12.0348 95.8044 12.0963C95.6509 12.1577 95.5127 12.2512 95.3992 12.3704C95.2857 12.4896 95.1996 12.6317 95.1468 12.787C95.0939 12.9422 95.0757 13.1069 95.0932 13.2698V16.1675H94.1055V11.2143Z"
          fill="white"
        />
        <path
          d="M103.937 9.98108V11.2368H105.021V12.0602H103.937V14.6072C103.937 15.1261 104.153 15.3532 104.645 15.3532C104.771 15.3528 104.896 15.3453 105.021 15.3307V16.1449C104.844 16.1763 104.664 16.1931 104.484 16.1949C103.386 16.1949 102.948 15.8125 102.948 14.8575V12.0602H102.154V11.2368H102.948V9.98108H103.937Z"
          fill="white"
        />
        <path
          d="M106.371 9.2807H107.35V12.0103H107.428C107.559 11.725 107.776 11.4868 108.049 11.328C108.322 11.1692 108.638 11.0976 108.954 11.123C109.196 11.1099 109.438 11.15 109.663 11.2402C109.888 11.3305 110.09 11.4687 110.254 11.6451C110.419 11.8214 110.542 12.0316 110.615 12.2606C110.689 12.4895 110.71 12.7316 110.677 12.9696V16.1675H109.689V13.2107C109.689 12.4196 109.316 12.0189 108.619 12.0189C108.449 12.0051 108.278 12.0282 108.118 12.0866C107.958 12.1449 107.813 12.2371 107.693 12.3567C107.573 12.4763 107.481 12.6205 107.423 12.779C107.365 12.9376 107.343 13.1067 107.358 13.2746V16.1675H106.371L106.371 9.2807Z"
          fill="white"
        />
        <path
          d="M116.436 14.8301C116.302 15.2828 116.011 15.6744 115.615 15.9363C115.219 16.1983 114.742 16.314 114.268 16.2631C113.938 16.2717 113.61 16.2092 113.308 16.0799C113.005 15.9506 112.734 15.7577 112.514 15.5144C112.294 15.2712 112.13 14.9835 112.034 14.6713C111.937 14.3591 111.911 14.0298 111.956 13.7065C111.912 13.3821 111.939 13.0522 112.035 12.739C112.131 12.4259 112.294 12.1368 112.513 11.8915C112.732 11.6461 113.001 11.4501 113.303 11.3168C113.605 11.1834 113.933 11.1159 114.263 11.1187C115.656 11.1187 116.496 12.0603 116.496 13.6157V13.9568H112.962V14.0116C112.947 14.1933 112.97 14.3763 113.03 14.5487C113.09 14.7211 113.186 14.8792 113.311 15.0128C113.437 15.1464 113.589 15.2526 113.759 15.3245C113.928 15.3965 114.111 15.4326 114.295 15.4306C114.531 15.4586 114.771 15.4165 114.983 15.3096C115.195 15.2027 115.37 15.0357 115.486 14.8301L116.436 14.8301ZM112.962 13.2338H115.49C115.502 13.0676 115.48 12.9006 115.423 12.7436C115.366 12.5866 115.277 12.4431 115.161 12.3222C115.045 12.2014 114.905 12.1059 114.749 12.0419C114.594 11.9779 114.426 11.9468 114.258 11.9507C114.087 11.9485 113.918 11.9803 113.759 12.044C113.601 12.1078 113.457 12.2022 113.337 12.3218C113.216 12.4414 113.121 12.5837 113.056 12.7403C112.992 12.8969 112.96 13.0647 112.962 13.2338H112.962Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1259_377205">
          <rect width="133" height="44" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function IconGooglePlay(props: IconProps) {
  return (
    <svg width="146" height="43" viewBox="0 0 146 43" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_1259_377206)">
        <path
          d="M140.593 0H5.40741C2.42098 0 0 2.40647 0 5.375V37.625C0 40.5935 2.42098 43 5.40741 43H140.593C143.579 43 146 40.5935 146 37.625V5.375C146 2.40647 143.579 0 140.593 0Z"
          fill="black"
        />
        <path
          d="M140.593 0.86C143.102 0.86 145.135 2.881 145.135 5.375V37.625C145.135 40.119 143.102 42.14 140.593 42.14H5.40741C2.89837 42.14 0.865185 40.119 0.865185 37.625V5.375C0.865185 2.881 2.89837 0.86 5.40741 0.86H140.593ZM140.593 0H5.40741C2.43333 0 0 2.41875 0 5.375V37.625C0 40.5813 2.43333 43 5.40741 43H140.593C143.567 43 146 40.5813 146 37.625V5.375C146 2.41875 143.567 0 140.593 0V0Z"
          fill="#A6A6A6"
        />
        <path
          d="M51.2838 11.008C51.2838 11.911 51.0135 12.6313 50.4727 13.158C49.8671 13.7923 49.0776 14.1148 48.0935 14.1148C47.1093 14.1148 46.3523 13.7923 45.7034 13.1473C45.0545 12.5023 44.7192 11.696 44.7192 10.75C44.7192 9.804 45.0437 8.99775 45.7034 8.35275C46.3523 7.70775 47.1526 7.38525 48.0935 7.38525C48.5693 7.38525 49.0235 7.47125 49.4453 7.6325C49.8671 7.8045 50.2132 8.041 50.4835 8.342L49.8887 8.93325C49.6941 8.69675 49.4345 8.50325 49.1101 8.37425C48.7856 8.24525 48.4504 8.17 48.0935 8.17C47.3905 8.17 46.7849 8.41725 46.2982 8.901C45.8115 9.3955 45.5736 10.0083 45.5736 10.75C45.5736 11.4918 45.8115 12.1045 46.2982 12.599C46.7849 13.0828 47.3905 13.33 48.0935 13.33C48.7424 13.33 49.2831 13.1473 49.7049 12.7925C50.1375 12.4378 50.3862 11.9325 50.4511 11.309H48.0935V10.535H51.2406C51.273 10.707 51.2838 10.8683 51.2838 11.0188V11.008Z"
          fill="white"
        />
        <path
          d="M56.2696 7.52502V8.32052H53.3171V10.363H55.9776V11.137H53.3171V13.1795H56.2696V13.975H52.4844V7.52502H56.2696Z"
          fill="white"
        />
        <path
          d="M59.7844 8.32052V13.975H58.9517V8.32052H57.1348V7.52502H61.5905V8.32052H59.7736H59.7844Z"
          fill="white"
        />
        <path d="M65.657 13.975H64.8242V7.52502H65.657V13.975Z" fill="white" />
        <path
          d="M69.3552 8.32052V13.975H68.5225V8.32052H66.7056V7.52502H71.1613V8.32052H69.3444H69.3552Z"
          fill="white"
        />
        <path
          d="M51.2838 11.008C51.2838 11.911 51.0135 12.6313 50.4727 13.158C49.8671 13.7923 49.0776 14.1148 48.0935 14.1148C47.1093 14.1148 46.3523 13.7923 45.7034 13.1473C45.0545 12.5023 44.7192 11.696 44.7192 10.75C44.7192 9.804 45.0437 8.99775 45.7034 8.35275C46.3523 7.70775 47.1526 7.38525 48.0935 7.38525C48.5693 7.38525 49.0235 7.47125 49.4453 7.6325C49.8671 7.8045 50.2132 8.041 50.4835 8.342L49.8887 8.93325C49.6941 8.69675 49.4345 8.50325 49.1101 8.37425C48.7856 8.24525 48.4504 8.17 48.0935 8.17C47.3905 8.17 46.7849 8.41725 46.2982 8.901C45.8115 9.3955 45.5736 10.0083 45.5736 10.75C45.5736 11.4918 45.8115 12.1045 46.2982 12.599C46.7849 13.0828 47.3905 13.33 48.0935 13.33C48.7424 13.33 49.2831 13.1473 49.7049 12.7925C50.1375 12.4378 50.3862 11.9325 50.4511 11.309H48.0935V10.535H51.2406C51.273 10.707 51.2838 10.8683 51.2838 11.0188V11.008Z"
          stroke="white"
          strokeWidth="0.2"
          strokeMiterlimit="10"
        />
        <path
          d="M56.2696 7.52502V8.32052H53.3171V10.363H55.9776V11.137H53.3171V13.1795H56.2696V13.975H52.4844V7.52502H56.2696V7.52502Z"
          stroke="white"
          strokeWidth="0.2"
          strokeMiterlimit="10"
        />
        <path
          d="M59.7844 8.32052V13.975H58.9517V8.32052H57.1348V7.52502H61.5905V8.32052H59.7736H59.7844Z"
          stroke="white"
          strokeWidth="0.2"
          strokeMiterlimit="10"
        />
        <path
          d="M65.657 13.975H64.8242V7.52502H65.657V13.975Z"
          stroke="white"
          strokeWidth="0.2"
          strokeMiterlimit="10"
        />
        <path
          d="M69.3552 8.32052V13.975H68.5225V8.32052H66.7056V7.52502H71.1613V8.32052H69.3444H69.3552Z"
          stroke="white"
          strokeWidth="0.2"
          strokeMiterlimit="10"
        />
        <path
          d="M80.5595 10.75C80.5595 11.7068 80.2351 12.5023 79.597 13.1473C78.9481 13.7923 78.1586 14.1148 77.2178 14.1148C76.2769 14.1148 75.4874 13.7923 74.8385 13.1473C74.2004 12.5023 73.876 11.7068 73.876 10.75C73.876 9.79325 74.2004 8.99775 74.8385 8.35275C75.4766 7.70775 76.2661 7.38525 77.2178 7.38525C78.1695 7.38525 78.9481 7.70775 79.597 8.3635C80.2351 9.0085 80.5595 9.804 80.5595 10.75ZM74.7412 10.75C74.7412 11.4918 74.9791 12.1153 75.4441 12.599C75.92 13.0828 76.5148 13.33 77.2178 13.33C77.9207 13.33 78.5155 13.0828 78.9806 12.599C79.4564 12.1153 79.6944 11.5025 79.6944 10.75C79.6944 9.9975 79.4564 9.38475 78.9806 8.901C78.5047 8.41725 77.9207 8.17 77.2178 8.17C76.5148 8.17 75.92 8.41725 75.4441 8.901C74.9683 9.38475 74.7412 10.0083 74.7412 10.75Z"
          fill="white"
        />
        <path
          d="M82.5603 13.975H81.7275V7.52502H82.7441L85.9021 12.5453H85.9345L85.9021 11.2983V7.52502H86.7348V13.975H85.8696L82.5711 8.71827H82.5387L82.5711 9.96527V13.9858L82.5603 13.975Z"
          fill="white"
        />
        <path
          d="M80.5595 10.75C80.5595 11.7068 80.2351 12.5023 79.597 13.1473C78.9481 13.7923 78.1586 14.1148 77.2178 14.1148C76.2769 14.1148 75.4874 13.7923 74.8385 13.1473C74.2004 12.5023 73.876 11.7068 73.876 10.75C73.876 9.79325 74.2004 8.99775 74.8385 8.35275C75.4766 7.70775 76.2661 7.38525 77.2178 7.38525C78.1695 7.38525 78.9481 7.70775 79.597 8.3635C80.2351 9.0085 80.5595 9.804 80.5595 10.75ZM74.7412 10.75C74.7412 11.4918 74.9791 12.1153 75.4441 12.599C75.92 13.0828 76.5148 13.33 77.2178 13.33C77.9207 13.33 78.5155 13.0828 78.9806 12.599C79.4564 12.1153 79.6944 11.5025 79.6944 10.75C79.6944 9.9975 79.4564 9.38475 78.9806 8.901C78.5047 8.41725 77.9207 8.17 77.2178 8.17C76.5148 8.17 75.92 8.41725 75.4441 8.901C74.9683 9.38475 74.7412 10.0083 74.7412 10.75Z"
          stroke="white"
          strokeWidth="0.2"
          strokeMiterlimit="10"
        />
        <path
          d="M82.5603 13.975H81.7275V7.52502H82.7441L85.9021 12.5453H85.9345L85.9021 11.2983V7.52502H86.7348V13.975H85.8696L82.5711 8.71827H82.5387L82.5711 9.96527V13.9858L82.5603 13.975Z"
          stroke="white"
          strokeWidth="0.2"
          strokeMiterlimit="10"
        />
        <path
          d="M73.6924 23.3812C71.1509 23.3812 69.0744 25.3055 69.0744 27.95C69.0744 30.5945 71.1509 32.5187 73.6924 32.5187C76.2338 32.5187 78.3103 30.5837 78.3103 27.95C78.3103 25.3162 76.2338 23.3812 73.6924 23.3812ZM73.6924 30.7235C72.2972 30.7235 71.0968 29.584 71.0968 27.95C71.0968 26.316 72.2972 25.1765 73.6924 25.1765C75.0875 25.1765 76.2879 26.3052 76.2879 27.95C76.2879 29.5947 75.0875 30.7235 73.6924 30.7235ZM63.6238 23.3812C61.0823 23.3812 59.0058 25.3055 59.0058 27.95C59.0058 30.5945 61.0823 32.5187 63.6238 32.5187C66.1652 32.5187 68.2417 30.5837 68.2417 27.95C68.2417 25.3162 66.1652 23.3812 63.6238 23.3812ZM63.6238 30.7235C62.2287 30.7235 61.0282 29.584 61.0282 27.95C61.0282 26.316 62.2287 25.1765 63.6238 25.1765C65.0189 25.1765 66.2193 26.3052 66.2193 27.95C66.2193 29.5947 65.0189 30.7235 63.6238 30.7235ZM51.6409 24.7787V26.7137H56.3129C56.1724 27.7995 55.8047 28.6057 55.2531 29.154C54.5718 29.8312 53.5119 30.573 51.6518 30.573C48.775 30.573 46.5255 28.2725 46.5255 25.413C46.5255 22.5535 48.775 20.253 51.6518 20.253C53.1983 20.253 54.3338 20.855 55.1666 21.6397L56.5401 20.2745C55.3721 19.1672 53.8255 18.318 51.6409 18.318C47.7044 18.318 44.395 21.5 44.395 25.4237C44.395 29.3475 47.7044 32.5295 51.6409 32.5295C53.7715 32.5295 55.3721 31.8415 56.6266 30.5407C57.9135 29.2615 58.3137 27.4555 58.3137 26.0042C58.3137 25.5527 58.2812 25.1335 58.2055 24.7895H51.6409V24.7787ZM100.643 26.273C100.264 25.2517 99.0964 23.3597 96.7063 23.3597C94.3162 23.3597 92.3695 25.2087 92.3695 27.9285C92.3695 30.487 94.3162 32.4972 96.9334 32.4972C99.0423 32.4972 100.264 31.218 100.762 30.4762L99.1937 29.4335C98.6746 30.1967 97.9608 30.702 96.9334 30.702C95.906 30.702 95.1706 30.2397 94.7055 29.3152L100.859 26.789L100.654 26.273H100.643ZM94.3703 27.7995C94.3162 26.0365 95.7438 25.1335 96.7712 25.1335C97.5715 25.1335 98.2528 25.5312 98.4799 26.101L94.3703 27.7995ZM89.3738 32.2285H91.3962V18.791H89.3738V32.2285ZM86.0645 24.381H85.9996C85.5454 23.8435 84.6802 23.3597 83.5771 23.3597C81.2735 23.3597 79.1646 25.37 79.1646 27.95C79.1646 30.53 81.2735 32.508 83.5771 32.508C84.6694 32.508 85.5454 32.0242 85.9996 31.4652H86.0645V32.121C86.0645 33.8732 85.1236 34.8085 83.6095 34.8085C82.3767 34.8085 81.6088 33.927 81.2952 33.1852L79.5324 33.9162C80.0407 35.131 81.3817 36.6145 83.6095 36.6145C85.978 36.6145 87.9787 35.2277 87.9787 31.8522V23.6392H86.0645V24.381ZM83.7501 30.702C82.355 30.702 81.187 29.541 81.187 27.95C81.187 26.359 82.355 25.1657 83.7501 25.1657C85.1452 25.1657 86.2051 26.3482 86.2051 27.95C86.2051 29.5517 85.1236 30.702 83.7501 30.702ZM110.117 18.791H105.282V32.2285H107.305V27.133H110.127C112.366 27.133 114.562 25.5205 114.562 22.962C114.562 20.4035 112.366 18.791 110.127 18.791H110.117ZM110.171 25.2732H107.305V20.6615H110.171C111.685 20.6615 112.539 21.9085 112.539 22.962C112.539 24.0155 111.685 25.2625 110.171 25.2625V25.2732ZM122.64 23.349C121.18 23.349 119.666 23.994 119.039 25.4022L120.834 26.144C121.213 25.4022 121.926 25.155 122.673 25.155C123.711 25.155 124.782 25.7785 124.792 26.8857V27.0255C124.425 26.8212 123.646 26.5095 122.683 26.5095C120.748 26.5095 118.79 27.563 118.79 29.5302C118.79 31.3255 120.369 32.4865 122.143 32.4865C123.495 32.4865 124.252 31.8845 124.717 31.175H124.782V32.207H126.728V27.0577C126.728 24.6712 124.933 23.3382 122.619 23.3382H122.64V23.349ZM122.391 30.7235C121.732 30.7235 120.813 30.3902 120.813 29.584C120.813 28.552 121.959 28.1542 122.954 28.1542C123.841 28.1542 124.262 28.3477 124.792 28.6057C124.641 29.8527 123.559 30.7342 122.391 30.7342V30.7235ZM133.834 23.6392L131.519 29.4657H131.454L129.053 23.6392H126.88L130.481 31.7877L128.426 36.3135H130.535L136.083 23.6392H133.834ZM115.654 32.2392H117.676V18.8017H115.654V32.2392Z"
          fill="white"
        />
        <path
          d="M22.4079 20.8765L10.8901 33.024C11.247 34.3462 12.4583 35.3137 13.8967 35.3137C14.4698 35.3137 15.0106 35.1632 15.4756 34.8837L15.5081 34.8622L28.4642 27.434L22.3971 20.8657H22.4079V20.8765Z"
          fill="#EA4335"
        />
        <path
          d="M34.0555 18.8125H34.0447L28.4535 15.5767L22.1484 21.156L28.4751 27.4447L34.0447 24.252C35.0181 23.7252 35.6778 22.704 35.6778 21.5322C35.6778 20.3605 35.0289 19.3392 34.0555 18.8232V18.8125Z"
          fill="#FBBC04"
        />
        <path
          d="M10.8904 9.97595C10.8255 10.234 10.7822 10.492 10.7822 10.7715V32.2392C10.7822 32.5187 10.8147 32.7767 10.8904 33.0347L22.7975 21.199L10.8904 9.97595Z"
          fill="#4285F4"
        />
        <path
          d="M22.4944 21.5L28.4534 15.5767L15.5081 8.11623C15.043 7.83673 14.4915 7.67548 13.8967 7.67548C12.4583 7.67548 11.247 8.65373 10.8901 9.96523L22.4944 21.4892V21.5Z"
          fill="#34A853"
        />
      </g>
      <defs>
        <clipPath id="clip0_1259_377206">
          <rect width="146" height="43" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const NoImagePlaceholder = (props: IconProps) => {
  return (
    <svg className="placeholder-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5" {...props}>
      <path d="M324.5 212.7H203c-1.6 0-2.8 1.3-2.8 2.8V308c0 1.6 1.3 2.8 2.8 2.8h121.6c1.6 0 2.8-1.3 2.8-2.8v-92.5c0-1.6-1.3-2.8-2.9-2.8zm1.1 95.3c0 .6-.5 1.1-1.1 1.1H203c-.6 0-1.1-.5-1.1-1.1v-92.5c0-.6.5-1.1 1.1-1.1h121.6c.6 0 1.1.5 1.1 1.1V308z" />
      <path d="M210.4 299.5H240v.1s.1 0 .2-.1h75.2v-76.2h-105v76.2zm1.8-7.2l20-20c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l1.5 1.5 16.8 16.8c-12.9 3.3-20.7 6.3-22.8 7.2h-27.7v-5.5zm101.5-10.1c-20.1 1.7-36.7 4.8-49.1 7.9l-16.9-16.9 26.3-26.3c1.6-1.6 3.8-2.5 6.1-2.5s4.5.9 6.1 2.5l27.5 27.5v7.8zm-68.9 15.5c9.7-3.5 33.9-10.9 68.9-13.8v13.8h-68.9zm68.9-72.7v46.8l-26.2-26.2c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-26.3 26.3-.9-.9c-1.9-1.9-4.5-3-7.3-3s-5.4 1.1-7.3 3l-18.8 18.8V225h101.4z" />
      <path d="M232.8 254c4.6 0 8.3-3.7 8.3-8.3s-3.7-8.3-8.3-8.3-8.3 3.7-8.3 8.3 3.7 8.3 8.3 8.3zm0-14.9c3.6 0 6.6 2.9 6.6 6.6s-2.9 6.6-6.6 6.6-6.6-2.9-6.6-6.6 3-6.6 6.6-6.6z" />
    </svg>
  )
}

export const Location = () => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="icon/general/location">
        <path
          id="Union"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.53333 2.81793C11.2594 3.07059 13.4294 5.24063 13.6821 7.96667H15.4667V9.03334H13.6821C13.4294 11.7594 11.2594 13.9294 8.53333 14.1821L8.53333 15.9667H7.46666V14.1821C4.74062 13.9294 2.57058 11.7594 2.31792 9.03334H0.533325V7.96667H2.31792C2.57058 5.24063 4.74062 3.07059 7.46666 2.81793V1.03334H8.53333L8.53333 2.81793ZM7.99999 13.46C10.7393 13.46 12.96 11.2393 12.96 8.50001C12.96 5.76067 10.7393 3.54001 7.99999 3.54001C5.26066 3.54001 3.03999 5.76067 3.03999 8.50001C3.03999 11.2393 5.26066 13.46 7.99999 13.46ZM8.53333 8.50001C8.53333 8.79456 8.29454 9.03334 7.99999 9.03334C7.70544 9.03334 7.46666 8.79456 7.46666 8.50001C7.46666 8.20546 7.70544 7.96667 7.99999 7.96667C8.29454 7.96667 8.53333 8.20546 8.53333 8.50001ZM9.59999 8.50001C9.59999 9.38366 8.88365 10.1 7.99999 10.1C7.11634 10.1 6.39999 9.38366 6.39999 8.50001C6.39999 7.61635 7.11634 6.90001 7.99999 6.90001C8.88365 6.90001 9.59999 7.61635 9.59999 8.50001Z"
          fill="black"
        />
      </g>
    </svg>
  )
}

export const MapMarker = () => {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.0002 6.66675C15.724 6.66674 15.5002 6.89059 15.5002 7.16674C15.5002 7.44288 15.724 7.66674 16.0002 7.66675L16.0002 6.66675ZM18.5508 7.66808L18.7402 7.20534L18.7401 7.20527L18.5508 7.66808ZM21.5428 10.1001L21.1285 10.38L21.1288 10.3805L21.5428 10.1001ZM22.6668 13.7534H23.1668L23.1668 13.7526L22.6668 13.7534ZM20.7135 18.4107L20.3099 18.1156C20.3038 18.1239 20.298 18.1324 20.2925 18.1411L20.7135 18.4107ZM18.7775 21.4334L18.3564 21.1637L18.3547 21.1665L18.7775 21.4334ZM16.0002 25.8334L15.5776 26.1007C15.6693 26.2457 15.8289 26.3335 16.0004 26.3334C16.1719 26.3333 16.3314 26.2453 16.423 26.1003L16.0002 25.8334ZM13.2228 21.4427L13.6454 21.1755L13.6441 21.1734L13.2228 21.4427ZM11.2868 18.4147L11.7081 18.1454C11.7026 18.1368 11.6968 18.1283 11.6907 18.12L11.2868 18.4147ZM9.3335 13.7574L8.8335 13.7569V13.7574H9.3335ZM10.4575 10.1001L10.8715 10.3805L10.8715 10.3804L10.4575 10.1001ZM13.4495 7.67208L13.6386 8.13494L13.6395 8.13459L13.4495 7.67208ZM16.0009 7.66675C16.277 7.66634 16.5006 7.44215 16.5002 7.16601C16.4998 6.88987 16.2756 6.66634 15.9994 6.66675L16.0009 7.66675ZM16.0002 15.4494C15.724 15.4494 15.5002 15.6733 15.5002 15.9494C15.5002 16.2256 15.724 16.4494 16.0002 16.4494V15.4494ZM16.0002 11.0574C15.724 11.0574 15.5002 11.2813 15.5002 11.5574C15.5002 11.8336 15.724 12.0574 16.0002 12.0574V11.0574ZM16.0125 16.4573C16.2885 16.4505 16.5068 16.2212 16.5 15.9451C16.4932 15.669 16.2639 15.4508 15.9878 15.4576L16.0125 16.4573ZM14.0533 14.8757L14.4843 14.6221L14.0533 14.8757ZM14.0533 12.6485L13.6224 12.3949L14.0533 12.6485ZM15.9878 12.0666C16.2639 12.0734 16.4932 11.8551 16.5 11.5791C16.5068 11.303 16.2885 11.0737 16.0125 11.0669L15.9878 12.0666ZM16.0002 7.66675C16.81 7.66677 17.612 7.82441 18.3616 8.13089L18.7401 7.20527C17.8704 6.84968 16.9398 6.66677 16.0002 6.66675L16.0002 7.66675ZM18.3614 8.13082C19.4856 8.59093 20.4485 9.37355 21.1285 10.38L21.9571 9.82014C21.1665 8.65007 20.0471 7.74024 18.7402 7.20534L18.3614 8.13082ZM21.1288 10.3805C21.8034 11.3764 22.1649 12.5513 22.1668 13.7542L23.1668 13.7526C23.1646 12.3503 22.7432 10.9807 21.9568 9.81969L21.1288 10.3805ZM22.1668 13.7534C22.1668 14.5646 22.0395 15.1812 21.7571 15.8179C21.4673 16.4712 21.0081 17.1609 20.3099 18.1156L21.1171 18.7059C21.8162 17.75 22.3337 16.9843 22.6712 16.2233C23.0162 15.4456 23.1668 14.6889 23.1668 13.7534H22.1668ZM20.2925 18.1411L18.3565 21.1637L19.1985 21.7031L21.1345 18.6804L20.2925 18.1411ZM18.3547 21.1665L15.5773 25.5665L16.423 26.1003L19.2003 21.7003L18.3547 21.1665ZM16.4227 25.5661L13.6454 21.1755L12.8003 21.71L15.5776 26.1007L16.4227 25.5661ZM13.6441 21.1734L11.7081 18.1454L10.8656 18.6841L12.8016 21.7121L13.6441 21.1734ZM11.6907 18.12C10.9923 17.1629 10.533 16.4732 10.2432 15.8202C9.96082 15.1841 9.8335 14.5686 9.8335 13.7574H8.8335C8.8335 14.6929 8.98418 15.4487 9.32916 16.2259C9.66665 16.9863 10.1841 17.7519 10.8829 18.7095L11.6907 18.12ZM9.8335 13.7579C9.83469 12.5537 10.1962 11.3775 10.8715 10.3805L10.0435 9.81969C9.25631 10.9819 8.83489 12.3532 8.8335 13.7569L9.8335 13.7579ZM10.8715 10.3804C11.5521 9.37534 12.5149 8.59405 13.6386 8.13494L13.2604 7.20922C11.954 7.74297 10.8348 8.65125 10.0435 9.81973L10.8715 10.3804ZM13.6395 8.13459C14.3888 7.82685 15.1908 7.66794 16.0009 7.66675L15.9994 6.66675C15.0596 6.66813 14.1289 6.8525 13.2595 7.20957L13.6395 8.13459ZM16.0002 16.4494C16.9634 16.4494 17.8534 15.9356 18.335 15.1014L17.4689 14.6014C17.166 15.1262 16.6061 15.4494 16.0002 15.4494V16.4494ZM18.335 15.1014C18.8166 14.2673 18.8166 13.2396 18.335 12.4054L17.4689 12.9054C17.7719 13.4302 17.7719 14.0767 17.4689 14.6014L18.335 15.1014ZM18.335 12.4054C17.8534 11.5713 16.9634 11.0574 16.0002 11.0574V12.0574C16.6061 12.0574 17.166 12.3807 17.4689 12.9054L18.335 12.4054ZM15.9878 15.4576C15.3721 15.4727 14.7966 15.1529 14.4843 14.6221L13.6224 15.1292C14.1189 15.973 15.0338 16.4814 16.0125 16.4573L15.9878 15.4576ZM14.4843 14.6221C14.172 14.0913 14.172 13.4329 14.4843 12.902L13.6224 12.3949C13.1259 13.2388 13.1259 14.2854 13.6224 15.1292L14.4843 14.6221ZM14.4843 12.902C14.7966 12.3712 15.3721 12.0514 15.9878 12.0666L16.0125 11.0669C15.0338 11.0428 14.1189 11.5511 13.6224 12.3949L14.4843 12.902Z"
        fill="white"
      />
    </svg>
  )
}

export const Sparkels = () => {
  return (
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6668 21.8334C14.4493 18.9828 12.1841 16.7176 9.3335 16.5001C12.1841 16.2826 14.4493 14.0173 14.6668 11.1667C14.8843 14.0173 17.1496 16.2826 20.0002 16.5001C17.1496 16.7176 14.8843 18.9828 14.6668 21.8334V21.8334Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3337 25.8333C21.2246 24.4082 20.0922 23.2757 18.667 23.1667C20.0922 23.0576 21.2246 21.9252 21.3337 20.5C21.4427 21.9252 22.5752 23.0576 24.0003 23.1667C22.5752 23.2757 21.4427 24.4082 21.3337 25.8333Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3337 7.16675C21.2246 8.59191 20.0922 9.72439 18.667 9.83341C20.0922 9.94244 21.2246 11.0749 21.3337 12.5001C21.4427 11.0749 22.5752 9.94244 24.0003 9.83341C22.5752 9.72439 21.4427 8.59191 21.3337 7.16675Z"
        stroke="white"
      />
    </svg>
  )
}

export const PhoneIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const SameDayDelivery = () => {
  return <Typography variant="caption">Same Day Delivery*</Typography>
}

export const ClickAndCollect = () => {
  return (
    <svg
      width="92"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <path fill="url(#a)" d="M0 .5h92v10H0z" />
      <defs>
        <pattern id="a" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#b" transform="matrix(.00303 0 0 .02788 0 -.044)" />
        </pattern>
        <image
          id="b"
          width="330"
          height="39"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export const SustainableSalon = () => {
  return (
    <svg width="111" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#a)" fill="#000">
        <path d="M.423 7.26a.555.555 0 0 0 .671-.407 6.83 6.83 0 0 1 .663-1.68 6.93 6.93 0 0 1 1.744-2.07 6.79 6.79 0 0 1 3.76-1.47L7.364.518A7.874 7.874 0 0 0 2.81 2.234 8.054 8.054 0 0 0 .016 6.59a.555.555 0 0 0 .407.67Z" />
        <path d="M10.448 2.15a6.86 6.86 0 0 1 3.375 3.059l.416-1.41a7.861 7.861 0 0 0-3.084-2.548 7.91 7.91 0 0 0-.7-.29A7.965 7.965 0 0 0 7.78.5c-.14 0-.279.01-.418.018l-.1 1.115a6.835 6.835 0 0 1 3.187.517Z" />
        <path d="M15.137 9.738a.555.555 0 0 0-.671.407 6.924 6.924 0 0 1-3.39 4.405 6.78 6.78 0 0 1-2.801.819A6.804 6.804 0 0 1 3.5 13.897c-.018-.015-.034-.03-.052-.042a7.047 7.047 0 0 1-2.146-3.019h2.566l.043.067.024.04c.026.042.052.081.08.12l.016.024c.022.032.042.064.067.096l.032.042.056.074.037.046.055.068.038.045.058.067.039.043c.021.023.042.047.065.07l.014.014.02.022c.033.034.067.068.102.101l.015.015c.03.03.06.057.09.085l.04.035c.023.02.047.042.07.06l.045.038c.023.02.046.038.069.056l.046.037.072.054.046.035.08.056.04.028c.042.027.08.054.122.08.727.46 1.57.704 2.43.703.032 0 .063-.003.095-.004a4.557 4.557 0 0 0 4.214-3.087c0-.006.003-.012.004-.019l.007-.035c.002-.012 0-.015.002-.023s.002-.022.002-.032v-.055c0-.009 0-.016-.002-.024-.003-.009 0-.02-.004-.029-.003-.009-.003-.016-.004-.024l-.006-.028c-.002-.01-.005-.016-.008-.024l-.008-.027-.01-.023-.01-.026-.012-.02-.013-.027-.013-.02-.017-.024-.015-.019-.019-.023a.806.806 0 0 0-.017-.017l-.02-.021-.019-.016-.023-.018-.02-.015-.025-.016-.022-.012-.027-.015-.024-.01-.026-.01-4.816-1.755-.422-.154-.268-.096-.485-.177-.954-.348a3.45 3.45 0 0 1 3.349-1.707 3.42 3.42 0 0 1 2.72 1.893.556.556 0 0 0 .497.309h3.643a.555.555 0 0 0 .539-.69A7.987 7.987 0 0 0 14.24 3.8l-.415 1.41c.168.308.312.628.431.958H11.69a4.576 4.576 0 0 0-3.91-2.222 4.57 4.57 0 0 0-4.265 2.96l-.008.026-.008.026-.006.028-.005.027-.003.028c0 .01 0 .018-.003.026-.003.009 0 .02 0 .029v.026c0 .009 0 .018.003.028.002.009 0 .017.002.026.003.008.003.018.006.027l.004.025.008.027.007.024.01.025.01.025.013.023a.325.325 0 0 0 .027.046l.014.023.016.02.017.022.019.02a.41.41 0 0 0 .019.019l.02.017.02.018.025.016.021.015.026.014c.007.005.015.01.023.013l.028.012.022.01h.003l.186.073 1.286.465.707.258 1.117.409 3.658 1.332a2.79 2.79 0 0 1-.059.103l-.012.02-.054.087-.024.036-.046.068-.027.039-.046.063-.03.038-.048.061-.03.037-.053.062-.028.032c-.022.024-.043.048-.066.071l-.018.02-.088.087-.017.016a3.942 3.942 0 0 1-.074.068l-.03.027-.064.055-.035.028-.061.05-.037.028-.064.047-.037.026a2.078 2.078 0 0 1-.102.069 4.12 4.12 0 0 1-.09.056l-.015.01a2.838 2.838 0 0 1-.108.061l-.025.013c-.028.015-.056.03-.084.043l-.038.018a1.634 1.634 0 0 1-.074.035l-.042.02-.072.03-.044.019-.073.028-.042.016-.08.028-.038.013a3.295 3.295 0 0 1-.108.032l-.011.004c-.04.01-.081.021-.122.03l-.035.009-.085.019-.046.009-.077.014-.05.007-.076.01-.05.007-.08.008-.048.004-.084.005h-.043l-.126.003c-.033 0-.065-.003-.098-.004a3.413 3.413 0 0 1-2.669-1.393 3.499 3.499 0 0 1-.318-.517c0-.003-.003-.006-.005-.01l-.008-.015-.011-.019-.008-.012-.006-.01-.016-.021-.008-.01-.004-.006-.007-.009-.018-.02-.01-.01-.007-.007-.018-.017-.014-.012-.003-.003-.003-.002-.028-.022-.009-.005-.01-.008-.022-.013-.012-.007-.009-.005-.032-.016h-.007l-.017-.006-.024-.01-.008-.002-.014-.004-.026-.007-.011-.003h-.019l-.027-.005H.555c-.017 0-.034 0-.051.003H.496a.397.397 0 0 0-.046.006l-.012.003a.48.48 0 0 0-.043.011l-.013.004a.58.58 0 0 0-.038.014l-.012.005a.522.522 0 0 0-.035.017l-.01.005a.554.554 0 0 0-.037.023l-.01.006a.461.461 0 0 0-.037.028l-.005.004a.595.595 0 0 0-.034.031l-.002.003a.502.502 0 0 0-.032.035H.127l-.006.008-.022.029-.005.008a.505.505 0 0 0-.022.036l-.004.007a.55.55 0 0 0-.018.039c0 .004-.004.008-.006.012a.634.634 0 0 0-.015.04l-.003.014a.553.553 0 0 0-.019.098v.003a.539.539 0 0 0-.002.052v.004c0 .016 0 .033.002.05v.009c0 .015.004.03.007.046 0 .004 0 .008.003.012l.003.013c.168.678.424 1.33.762 1.94a8.04 8.04 0 0 0 2.032 2.415c.05.04.103.074.153.112A7.897 7.897 0 0 0 7.784 16.5a7.947 7.947 0 0 0 2.678-.46c.07-.025.136-.056.204-.085a7.947 7.947 0 0 0 2.089-1.192 8.042 8.042 0 0 0 2.794-4.355.555.555 0 0 0-.412-.67ZM22.779 8.162c-.87-.284-1.372-.58-1.372-1.248 0-.506.426-1.05 1.363-1.05.62 0 1.161.352 1.226.395.042.027.09.041.14.042a.257.257 0 0 0 .2-.116l.01-.017a.677.677 0 0 1 .064-.104c.076-.119.052-.247-.065-.336a2.956 2.956 0 0 0-1.567-.465c-1.466 0-1.998.992-1.998 1.66 0 1.114.797 1.486 1.762 1.827 1.049.356 1.617.682 1.617 1.38 0 .574-.62 1.057-1.352 1.057-.747 0-1.323-.448-1.542-.646a.228.228 0 0 0-.152-.062c-.104 0-.175.082-.204.115l-.08.106c-.09.124-.074.237.042.332.135.127.863.747 1.928.747 1.093 0 2.016-.764 2.016-1.668-.003-1.156-.964-1.581-2.036-1.949ZM30.42 5.35h-.175c-.143 0-.235.09-.235.227v3.74c0 1.1-.713 1.837-1.775 1.837-1.05 0-1.756-.742-1.756-1.845V5.577a.23.23 0 0 0-.226-.226h-.182a.229.229 0 0 0-.226.226v3.775c0 1.43.983 2.429 2.392 2.429 1.418 0 2.408-.999 2.408-2.429V5.577a.23.23 0 0 0-.226-.226ZM33.806 8.162c-.868-.284-1.371-.58-1.371-1.248 0-.506.426-1.05 1.363-1.05.615 0 1.16.351 1.225.395.042.027.09.041.14.042a.256.256 0 0 0 .2-.116l.01-.018a.711.711 0 0 1 .064-.103c.077-.12.053-.247-.065-.336a2.956 2.956 0 0 0-1.566-.465c-1.467 0-1.999.992-1.999 1.66 0 1.114.797 1.486 1.762 1.827 1.049.356 1.618.682 1.618 1.38 0 .574-.621 1.057-1.355 1.057-.749 0-1.324-.449-1.542-.646-.11-.095-.236-.084-.355.053l-.08.106c-.09.123-.075.237.042.332.135.127.862.747 1.928.747 1.093 0 2.016-.764 2.016-1.668 0-1.156-.962-1.581-2.035-1.949ZM38.25 11.693c.145 0 .254-.097.254-.226V5.952h1.564a.223.223 0 0 0 .225-.227v-.148a.225.225 0 0 0-.225-.226h-3.756a.223.223 0 0 0-.226.226v.13c0 .227.173.245.226.245h1.556v5.515a.23.23 0 0 0 .226.226h.157ZM42.988 5.342a.22.22 0 0 0-.214-.123h-.026a.234.234 0 0 0-.208.127l-2.692 6.09a.19.19 0 0 0 .012.184.179.179 0 0 0 .154.072h.245a.254.254 0 0 0 .225-.146l.672-1.54h3.188l.68 1.546a.253.253 0 0 0 .223.14h.227a.195.195 0 0 0 .17-.072c.034-.048.04-.108.012-.19l-2.668-6.088Zm1.11 4.099H41.41l1.356-3.145 1.332 3.145ZM46.833 5.35h-.191a.229.229 0 0 0-.227.227v5.89a.23.23 0 0 0 .227.226h.183a.228.228 0 0 0 .234-.226v-5.89a.23.23 0 0 0-.226-.226ZM53.567 5.35h-.175a.229.229 0 0 0-.226.227v4.941l-4.034-5.255h-.201a.233.233 0 0 0-.243.226v5.978a.23.23 0 0 0 .225.226h.166a.229.229 0 0 0 .226-.226v-4.99c4.01 5.304 4.046 5.304 4.123 5.304h.114c.146 0 .254-.095.254-.226V5.577a.23.23 0 0 0-.23-.227ZM57.691 5.342a.22.22 0 0 0-.214-.123h-.025a.235.235 0 0 0-.208.127l-2.692 6.09a.191.191 0 0 0 .012.184.18.18 0 0 0 .154.073h.244a.258.258 0 0 0 .226-.146l.67-1.541h3.188l.68 1.545a.254.254 0 0 0 .223.142h.227a.195.195 0 0 0 .17-.073c.034-.048.04-.108.012-.19l-2.667-6.088Zm1.11 4.099h-2.687l1.356-3.144 1.331 3.144ZM65.317 9.92c0-.694-.35-1.221-.971-1.48a1.606 1.606 0 0 0 .781-1.395c0-1.015-.771-1.694-1.92-1.694h-1.859a.23.23 0 0 0-.226.226v5.89a.228.228 0 0 0 .226.226h1.939c1.193 0 2.03-.729 2.03-1.773Zm-3.563-1.738V5.96h1.451c.783 0 1.25.412 1.25 1.102 0 .68-.467 1.12-1.188 1.12h-1.513Zm2.893 1.73c0 .7-.546 1.19-1.328 1.19h-1.573v-2.32h1.52c.688 0 1.383.35 1.383 1.13h-.002ZM69.868 11.101h-2.674V5.577a.228.228 0 0 0-.217-.226h-.192a.229.229 0 0 0-.226.226v5.89a.229.229 0 0 0 .226.226h3.085a.213.213 0 0 0 .207-.125.21.21 0 0 0 .018-.083v-.159c-.002-.195-.143-.225-.227-.225ZM74.556 5.35h-3.502a.229.229 0 0 0-.225.227v5.89a.229.229 0 0 0 .225.226h3.502a.229.229 0 0 0 .226-.226v-.141a.229.229 0 0 0-.226-.226h-3.084V8.74h2.656a.229.229 0 0 0 .226-.227v-.147a.229.229 0 0 0-.226-.226h-2.656V5.952h3.084a.229.229 0 0 0 .226-.227v-.148a.23.23 0 0 0-.226-.226ZM80.345 8.162c-.869-.285-1.372-.58-1.372-1.248 0-.507.427-1.05 1.364-1.05.618 0 1.16.351 1.225.395.043.026.091.04.141.042a.254.254 0 0 0 .199-.116l.01-.017a.836.836 0 0 1 .065-.104.238.238 0 0 0-.065-.336c-.468-.3-1.011-.46-1.567-.465-1.466 0-1.998.992-1.998 1.66 0 1.114.797 1.486 1.762 1.827 1.049.356 1.617.682 1.617 1.38 0 .573-.62 1.057-1.354 1.057-.749 0-1.325-.449-1.542-.646a.229.229 0 0 0-.152-.06c-.106 0-.176.08-.204.114l-.08.106c-.09.123-.075.236.042.332.135.127.863.746 1.927.746 1.093 0 2.016-.763 2.016-1.668 0-1.156-.962-1.581-2.034-1.949ZM85.754 5.342a.22.22 0 0 0-.214-.123h-.026a.234.234 0 0 0-.207.127l-2.693 6.09a.19.19 0 0 0 .012.184.18.18 0 0 0 .155.073h.244a.253.253 0 0 0 .226-.146l.669-1.541h3.19l.68 1.546a.253.253 0 0 0 .222.14h.227a.194.194 0 0 0 .169-.073c.034-.048.04-.108.012-.19l-2.666-6.087Zm1.11 4.099h-2.69l1.357-3.144 1.333 3.144ZM92.491 11.101h-2.673V5.575a.228.228 0 0 0-.217-.226h-.19a.229.229 0 0 0-.226.226v5.89a.229.229 0 0 0 .225.226h3.085a.212.212 0 0 0 .225-.208v-.157c-.003-.196-.145-.225-.229-.225ZM96.176 5.263a3.263 3.263 0 0 0-3.257 3.268c0 1.822 1.43 3.25 3.257 3.25 1.826 0 3.264-1.428 3.264-3.25a3.272 3.272 0 0 0-3.264-3.268Zm2.657 3.268a2.645 2.645 0 0 1-5.096.997 2.65 2.65 0 0 1 1.941-3.607 2.645 2.645 0 0 1 3.155 2.61ZM105.509 5.35h-.174a.228.228 0 0 0-.159.067.228.228 0 0 0-.068.16v4.942l-3.999-5.212-.034-.042h-.203a.234.234 0 0 0-.244.225v5.977c.001.06.025.117.068.16a.228.228 0 0 0 .159.066h.165a.228.228 0 0 0 .226-.226v-4.99c4.01 5.304 4.046 5.304 4.123 5.304h.114c.146 0 .254-.095.254-.226v-5.98a.23.23 0 0 0-.228-.224ZM108.967 8.162c-.87-.285-1.373-.58-1.373-1.248 0-.507.427-1.05 1.364-1.05.618 0 1.161.351 1.225.395a.272.272 0 0 0 .141.042.257.257 0 0 0 .199-.116l.011-.018a.71.71 0 0 1 .064-.103.251.251 0 0 0 .038-.087.236.236 0 0 0-.103-.25 2.959 2.959 0 0 0-1.567-.466c-1.466 0-1.998.992-1.998 1.66 0 1.114.797 1.487 1.762 1.828 1.048.356 1.617.68 1.617 1.379 0 .573-.621 1.057-1.355 1.057-.747 0-1.323-.448-1.541-.645-.109-.095-.236-.087-.356.052l-.08.107c-.089.123-.074.237.042.332.135.127.862.746 1.927.746 1.093 0 2.016-.763 2.016-1.668.002-1.154-.961-1.58-2.033-1.947Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" transform="translate(0 .5)" d="M0 0h111v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const CalendarCheck = () => {
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.25 6.5C9.52614 6.5 9.75 6.27614 9.75 6C9.75 5.72386 9.52614 5.5 9.25 5.5V6.5ZM15.25 5.5C14.9739 5.5 14.75 5.72386 14.75 6C14.75 6.27614 14.9739 6.5 15.25 6.5V5.5ZM9.25 5.5C8.97386 5.5 8.75 5.72386 8.75 6C8.75 6.27614 8.97386 6.5 9.25 6.5V5.5ZM15.25 6.5C15.5261 6.5 15.75 6.27614 15.75 6C15.75 5.72386 15.5261 5.5 15.25 5.5V6.5ZM9.75 6C9.75 5.72386 9.52614 5.5 9.25 5.5C8.97386 5.5 8.75 5.72386 8.75 6H9.75ZM8.75 7C8.75 7.27614 8.97386 7.5 9.25 7.5C9.52614 7.5 9.75 7.27614 9.75 7H8.75ZM8.75 6C8.75 6.27614 8.97386 6.5 9.25 6.5C9.52614 6.5 9.75 6.27614 9.75 6H8.75ZM9.75 4C9.75 3.72386 9.52614 3.5 9.25 3.5C8.97386 3.5 8.75 3.72386 8.75 4H9.75ZM15.75 6C15.75 5.72386 15.5261 5.5 15.25 5.5C14.9739 5.5 14.75 5.72386 14.75 6H15.75ZM14.75 7C14.75 7.27614 14.9739 7.5 15.25 7.5C15.5261 7.5 15.75 7.27614 15.75 7H14.75ZM14.75 6C14.75 6.27614 14.9739 6.5 15.25 6.5C15.5261 6.5 15.75 6.27614 15.75 6H14.75ZM15.75 4C15.75 3.72386 15.5261 3.5 15.25 3.5C14.9739 3.5 14.75 3.72386 14.75 4H15.75ZM9.25 5.5C6.76472 5.5 4.75 7.51472 4.75 10H5.75C5.75 8.067 7.317 6.5 9.25 6.5V5.5ZM4.75 10V16H5.75V10H4.75ZM4.75 16C4.75 18.4853 6.76472 20.5 9.25 20.5V19.5C7.317 19.5 5.75 17.933 5.75 16H4.75ZM9.25 20.5H15.25V19.5H9.25V20.5ZM15.25 20.5C17.7353 20.5 19.75 18.4853 19.75 16H18.75C18.75 17.933 17.183 19.5 15.25 19.5V20.5ZM19.75 16V10H18.75V16H19.75ZM19.75 10C19.75 7.51472 17.7353 5.5 15.25 5.5V6.5C17.183 6.5 18.75 8.067 18.75 10H19.75ZM9.25 6.5H15.25V5.5L9.25 5.5V6.5ZM8.75 6V7H9.75V6H8.75ZM9.75 6V4H8.75V6H9.75ZM14.75 6V7H15.75V6H14.75ZM15.75 6V4H14.75V6H15.75Z"
        fill="white"
      />
      <path d="M8.25 13L10.25 16L16.25 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const MapPinIcon = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 8.33325C17.5 14.1666 10 19.1666 10 19.1666C10 19.1666 2.5 14.1666 2.5 8.33325C2.5 6.34413 3.29018 4.43647 4.6967 3.02995C6.10322 1.62343 8.01088 0.833252 10 0.833252C11.9891 0.833252 13.8968 1.62343 15.3033 3.02995C16.7098 4.43647 17.5 6.34413 17.5 8.33325Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ClockIcon = () => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 18.4287C6.12103 18.4287 2.57117 14.8789 2.57117 10.4999C2.57117 6.12091 6.12103 2.57104 10.5 2.57104C14.879 2.57104 18.4289 6.12091 18.4289 10.4999C18.4289 14.8789 14.879 18.4287 10.5 18.4287ZM10.5 17.3787C14.2991 17.3787 17.3789 14.299 17.3789 10.4999C17.3789 6.70081 14.2991 3.62104 10.5 3.62104C6.70093 3.62104 3.62117 6.70081 3.62117 10.4999C3.62117 14.299 6.70093 17.3787 10.5 17.3787ZM13.9118 13.1692L11.025 10.2824V4.96675C11.025 4.6768 10.79 4.44175 10.5 4.44175C10.2101 4.44175 9.97501 4.6768 9.97501 4.96675V10.4999C9.97501 10.6391 10.0303 10.7727 10.1288 10.8711L13.1693 13.9116C13.3743 14.1167 13.7067 14.1167 13.9118 13.9116C14.1168 13.7066 14.1168 13.3742 13.9118 13.1692Z"
        fill="black"
      />
    </svg>
  )
}

export const SustainableSalonIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="174" height="25" viewBox="0 0 174 25" fill="none">
      <path
        d="M0.871119 10.5617C1.09464 10.6166 1.33079 10.5804 1.52767 10.4612C1.72455 10.342 1.86605 10.1495 1.92107 9.92607C2.14878 9.00871 2.49741 8.12569 2.95781 7.3002C3.64577 6.05394 4.57265 4.95551 5.68544 4.06774C7.36751 2.72343 9.41838 1.92198 11.5662 1.76961L11.7235 0.027832C9.12725 0.148305 6.63562 1.08686 4.60509 2.70921C3.22377 3.81126 2.08998 5.19181 1.27749 6.76102C0.821946 7.63437 0.472136 8.55891 0.235464 9.51508C0.181248 9.73815 0.217722 9.97362 0.336887 10.1698C0.456052 10.366 0.648177 10.507 0.871119 10.5617Z"
        fill="black"
      />
      <path
        d="M16.5497 2.57698C18.802 3.52288 20.6639 5.20946 21.8272 7.35761L22.4781 5.15396C21.2403 3.43342 19.5787 2.06222 17.6545 1.17352C17.297 1.00635 16.9336 0.85173 16.5603 0.718917C15.217 0.241809 13.8018 -0.00135325 12.3763 5.66428e-06C12.1576 5.66428e-06 11.9409 0.0165248 11.7235 0.0277577L11.5656 1.76953C11.8338 1.74971 12.1034 1.73583 12.3763 1.73583C13.8097 1.73371 15.229 2.01976 16.5497 2.57698Z"
        fill="black"
      />
      <path
        d="M23.8809 14.4338C23.6574 14.3792 23.4213 14.4155 23.2246 14.5348C23.0278 14.6542 22.8865 14.8467 22.8316 15.0701C22.4719 16.5216 21.8152 17.8826 20.9028 19.0674C19.9905 20.2521 18.8423 21.2348 17.5309 21.9533C16.181 22.6924 14.6863 23.1289 13.1507 23.2326C12.8944 23.2504 12.6367 23.2643 12.3763 23.2643C9.9452 23.2737 7.58408 22.4508 5.68542 20.9324C5.65767 20.91 5.63256 20.8855 5.60481 20.8664C4.08509 19.622 2.92591 17.9938 2.24747 16.1505H6.26161C6.28275 16.1862 6.30456 16.2205 6.32768 16.2555C6.3409 16.276 6.35279 16.2972 6.36601 16.317C6.40631 16.3831 6.44728 16.4439 6.48957 16.506L6.51534 16.5423C6.5497 16.5925 6.58142 16.6421 6.62106 16.6917C6.63692 16.7141 6.6541 16.7359 6.67062 16.7577C6.69969 16.7961 6.72811 16.8344 6.75784 16.8727L6.81533 16.9447C6.84374 16.9804 6.87215 17.0161 6.90189 17.0511L6.96136 17.1225L7.05254 17.2269C7.07236 17.2493 7.09219 17.2718 7.11267 17.2929C7.14637 17.3299 7.17875 17.367 7.21509 17.4033L7.23623 17.4251L7.26795 17.4588C7.32015 17.513 7.37301 17.5658 7.4272 17.618L7.45164 17.6412C7.49856 17.6861 7.54547 17.7297 7.59305 17.7733L7.6545 17.8275C7.69084 17.8599 7.72718 17.8936 7.76418 17.9233L7.83423 17.9821C7.86991 18.0112 7.90559 18.0409 7.94193 18.0693L8.01461 18.1268C8.05162 18.1552 8.08862 18.1837 8.12628 18.2114L8.19831 18.2649C8.23927 18.2947 8.2809 18.3237 8.32319 18.3528C8.34367 18.3673 8.36416 18.3825 8.3853 18.3964C8.45138 18.4394 8.51217 18.481 8.57692 18.522C9.71402 19.2412 11.0322 19.6223 12.3776 19.6208C12.4272 19.6208 12.4761 19.6162 12.5256 19.6149C13.9714 19.584 15.3736 19.1141 16.546 18.2677C17.7185 17.4213 18.6059 16.2384 19.0903 14.8759C19.1003 14.8482 19.1087 14.8199 19.1154 14.7913C19.1154 14.7814 19.1194 14.7715 19.1214 14.7616C19.1234 14.7516 19.1293 14.7246 19.132 14.7061C19.1346 14.6876 19.132 14.6823 19.1353 14.6697C19.1386 14.6572 19.1386 14.6367 19.1392 14.6202C19.1399 14.6036 19.1392 14.5944 19.1392 14.5812C19.1392 14.568 19.1392 14.5508 19.1392 14.5356C19.1392 14.5204 19.1392 14.5098 19.1353 14.4966C19.1313 14.4834 19.1353 14.4669 19.13 14.4523C19.1247 14.4378 19.1247 14.4266 19.1227 14.414C19.1207 14.4014 19.1168 14.3849 19.1135 14.3704C19.1102 14.3559 19.1055 14.3459 19.1016 14.3334C19.0976 14.3208 19.0936 14.305 19.089 14.2911C19.0844 14.2772 19.0791 14.2673 19.0738 14.2554C19.0685 14.2435 19.0632 14.2277 19.0566 14.2144C19.05 14.2012 19.0447 14.192 19.0388 14.1814C19.0329 14.1708 19.0256 14.1543 19.0177 14.1411L18.9972 14.11C18.9886 14.0968 18.9806 14.0843 18.9714 14.0717C18.9621 14.0592 18.9555 14.0526 18.9476 14.0426C18.9397 14.0327 18.9291 14.0182 18.9185 14.007C18.908 13.9957 18.9014 13.9891 18.8921 13.9799C18.8829 13.9706 18.871 13.9574 18.8597 13.9468C18.8485 13.9363 18.8406 13.931 18.8307 13.9224L18.795 13.8933L18.7626 13.8708C18.7494 13.8623 18.7375 13.853 18.7236 13.8451L18.6893 13.8259L18.647 13.8035L18.6106 13.7883L18.5697 13.7711L11.0389 11.0296L10.3782 10.789L9.9599 10.6384L9.20002 10.3622L7.70868 9.81905C8.18131 8.99896 8.86147 8.31772 9.6808 7.8438C10.5001 7.36987 11.4298 7.11995 12.3763 7.11916C12.5666 7.1203 12.7567 7.13111 12.9459 7.15154C13.8473 7.24425 14.7104 7.56431 15.4544 8.08172C16.1983 8.59913 16.7987 9.29695 17.1992 10.1098C17.2712 10.2544 17.382 10.376 17.5193 10.4611C17.6565 10.5462 17.8148 10.5913 17.9763 10.5915H23.6727C23.8045 10.5915 23.9345 10.5616 24.053 10.5039C24.1714 10.4462 24.2752 10.3624 24.3565 10.2586C24.4377 10.1549 24.4943 10.0341 24.5219 9.90525C24.5495 9.77642 24.5475 9.643 24.5159 9.51509C24.1261 7.94294 23.4339 6.46171 22.4781 5.15405L21.8292 7.35836C22.0923 7.83897 22.3181 8.3391 22.5045 8.85433H18.4904C17.8564 7.79823 16.9604 6.92372 15.8893 6.31551C14.8181 5.70729 13.6081 5.38598 12.3763 5.38268C11.9916 5.38328 11.6076 5.41466 11.2279 5.47651C9.99166 5.68124 8.83092 6.20727 7.862 7.00188C6.89308 7.7965 6.15 8.83181 5.70723 10.0041C5.70751 10.0054 5.70751 10.0067 5.70723 10.008C5.70194 10.0219 5.69864 10.0351 5.69467 10.049C5.69071 10.0629 5.68542 10.0754 5.68212 10.0893C5.67881 10.1032 5.67617 10.1184 5.67287 10.1336C5.66956 10.1488 5.66692 10.1607 5.66494 10.1745C5.66296 10.1884 5.66163 10.2043 5.66031 10.2188C5.65899 10.2333 5.66031 10.2466 5.65569 10.2598C5.65106 10.273 5.65569 10.2895 5.65569 10.304C5.65569 10.3186 5.65569 10.3311 5.65569 10.345C5.65569 10.3589 5.65569 10.3741 5.65965 10.3886C5.66362 10.4032 5.65965 10.4157 5.66362 10.4289C5.66758 10.4421 5.6689 10.4573 5.67221 10.4719C5.67551 10.4864 5.67683 10.4977 5.67947 10.5109C5.68212 10.5241 5.6874 10.5386 5.69203 10.5525C5.69665 10.5664 5.6993 10.5783 5.70326 10.5908C5.70723 10.6034 5.71383 10.6172 5.71912 10.6305L5.73432 10.6681C5.74026 10.6807 5.74753 10.6932 5.75348 10.7051C5.75943 10.717 5.76603 10.7302 5.7733 10.7421C5.78057 10.754 5.78784 10.7653 5.79577 10.7772C5.8037 10.789 5.81031 10.8009 5.81824 10.8122L5.84401 10.8452C5.85259 10.8558 5.86119 10.867 5.87044 10.8776C5.87969 10.8882 5.89026 10.8981 5.89951 10.908C5.90876 10.9179 5.91867 10.9285 5.92924 10.9384C5.93982 10.9483 5.95105 10.9569 5.96162 10.9661L5.99334 10.9932C6.00523 11.0025 6.01779 11.0104 6.03034 11.019C6.04289 11.0276 6.05215 11.0349 6.06404 11.0421L6.10435 11.0646C6.11624 11.0712 6.12813 11.0785 6.14069 11.0844L6.18364 11.1029C6.19487 11.1075 6.2061 11.1135 6.21866 11.1181H6.22262L6.51468 11.2331L8.52538 11.9599L9.6315 12.3623L11.3772 13.0013L17.0975 15.0827C17.0677 15.1375 17.0373 15.1911 17.0056 15.2439L16.9871 15.275C16.9594 15.3206 16.9316 15.3662 16.9025 15.4104C16.8907 15.4296 16.8774 15.4481 16.8649 15.4673C16.8418 15.5029 16.818 15.538 16.7935 15.573L16.7499 15.6344L16.6785 15.7322L16.6316 15.7924C16.6072 15.8247 16.5821 15.8584 16.5563 15.8875L16.5094 15.945C16.4823 15.9774 16.4546 16.0111 16.4268 16.0415C16.4123 16.058 16.3977 16.0752 16.3825 16.0917C16.3488 16.1293 16.3165 16.1663 16.2794 16.2033L16.251 16.2331C16.2061 16.28 16.1605 16.3256 16.1136 16.3712L16.0878 16.395C16.0495 16.4313 16.0112 16.467 15.9722 16.502L15.924 16.5443L15.8255 16.6289L15.7707 16.6738L15.6742 16.7505L15.6167 16.7947L15.5169 16.8681L15.4594 16.909C15.4238 16.9342 15.3874 16.9586 15.3504 16.9824C15.3339 16.9943 15.3167 17.0055 15.2995 17.0167C15.2533 17.0465 15.2064 17.0756 15.1595 17.104L15.1357 17.1192C15.0802 17.1522 15.024 17.1852 14.9672 17.2156L14.9275 17.2368C14.8839 17.2599 14.8403 17.283 14.7954 17.3029L14.7359 17.3319C14.6976 17.3511 14.6599 17.3696 14.6209 17.3868L14.5549 17.4172L14.4432 17.4654L14.3738 17.4938L14.2595 17.5381L14.1934 17.5632L14.0685 17.6061L14.0091 17.626C13.9536 17.6438 13.8974 17.6603 13.8412 17.6762L13.8227 17.6821C13.76 17.6993 13.6965 17.7158 13.6331 17.731L13.5776 17.7436C13.5327 17.7542 13.4871 17.7641 13.4454 17.7733L13.3734 17.7872L13.2518 17.809L13.1745 17.8209L13.0549 17.8374L12.9763 17.8467L12.8534 17.8592L12.7774 17.8658C12.7331 17.8691 12.6882 17.8711 12.6452 17.8738H12.5792C12.5131 17.8738 12.447 17.8777 12.3809 17.8777C12.3301 17.8777 12.2798 17.8738 12.229 17.8724C11.4132 17.8525 10.6129 17.6459 9.88932 17.2686C9.16578 16.8913 8.53826 16.3533 8.05492 15.6959C7.86593 15.4412 7.69945 15.1706 7.55737 14.8871C7.55737 14.8825 7.55208 14.8779 7.5501 14.8732L7.53622 14.8481C7.53093 14.8382 7.52499 14.829 7.51904 14.819L7.50715 14.7999L7.4979 14.7853C7.48997 14.7735 7.48138 14.7622 7.47279 14.751L7.46089 14.7351L7.45363 14.7265L7.44239 14.7127L7.41464 14.6816L7.39812 14.6651L7.38821 14.6552C7.37896 14.6459 7.36971 14.6367 7.3598 14.6281L7.33865 14.6096L7.33337 14.605L7.32874 14.601C7.3142 14.5898 7.29967 14.5779 7.28447 14.5673L7.27125 14.5587L7.25407 14.5468L7.22038 14.5263L7.20187 14.5158L7.18866 14.5078L7.13844 14.4834H7.13315H7.12655L7.10078 14.4728L7.06378 14.4589L7.05056 14.4543L7.02875 14.4477L6.98845 14.4371L6.97061 14.4325H6.96003H6.94087L6.89858 14.4252H6.88074H6.85894H6.82524H1.07924C1.05215 14.4252 1.02505 14.4252 0.998624 14.4292H0.986069C0.962096 14.4313 0.938268 14.4349 0.914707 14.4398L0.894884 14.4437C0.872418 14.4484 0.850613 14.4543 0.828807 14.4609L0.807663 14.4675C0.78784 14.4741 0.767357 14.4814 0.748194 14.4893L0.729693 14.4973C0.711192 14.5052 0.693351 14.5138 0.67551 14.523L0.659652 14.5316C0.639168 14.5428 0.620006 14.5547 0.600844 14.5673L0.586307 14.5772C0.566484 14.5904 0.547322 14.605 0.528821 14.6202L0.520892 14.6268C0.50239 14.642 0.48455 14.6585 0.46737 14.675L0.463405 14.679C0.446225 14.6961 0.429706 14.7146 0.413848 14.7338L0.408562 14.7351L0.399311 14.7464C0.387417 14.7609 0.376845 14.7768 0.365612 14.792L0.357683 14.8052C0.345789 14.823 0.333895 14.8415 0.323323 14.8607L0.317376 14.8712C0.306804 14.8917 0.296893 14.9122 0.288303 14.9327C0.288303 14.9393 0.282356 14.9453 0.279713 14.9519C0.271123 14.9723 0.263854 14.9935 0.256586 15.0146L0.250639 15.0351C0.244032 15.0576 0.238085 15.0794 0.233459 15.1012C0.233144 15.1063 0.233144 15.1113 0.233459 15.1164C0.228834 15.1402 0.224869 15.164 0.222226 15.1884C0.222226 15.1884 0.222226 15.1884 0.222226 15.1937C0.219583 15.221 0.218262 15.2481 0.218262 15.275C0.218262 15.275 0.218262 15.2789 0.218262 15.2809C0.218262 15.3069 0.219583 15.3327 0.222226 15.3582V15.3734C0.222226 15.3972 0.228173 15.421 0.232799 15.4448C0.232799 15.4514 0.232799 15.458 0.237424 15.4646L0.241388 15.4844C0.504145 16.5429 0.905152 17.5622 1.43407 18.516C2.23322 19.9711 3.31277 21.2535 4.61036 22.289C4.68833 22.3511 4.77159 22.4046 4.85088 22.4647C7.01429 24.1157 9.66221 25.0062 12.3836 24.9981C12.743 24.9981 13.1005 24.9831 13.456 24.9532C14.5189 24.863 15.5658 24.6365 16.5708 24.2792C16.6792 24.2409 16.7836 24.192 16.8907 24.1471C18.0672 23.6955 19.1683 23.0676 20.1561 22.285C22.3228 20.5599 23.8587 18.1673 24.5251 15.4791C24.5515 15.3682 24.5558 15.2531 24.5378 15.1405C24.5197 15.0279 24.4796 14.92 24.4197 14.8229C24.3599 14.7258 24.2815 14.6415 24.189 14.5747C24.0966 14.508 23.9919 14.4601 23.8809 14.4338Z"
        fill="black"
      />
      <path
        d="M35.8315 11.9716C34.4723 11.5276 33.686 11.0664 33.686 10.021C33.686 9.23142 34.3533 8.38101 35.8183 8.38101C36.7869 8.38101 37.634 8.93077 37.7345 8.99817C37.8002 9.03977 37.8761 9.06262 37.9538 9.06424C38.0164 9.06038 38.0772 9.04194 38.1313 9.01039C38.1855 8.97883 38.2315 8.93505 38.2657 8.88253L38.2822 8.8561C38.3108 8.79904 38.3444 8.74464 38.3827 8.69355C38.501 8.50788 38.4646 8.30767 38.2809 8.16825C37.5487 7.70067 36.6996 7.44877 35.8308 7.44141C33.538 7.44141 32.7054 8.99156 32.7054 10.0342C32.7054 11.776 33.9523 12.3581 35.4608 12.8907C37.1015 13.4471 37.9902 13.9552 37.9902 15.0461C37.9902 15.9428 37.0202 16.698 35.8757 16.698C34.7075 16.698 33.8062 15.9976 33.4646 15.6891C33.4002 15.6287 33.3157 15.5943 33.2274 15.5926C33.0635 15.5926 32.9525 15.7195 32.9076 15.771L32.7827 15.9368C32.6426 16.1305 32.6671 16.3075 32.8488 16.4562C33.0596 16.6544 34.1974 17.6225 35.8632 17.6225C37.5719 17.6225 39.0157 16.4291 39.0157 15.0164C39.0117 13.2112 37.5085 12.5465 35.8315 11.9716Z"
        fill="black"
      />
      <path
        d="M47.7794 7.57886H47.5065C47.2832 7.57886 47.1391 7.71762 47.1391 7.93237V13.7768C47.1391 15.4948 46.0244 16.6465 44.3639 16.6465C42.7206 16.6465 41.6171 15.4875 41.6171 13.7636V7.93237C41.6159 7.83898 41.5783 7.74976 41.5123 7.68372C41.4462 7.61769 41.357 7.58006 41.2636 7.57886H40.9795C40.8862 7.58006 40.797 7.61771 40.7311 7.68377C40.6652 7.74982 40.6277 7.83904 40.6266 7.93237V13.8317C40.6266 16.0657 42.1642 17.6258 44.3666 17.6258C46.5841 17.6258 48.1329 16.0657 48.1329 13.8317V7.93237C48.1317 7.83898 48.0941 7.74976 48.0281 7.68372C47.962 7.61769 47.8728 7.58006 47.7794 7.57886Z"
        fill="black"
      />
      <path
        d="M53.0761 11.9716C51.7175 11.5276 50.9312 11.0664 50.9312 10.021C50.9312 9.23142 51.5979 8.38101 53.0629 8.38101C54.0249 8.38101 54.8773 8.93011 54.9791 8.99817C55.0448 9.03983 55.1207 9.06269 55.1984 9.06424C55.2609 9.06043 55.3216 9.04201 55.3757 9.01045C55.4297 8.97889 55.4756 8.93507 55.5097 8.88253L55.5275 8.85412C55.5559 8.79785 55.589 8.74413 55.6266 8.69355C55.7462 8.50656 55.7086 8.30701 55.5249 8.16825C54.7926 7.70067 53.9435 7.44877 53.0747 7.44141C50.7819 7.44141 49.95 8.99156 49.95 10.0342C49.95 11.776 51.1962 12.3581 52.7047 12.8907C54.3454 13.4471 55.2348 13.9552 55.2348 15.0461C55.2348 15.9428 54.2641 16.698 53.1157 16.698C51.9455 16.698 51.0455 15.997 50.7053 15.6891C50.5341 15.5397 50.3359 15.5569 50.1496 15.771L50.024 15.9368C49.8839 16.1298 49.9077 16.3069 50.0901 16.4562C50.3009 16.6544 51.4387 17.6225 53.1045 17.6225C54.8139 17.6225 56.2576 16.4291 56.2576 15.0164C56.257 13.2112 54.7538 12.5465 53.0761 11.9716Z"
        fill="black"
      />
      <path
        d="M60.026 17.489C60.2513 17.489 60.4225 17.337 60.4225 17.1362V8.51783H62.8673C62.9138 8.51827 62.9599 8.50942 63.003 8.49181C63.046 8.47419 63.0851 8.44815 63.118 8.41523C63.1509 8.38231 63.1768 8.34316 63.1944 8.30007C63.2119 8.25698 63.2207 8.21083 63.2201 8.16432V7.93239C63.2207 7.88587 63.2119 7.83972 63.1944 7.79664C63.1768 7.75355 63.1509 7.7144 63.118 7.68147C63.0851 7.64855 63.046 7.62252 63.003 7.6049C62.9599 7.58728 62.9138 7.57844 62.8673 7.57888H56.9944C56.9479 7.57835 56.9017 7.58713 56.8586 7.60472C56.8155 7.6223 56.7764 7.64833 56.7435 7.68127C56.7106 7.71422 56.6847 7.7534 56.6672 7.79653C56.6496 7.83966 56.641 7.88585 56.6416 7.93239V8.13657C56.6416 8.49007 56.9118 8.51783 56.9944 8.51783H59.4267V17.1362C59.4281 17.2296 59.4659 17.3187 59.532 17.3846C59.5982 17.4505 59.6875 17.488 59.7809 17.489H60.026Z"
        fill="black"
      />
      <path
        d="M67.4338 7.56581C67.4035 7.50423 67.3554 7.45309 67.2959 7.41896C67.2363 7.38482 67.1679 7.36923 67.0995 7.37419H67.0585C66.9913 7.37416 66.9254 7.39265 66.8681 7.42762C66.8107 7.46259 66.7641 7.51269 66.7334 7.57242L62.5237 17.0874C62.5022 17.133 62.4927 17.1833 62.496 17.2336C62.4994 17.2839 62.5155 17.3325 62.5428 17.3749C62.5703 17.4123 62.6067 17.4423 62.6487 17.462C62.6907 17.4817 62.737 17.4906 62.7833 17.4878H63.1659C63.2401 17.4866 63.3124 17.4646 63.3746 17.4243C63.4369 17.384 63.4866 17.327 63.5181 17.2599L64.5687 14.854H69.5549L70.6187 17.2685C70.6509 17.3337 70.7004 17.3887 70.7619 17.4276C70.8233 17.4666 70.8942 17.4878 70.9669 17.4892H71.3217C71.3718 17.4934 71.4221 17.4852 71.4683 17.4652C71.5144 17.4453 71.5548 17.4142 71.586 17.3749C71.6402 17.3002 71.6482 17.2057 71.6052 17.0788L67.4338 7.56581ZM69.169 13.9699H64.9652L67.0862 9.05716L69.169 13.9699Z"
        fill="black"
      />
      <path
        d="M73.4474 7.57886H73.1475C73.0541 7.58006 72.9648 7.61769 72.8988 7.68372C72.8328 7.74976 72.7951 7.83898 72.7939 7.93237V17.1361C72.7951 17.2295 72.8328 17.3186 72.8989 17.3846C72.9649 17.4505 73.0541 17.488 73.1475 17.489H73.4342C73.4816 17.4905 73.5288 17.4825 73.5731 17.4655C73.6174 17.4484 73.6578 17.4227 73.6919 17.3899C73.7261 17.357 73.7534 17.3176 73.7721 17.274C73.7908 17.2304 73.8006 17.1836 73.8009 17.1361V7.93237C73.7998 7.83898 73.7621 7.74976 73.6961 7.68372C73.63 7.61769 73.5408 7.58006 73.4474 7.57886Z"
        fill="black"
      />
      <path
        d="M83.9767 7.57905H83.7031C83.6098 7.58025 83.5205 7.61788 83.4545 7.68392C83.3885 7.74996 83.3508 7.83918 83.3496 7.93256V15.6536L77.0426 7.44228H76.7268C76.6785 7.44006 76.6303 7.4475 76.5849 7.46415C76.5396 7.4808 76.498 7.50633 76.4626 7.53925C76.4272 7.57217 76.3988 7.61181 76.3789 7.65586C76.359 7.69991 76.3481 7.74748 76.3469 7.79578V17.1363C76.3481 17.2296 76.3856 17.3186 76.4515 17.3845C76.5174 17.4504 76.6065 17.488 76.6997 17.4892H76.9587C77.0521 17.4882 77.1413 17.4507 77.2073 17.3847C77.2734 17.3188 77.311 17.2297 77.3122 17.1363V9.33933C83.5829 17.6266 83.639 17.6266 83.76 17.6266H83.9384C84.1663 17.6266 84.3348 17.478 84.3348 17.2731V7.93256C84.3336 7.83838 84.2954 7.74847 84.2283 7.68231C84.1613 7.61614 84.0709 7.57905 83.9767 7.57905Z"
        fill="black"
      />
      <path
        d="M90.4264 7.56581C90.3961 7.50423 90.3481 7.45309 90.2885 7.41896C90.2289 7.38482 90.1605 7.36923 90.0921 7.37419H90.0518C89.9847 7.37445 89.9189 7.39306 89.8616 7.428C89.8043 7.46294 89.7576 7.51288 89.7267 7.57242L85.5169 17.0874C85.4956 17.1331 85.486 17.1835 85.4893 17.2338C85.4925 17.2842 85.5084 17.3329 85.5354 17.3755C85.563 17.413 85.5995 17.4429 85.6417 17.4627C85.6838 17.4824 85.7302 17.4913 85.7766 17.4885H86.1592C86.2333 17.4865 86.3054 17.4642 86.3676 17.424C86.4299 17.3838 86.4798 17.3273 86.5121 17.2605L87.5587 14.8534H92.5448L93.608 17.2678C93.6403 17.3331 93.6899 17.3882 93.7514 17.4271C93.813 17.4661 93.8841 17.4873 93.9569 17.4885H94.3124C94.3624 17.4928 94.4127 17.4847 94.4588 17.4649C94.5049 17.445 94.5454 17.4141 94.5767 17.3749C94.6309 17.3002 94.6394 17.2064 94.5965 17.0782L90.4264 7.56581ZM92.1622 13.9699H87.9598L90.0808 9.05782L92.1622 13.9699Z"
        fill="black"
      />
      <path
        d="M102.353 14.7191C102.353 13.6341 101.803 12.8108 100.833 12.4064C101.209 12.1814 101.52 11.8616 101.735 11.4791C101.949 11.0965 102.06 10.6644 102.055 10.2259C102.055 8.64004 100.849 7.57886 99.0527 7.57886H96.1453C96.0519 7.58006 95.9627 7.61769 95.8967 7.68372C95.8306 7.74976 95.793 7.83898 95.7918 7.93237V17.1361C95.793 17.2295 95.8307 17.3186 95.8967 17.3846C95.9628 17.4505 96.052 17.488 96.1453 17.489H99.1769C101.043 17.489 102.353 16.3498 102.353 14.7191ZM96.7803 12.0033V8.53102H99.0494C100.273 8.53102 101.004 9.17526 101.004 10.2536C101.004 11.3161 100.274 12.0033 99.1452 12.0033H96.7803ZM101.304 14.7059C101.304 15.8001 100.45 16.5646 99.2271 16.5646H96.7671V12.9416H99.1458C100.22 12.9416 101.307 13.4867 101.307 14.7059H101.304Z"
        fill="black"
      />
      <path
        d="M109.468 16.5646H105.287V7.93237C105.287 7.84111 105.251 7.75351 105.188 7.68771C105.125 7.6219 105.039 7.58293 104.947 7.57886H104.647C104.554 7.57989 104.465 7.61746 104.399 7.68354C104.332 7.74961 104.295 7.83893 104.294 7.93237V17.1361C104.295 17.2295 104.333 17.3186 104.399 17.3846C104.465 17.4505 104.554 17.488 104.647 17.489H109.471C109.516 17.4921 109.561 17.4859 109.603 17.471C109.645 17.4562 109.684 17.4328 109.717 17.4024C109.75 17.3719 109.777 17.3351 109.795 17.2941C109.813 17.2531 109.823 17.2088 109.824 17.1639V16.9155C109.821 16.6108 109.599 16.5646 109.468 16.5646Z"
        fill="black"
      />
      <path
        d="M116.8 7.57886H111.323C111.23 7.58023 111.141 7.61796 111.075 7.68399C111.009 7.75003 110.972 7.83916 110.971 7.93237V17.1361C110.972 17.2293 111.009 17.3183 111.075 17.3843C111.141 17.4502 111.23 17.4878 111.323 17.489H116.8C116.893 17.488 116.983 17.4505 117.049 17.3846C117.115 17.3186 117.152 17.2295 117.154 17.1361V16.9155C117.152 16.8221 117.115 16.7328 117.049 16.6668C116.983 16.6008 116.894 16.5631 116.8 16.5619H111.977V12.8736H116.131C116.224 12.8724 116.313 12.8347 116.379 12.7687C116.445 12.7026 116.483 12.6134 116.484 12.5201V12.2901C116.483 12.1968 116.445 12.1076 116.379 12.0415C116.313 11.9754 116.224 11.9378 116.131 11.9366H111.977V8.5178H116.8C116.894 8.5166 116.983 8.47898 117.049 8.41294C117.115 8.3469 117.152 8.25768 117.154 8.16429V7.93237C117.152 7.83898 117.115 7.74976 117.049 7.68372C116.983 7.61769 116.894 7.58006 116.8 7.57886Z"
        fill="black"
      />
      <path
        d="M125.852 11.9716C124.493 11.5269 123.706 11.0657 123.706 10.0217C123.706 9.22877 124.374 8.38101 125.839 8.38101C126.806 8.38101 127.655 8.93011 127.756 8.9975C127.822 9.03919 127.898 9.06204 127.976 9.06358C128.038 9.06003 128.099 9.04172 128.153 9.01013C128.207 8.97855 128.253 8.93459 128.287 8.88187L128.303 8.8561C128.333 8.79951 128.367 8.74519 128.404 8.69355C128.433 8.65259 128.453 8.60632 128.463 8.55748C128.474 8.50863 128.474 8.45822 128.464 8.40922C128.455 8.36022 128.436 8.31364 128.408 8.27225C128.38 8.23085 128.344 8.19549 128.302 8.16825C127.57 7.70079 126.721 7.4489 125.853 7.44141C123.559 7.44141 122.727 8.99156 122.727 10.0342C122.727 11.776 123.974 12.3581 125.483 12.8907C127.123 13.4471 128.012 13.9552 128.012 15.0461C128.012 15.9421 127.042 16.698 125.894 16.698C124.723 16.698 123.823 15.997 123.482 15.6891C123.418 15.6291 123.333 15.5952 123.245 15.5939C123.08 15.5939 122.97 15.7208 122.925 15.7723L122.801 15.9382C122.66 16.1318 122.684 16.3082 122.867 16.4575C123.078 16.6558 124.217 17.6238 125.881 17.6238C127.59 17.6238 129.034 16.4304 129.034 15.0171C129.033 13.2112 127.529 12.5465 125.852 11.9716Z"
        fill="black"
      />
      <path
        d="M134.311 7.56648C134.281 7.50472 134.233 7.45339 134.173 7.41912C134.114 7.38485 134.045 7.36921 133.977 7.3742H133.936C133.869 7.37429 133.803 7.39283 133.746 7.4278C133.688 7.46276 133.642 7.5128 133.611 7.57243L129.401 17.0874C129.38 17.133 129.37 17.1833 129.373 17.2335C129.376 17.2838 129.392 17.3324 129.419 17.3749C129.447 17.4125 129.484 17.4427 129.526 17.4625C129.568 17.4824 129.615 17.4913 129.661 17.4885H130.044C130.118 17.4873 130.19 17.4652 130.253 17.4249C130.315 17.3846 130.365 17.3277 130.396 17.2605L131.443 14.8527H136.43L137.493 17.2685C137.526 17.3335 137.575 17.3885 137.637 17.4273C137.698 17.4661 137.769 17.4873 137.842 17.4885H138.196C138.246 17.4927 138.297 17.4844 138.343 17.4645C138.389 17.4445 138.429 17.4135 138.461 17.3742C138.514 17.2989 138.523 17.2044 138.479 17.0782L134.311 7.56648ZM136.046 13.9699H131.841L133.962 9.05783L136.046 13.9699Z"
        fill="black"
      />
      <path
        d="M144.846 16.5641H140.666V7.92926C140.665 7.83812 140.629 7.75069 140.566 7.68503C140.503 7.61936 140.417 7.58048 140.326 7.57642H140.028C139.935 7.57761 139.846 7.61517 139.78 7.68109C139.714 7.747 139.676 7.83606 139.675 7.92926V17.1337C139.676 17.2269 139.714 17.316 139.78 17.3819C139.846 17.4478 139.935 17.4854 140.028 17.4866H144.852C144.896 17.4896 144.941 17.4835 144.984 17.4685C145.026 17.4536 145.065 17.4302 145.098 17.3997C145.131 17.3692 145.158 17.3323 145.176 17.2912C145.194 17.2501 145.204 17.2057 145.204 17.1608V16.9157C145.198 16.6097 144.977 16.5641 144.846 16.5641Z"
        fill="black"
      />
      <path
        d="M150.608 7.44214C149.256 7.44529 147.961 7.98464 147.006 8.94185C146.051 9.89905 145.515 11.1959 145.516 12.5479C145.516 15.3951 147.752 17.6258 150.608 17.6258C153.464 17.6258 155.713 15.3951 155.713 12.5479C155.712 11.1943 155.174 9.89654 154.216 8.93935C153.259 7.98216 151.962 7.44371 150.608 7.44214ZM154.763 12.5479C154.763 14.8222 152.9 16.673 150.61 16.673C149.791 16.6704 148.992 16.425 148.312 15.9679C147.633 15.5108 147.104 14.8625 146.794 14.105C146.483 13.3475 146.404 12.5148 146.566 11.7123C146.728 10.9097 147.125 10.1734 147.706 9.59635C148.287 9.01931 149.026 8.6275 149.83 8.47049C150.633 8.31347 151.465 8.39829 152.221 8.71423C152.976 9.03017 153.621 9.56302 154.073 10.2454C154.526 10.9278 154.766 11.7291 154.763 12.5479Z"
        fill="black"
      />
      <path
        d="M165.203 7.57885H164.93C164.837 7.57988 164.747 7.61734 164.681 7.68325C164.615 7.74917 164.577 7.83832 164.576 7.9317V15.654L158.323 7.51079L158.27 7.44472H157.951C157.903 7.44251 157.855 7.44992 157.809 7.46652C157.764 7.48312 157.722 7.50858 157.687 7.54142C157.652 7.57426 157.623 7.61382 157.603 7.6578C157.583 7.70177 157.572 7.74929 157.571 7.79757V17.1361C157.572 17.2295 157.61 17.3187 157.676 17.3846C157.742 17.4505 157.831 17.488 157.925 17.489H158.183C158.276 17.488 158.366 17.4505 158.432 17.3845C158.498 17.3186 158.535 17.2295 158.537 17.1361V9.33913C164.807 17.6264 164.863 17.6264 164.984 17.6264H165.162C165.391 17.6264 165.559 17.4778 165.559 17.2729V7.92906C165.557 7.8358 165.519 7.74693 165.452 7.68148C165.386 7.61602 165.296 7.57918 165.203 7.57885Z"
        fill="black"
      />
      <path
        d="M170.61 11.9718C169.251 11.5271 168.464 11.0652 168.464 10.0219C168.464 9.22897 169.132 8.38121 170.596 8.38121C171.564 8.38121 172.412 8.93031 172.512 8.99771C172.579 9.03951 172.655 9.06237 172.733 9.06378C172.796 9.06024 172.856 9.04192 172.911 9.01033C172.965 8.97875 173.011 8.93479 173.044 8.88207L173.061 8.85498C173.09 8.7989 173.123 8.74521 173.161 8.69442C173.19 8.65342 173.21 8.60693 173.221 8.55776C173.232 8.50858 173.232 8.45775 173.223 8.40833C173.213 8.35892 173.194 8.31194 173.166 8.27025C173.138 8.22857 173.101 8.19304 173.059 8.16581C172.327 7.69835 171.478 7.44646 170.609 7.43896C168.316 7.43896 167.484 8.98912 167.484 10.0318C167.484 11.7736 168.731 12.3557 170.239 12.8883C171.879 13.4446 172.769 13.9528 172.769 15.0437C172.769 15.9397 171.798 16.6956 170.65 16.6956C169.482 16.6956 168.581 15.9952 168.239 15.6873C168.069 15.5393 167.871 15.5518 167.683 15.7692L167.558 15.9357C167.419 16.1287 167.442 16.3058 167.624 16.4544C167.835 16.6527 168.972 17.6207 170.637 17.6207C172.347 17.6207 173.79 16.4273 173.79 15.014C173.793 13.2114 172.286 12.5467 170.61 11.9718Z"
        fill="black"
      />
    </svg>
  )
}
