import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'
import TextTitle from '../components/text-title'
import { Home } from '../components/icons'

export default {
  title: 'Buttons',
  component: Button
}

export const Normal = () => <Button>Save</Button>
export const Menu = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
)
export const Nav = () => <Navigation selectedItemKey="home" />
