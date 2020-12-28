import React from 'react'
import cn from 'classnames'

import styles from './navigation-button.module.css'

import Button from './button'

export default function NavButton({ notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  )
}
