import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

import Button from '.'

export default function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn(styles.iconButton, className)} {...props}>
      {children}
    </Button>
  )
}
