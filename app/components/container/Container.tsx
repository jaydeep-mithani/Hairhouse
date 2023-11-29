import React, { ReactNode } from 'react'

import styles from './Container.module.css'

type ProductDetailsProps = {
  children: ReactNode
  display?: 'flex' | 'block'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  margin?: string
  alignItems?: 'center' | 'baseline' | 'flex-start' | 'flex-end' | 'stretch'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between'
  gap?: string
  separator?: boolean
  className?: string
}

export const Container: React.FC<ProductDetailsProps> = ({
  children,
  flexDirection,
  display,
  margin,
  separator,
  gap,
  alignItems,
  justifyContent,
  flexWrap,
  className,
}) => {
  let separatorCounter = 0

  const childrenWithSeparators = React.Children.toArray(children).reduce((acc: ReactNode[], child, i, arr) => {
    acc.push(child)
    if (i < arr.length - 1 && separator) {
      separatorCounter++
      acc.push(<div key={`separator-${separatorCounter}`} style={{ borderBottom: '#E2E2E2;', margin: '8px 0' }} />)
    }
    return acc
  }, [])

  const containerClassName = `${styles.Container} ${className}`

  return (
    <div
      className={containerClassName}
      style={{
        display: display ?? 'flex',
        flexDirection: flexDirection ?? 'row',
        gap,
        alignItems,
        justifyContent,
        margin,
        flexWrap: flexWrap ?? 'nowrap',
      }}>
      {childrenWithSeparators}
    </div>
  )
}
