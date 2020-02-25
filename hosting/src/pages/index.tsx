import React from 'react'
import PageLayout from 'templates/PageLayout'
import SectionLayout from 'templates/SectionLayout'
import Header from 'components/Header'
import HeroBanner from 'components/HeroBanner'
import Footer from 'components/Footer'

const Index = () => {
  return (
    <PageLayout>
      <Header />
      <HeroBanner />
      <SectionLayout background="#f5f5f5" padding="64px 0" />
      <SectionLayout />
      <SectionLayout background="#f5f5f5" />
      <SectionLayout />
      <Footer />
    </PageLayout>
  )
}

export default Index
