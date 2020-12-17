import React from 'react'
import styles from './button.module.css'

export default function Button({ children }) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  )
}
