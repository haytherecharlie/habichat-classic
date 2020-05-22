import React from 'react'
import HeroBanner from 'components/HeroBanner'
import PageLayout from 'layouts/PageLayout'

const Home = () => {
  return (
    <PageLayout page="home" crawl={true} style={{ maxWidth: `100vw`, paddingLeft: 0, paddingRight: 0 }}>
      <HeroBanner />
    </PageLayout>
  )
}

export default Home
