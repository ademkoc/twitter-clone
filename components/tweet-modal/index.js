import React from 'react'

import styles from './style.module.css'

import Photo from '../photo'
import ThemeButton from '../theme-button'
import IconButton from '../button/icon'
import Stack from '../stack'
import { Close } from '../icons'

export default function TweetModal({ onClick = () => {} }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* avatar */}
        <div className={styles.avatar}>
          <Photo />
        </div>

        {/* body */}
        <div className={styles.body}>
          <div>
            <textarea
              className={styles.textarea}
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Ne dusunuyorsun?"
            />
          </div>
          <Stack gap={20} className={styles.footer}>
            <IconButton className={styles.close} onClick={onClick}>
              <Close />
            </IconButton>
            <ThemeButton>Tweet</ThemeButton>
          </Stack>
        </div>
      </div>
    </div>
  )
}
