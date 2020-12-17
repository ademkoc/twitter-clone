import React from 'react'
import cn from 'classnames'
import Button from './button'
import styles from './navigation-button.module.css'

export default function NavButton({ selected, children, ...props }) {
  return (
    <Button className={cn(styles.navButton, selected && styles.navButtonSelected)} {...props}>
      {children}
    </Button>
  )
}
