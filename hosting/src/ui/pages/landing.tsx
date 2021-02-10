import React from 'react'
import { useSelector } from 'react-redux'
import HeroBanner from 'ui/components/HeroBanner'
import Onboarding from 'ui/components/Onboarding'
import PageLayout from 'ui/layouts/PageLayout'

const Landing = () => {
  const { dimensions, language } = useSelector(s => s.ui)
  return (
    <PageLayout loading={!dimensions || !language} page="landing" crawl={true} style={{ maxWidth: `100vw`, paddingLeft: 0, paddingRight: 0 }}>
      <HeroBanner />
      <Onboarding />
    </PageLayout>
  )
}

export default Landing
