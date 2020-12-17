import React from 'react'

import NavigationButton from './navigation-button'
import TitleBold from './title-bold'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'

import styles from './navigation.module.css'

function Navigation({ selectedItemKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'home'}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'explore'}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavigationButton>

      <NavigationButton
        notify="17"
        selected={selectedItemKey === 'notification'}
      >
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'messages'}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'bookmark'}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'lists'}>
        <Lists />
        <TitleBold>Lists</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'profile'}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'more'}>
        <More />
        <TitleBold>More</TitleBold>
      </NavigationButton>
    </nav>
  )
}

export default Navigation
