import React from 'react'

import NavigationButton from './navigation-button'
import TextTitle from './text-title'
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

function Navigation({ flat=false, selectedItemKey }) {
  return (
    <nav className={styles.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'home'}>
        <Home />
        <TextTitle>Home</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'explore'}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavigationButton>

      <NavigationButton
        notify="17"
        selected={selectedItemKey === 'notification'}
      >
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'messages'}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'bookmark'}>
        <Bookmark />
        <TextTitle>Bookmark</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'lists'}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'profile'}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedItemKey === 'more'}>
        <More />
        <TextTitle>More</TextTitle>
      </NavigationButton>
    </nav>
  )
}

export default Navigation
