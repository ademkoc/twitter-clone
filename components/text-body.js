import React from 'react'
import cn from 'classnames'

import styles from './text-body.module.css'

export default function TextBody({
  className,
  bold = false,
  children,
  ...props
}) {
  return (
    <span
      className={cn([styles.body, bold && styles.bold, className])}
      {...props}
    >
      {children}
    </span>
  )
}
