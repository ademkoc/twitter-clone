import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

import styles from './style.module.css'

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}

export default function Button({
  full = false,
  children,
  className,
  ...props
}) {
  const ButtonComponent = props.href ? LinkButton : BaseButton
  return (
    <ButtonComponent
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}
