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
    <ContentLayout.Padding style={{ paddingTop: 20, paddingBottom: 20 }}>
      <Text size="XL" text="privacy-1" bold style={{ paddingBottom: 20 }} />
      <Text size="S" text="privacy-2" style={{ paddingBottom: 20 }} />
      <Text size="S" text="privacy-3" style={{ paddingBottom: 20 }} />
      <Text size="S" text="privacy-4" style={{ paddingBottom: 20 }} />
      <Text size="S" text="privacy-5" style={{ paddingBottom: 20 }} />
      <Text size="S" text="privacy-6" style={{ paddingBottom: 20 }} />
      <Text size="S" text="privacy-7" style={{ paddingBottom: 20 }} />
      <Text size="S" text="privacy-8" style={{ paddingBottom: 20 }} />
      <Text size="S" text="privacy-9" style={{ paddingBottom: 20 }} />
    </ContentLayout.Padding>
    <Footer />
  </PageLayout>
)

export default Privacy
