import React from 'react'
import Helmet from 'atoms/Helmet'
import Header from 'components/Header'
import HeroBanner from 'components/HeroBanner'
import Footer from 'components/Footer'
import PageLayout from 'templates/PageLayout'

const Index = () => {
  return (
    <PageLayout>
      <Helmet title="Home" path="/" />
      <Header />
      <HeroBanner />
      <Footer />
    </PageLayout>
  )
}

export default Index
