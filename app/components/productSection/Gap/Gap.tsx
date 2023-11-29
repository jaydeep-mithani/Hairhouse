import styles from './Gap.module.css'

export const Gap = ({ gap, mobileGap }: { gap?: string; mobileGap?: string }) => {
  const desktopStyle = {
    marginBottom: gap,
    marginRight: gap,
  }

  const mobileStyle = {
    marginBottom: mobileGap,
    marginRight: mobileGap,
  }

  return (
    <>
      {gap && <div className={styles.desktop} style={desktopStyle} />}
      {mobileGap && <div className={styles.mobile} style={mobileStyle} />}
    </>
  )
}
