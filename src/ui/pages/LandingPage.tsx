import React from 'react'
import Hero from 'ui/entities/Hero'
import Onboarding from 'ui/entities/Onboarding'
import PageLayout from 'ui/layouts/PageLayout'

const Landing = () => {
  return (
    <PageLayout page="landing" crawl={true} style={{ maxWidth: `100vw`, paddingLeft: 0, paddingRight: 0 }}>
      <Hero />
      <Onboarding />
    </PageLayout>
  )
}

export default Landing
