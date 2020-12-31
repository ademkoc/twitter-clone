import React from 'react'
import cn from 'classnames'

import styles from './style.module.css'

export default function Photo({
  src = 'https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg.png',
  alt,
  size = 47
}) {
  return (
    <div className={cn(styles.photo)} style={{ width: size, height: size }}>
      <img src={src} alt={alt} />
    </div>
  )
}
