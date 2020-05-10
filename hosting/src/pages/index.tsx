import React from 'react'
import SEO from 'atoms/SEO'
import Header from 'components/Header'
import HeroBanner from 'components/HeroBanner'
import Footer from 'components/Footer'
import PageLayout from 'layouts/PageLayout'

const Index = ({ data }) => {
  return (
    <PageLayout>
      <SEO page="home" crawl={true} />
      <Header />
      <HeroBanner />
      <Footer />
    </PageLayout>
  )
}

export default Index
