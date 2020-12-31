import React from 'react'
import cn from 'classnames'

import styles from './sidebar.module.css'

import ThemeButton from '../theme-button'
import Navigation from '../navigation/navigation'
import ProfileBox from '../profile-box'

export default function Sidebar({ flat = false }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />

      <div className={styles.tweet}>
        <ThemeButton big full={!flat}>
          {flat ? 'a' : 'Tweet'}
        </ThemeButton>
      </div>

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}
