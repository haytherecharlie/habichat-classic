import React from 'react'
import Return from 'react-ionicons/lib/MdArrowBack'
import theme from 'assets/theme'
import SEO from 'atoms/SEO'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ContentLayout from 'layouts/ContentLayout'
import PageLayout from 'layouts/PageLayout'

const _404 = () => {
  return (
    <PageLayout>
      <SEO page="blog" crawl={false} />
      <Header />
      <ContentLayout.Center style={{ flex: 1 }}>
        <img src={require('assets/images/spilt-milk.png')} style={{ width: `80%`, maxWidth: 400 }} alt="spilt milk" />
        <Text size="L" text="Oops! We all make mistakes..." style={{ textAlign: 'center', marginTop: 10 }} bold unique />
        <Text size="L" text="Page not found!" style={{ textAlign: 'center' }} bold unique />
        <Link href="/">
          <Text size="S" text="< to homepage" style={{ marginTop: 10, textAlign: 'center', color: theme.BRAND_COLOR, fontWeight: 900 }} unique />
        </Link>
      </ContentLayout.Center>
      <Footer />
    </PageLayout>
  )
}

export default _404
