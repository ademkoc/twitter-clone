import React, { useState } from 'react'
import cn from 'classnames'

import styles from './sidebar.module.css'

import ThemeButton from '../theme-button'
import Navigation from '../navigation/navigation'
import ProfileBox from '../profile-box'
import TweetModal from '../tweet-modal'
import { Tweet } from '../icons'

export default function Sidebar({ flat = false }) {
  const [isShowModal, setShowModal] = useState(false)

  const onModalClose = () => {
    setShowModal(false)
  }

  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />

      <div className={styles.tweet}>
        <ThemeButton big full={!flat} onClick={() => setShowModal(true)}>
          {flat ? <Tweet /> : 'Tweet'}
        </ThemeButton>
      </div>

      {/* tweet popup */}
      {isShowModal && (
        <TweetModal onClick={onModalClose} onModalClose={onModalClose} />
      )}

      <div className={styles.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  )
}
