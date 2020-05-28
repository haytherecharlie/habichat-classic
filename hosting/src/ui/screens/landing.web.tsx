import React from 'react'
import HeroBanner from 'ui/components/HeroBanner'
import Onboarding from 'ui/components/Onboarding'
import PageLayout from 'ui/layouts/PageLayout'

const Home = () => {
  return (
    <PageLayout page="home" crawl={true} style={{ maxWidth: `100vw`, paddingLeft: 0, paddingRight: 0 }}>
      <HeroBanner />
      <Onboarding />
    </PageLayout>
  )
}

export default Home
