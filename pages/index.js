import React from 'react'
import useSWR from 'swr'

import Layout from '../components/layout'
import Tweet from '../components/tweet'
import fetcher from '../lib/fetch'

export default function HomePage() {
  const { data, error } = useSWR('/api/tweet', fetcher)

  return (
    <Layout>
      {!data && <p>Loading</p>}

      {data?.statuses?.map((twett) => (
        <Tweet key={twett.id} {...twett} />
      ))}
    </Layout>
  )
}
