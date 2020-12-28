import React from 'react'
import cn from 'classnames'

import styles from './col-sidebar.module.css'

import ThemeButton from '../components/theme-button'
import Navigation from '../components/navigation'
import ProfileBox from '../components/profile-box'

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
