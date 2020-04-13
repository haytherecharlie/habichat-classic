import React from 'react'
import SEO from 'atoms/SEO'
import Text from 'atoms/Text'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ContentLayout from 'layouts/ContentLayout'
import PageLayout from 'layouts/PageLayout'

const Privacy = () => (
  <PageLayout>
    <SEO page="privacy" crawl={true} />
    <Header />
    <ContentLayout.Padding>
      <Text size="h2" text="privacy-1" />
      <Text size="p" text="privacy-2" />
      <Text size="p" text="privacy-3" />
      <Text size="p" text="privacy-4" />
      <Text size="p" text="privacy-5" />
      <Text size="p" text="privacy-6" />
      <Text size="p" text="privacy-7" />
      <Text size="p" text="privacy-8" />
      <Text size="p" text="privacy-9" />
    </ContentLayout.Padding>
    <Footer />
  </PageLayout>
)

export default Privacy
