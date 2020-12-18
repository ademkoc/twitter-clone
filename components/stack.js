import React from 'react'
import cn from 'classnames'

import styles from './stack.module.css'

export default function Stack({ gap = 10, column = false, children }) {
  return (
    <div
      className={cn([styles.stack, column && styles.column])}
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  )
}
