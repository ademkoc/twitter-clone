import React from 'react'
import useSWR from 'swr'

import styles from './index.module.css'

import Layout from '../components/layout'
import Tweet from '../components/tweet'
import Loading from '../components/loading'
import fetcher from '../lib/fetch'

export default function HomePage() {
  const { data, error } = useSWR('/api/tweet', fetcher)

  return (
    <Layout>
      {!data && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}

      {data?.statuses?.map((twett) => (
        <Tweet key={twett.id} {...twett} />
      ))}
    </Layout>
  )
}
