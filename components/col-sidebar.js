import React from 'react'
import cn from 'classnames'

import ThemeButton from '../components/theme-button'
import Navigation from '../components/navigation'
import ProfileBox from '../components/profile-box'
import styles from './col-sidebar.module.css'

export default function Sidebar({ flat }) {
  return (
    <div className={cn([styles.sidebar])}>
      <Navigation flat={flat} />
      <ThemeButton big full>Tweet</ThemeButton>
      <ProfileBox />
    </div>
  )
}
