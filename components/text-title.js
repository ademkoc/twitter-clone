import React from 'react'

import styles from './text-title.module.css'

export default function TextTitle({ children }) {
  return <h2 className={styles.titleBold}>{children}</h2>
}
