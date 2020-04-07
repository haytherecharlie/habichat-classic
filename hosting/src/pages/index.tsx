import React from 'react'
import PageLayout from 'templates/PageLayout'
import Helmet from 'atoms/Helmet'
import Header from 'components/Header'
// import Subscribe from 'components/Subscribe'
import HeroBanner from 'components/HeroBanner'
import Footer from 'components/Footer'

const Index = () => {
  return (
    <PageLayout>
      <Helmet title="Home" path="/" />
      <Header />
      <HeroBanner />
      {/* <Subscribe /> */}
      <Footer />
    </PageLayout>
  )
}

export default Index
