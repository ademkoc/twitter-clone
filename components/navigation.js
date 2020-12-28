import React from 'react'

import { MENU } from '../constants/index'
import styles from './navigation.module.css'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'

function Navigation({ flat = false, selectedItemKey = 'home' }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat && menu.title.length > 0
        const selected = menu.key == selectedItemKey
        return (
          <NavigationButton
            key={menu.key}
            notify={menu.notify}
            selected={selected}
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
