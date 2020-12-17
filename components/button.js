import React from 'react'
import cn from 'classnames';
import styles from './button.module.css'

export default function Button({ children, className, ...props }) {
  return (
    <button type="button" className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  )
}
