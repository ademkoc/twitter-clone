import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

export default function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Adem"
        slug="admkc"
        datetime={new Date('2020-08-20')}
        text={`postcss ozelinde video cektim ama icinde yok yok
        

babel, ast, sass`}
      />
      <Tweet
        name="Adem"
        slug="admkc"
        datetime={new Date('2020-08-20')}
        text={`postcss ozelinde video cektim ama icinde yok yok
        
        
babel, ast, sass`}
      />
    </Layout>
  )
}
