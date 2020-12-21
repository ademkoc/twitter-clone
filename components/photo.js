import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

export default function Photo({
  src = 'https://pbs.twimg.com/profile_images/453956388851445761/8BKnRUXg.png',
  alt
}) {
  return (
    <div className={cn([styles.photo])}>
      <img src={src} alt={alt} />
    </div>
  )
}