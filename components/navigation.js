import React from 'react'
import { useRouter } from 'next/router'

import { MENU } from '../constants/index'
import styles from './navigation.module.css'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'

function Navigation({ flat = false }) {
  const router = useRouter()
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = menu.path == router.pathname
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
            href={menu.path}
            className={styles.navButton}
          >
            {selected ? menu.iconSelected : menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavigationButton>
        )
      })}
    </nav>
  )
}

export default Navigation
