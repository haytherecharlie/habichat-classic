import React from 'react'
import theme from 'assets/theme'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import PageLayout from 'layouts/PageLayout'

const _404 = () => {
  return (
    <PageLayout page="404" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={require('assets/images/spilt-milk.png')}
        style={{ width: `80%`, maxWidth: 400, margin: '0 auto' }}
        alt="spilt milk"
      />
      <Text size="L" text="Oops! We all make mistakes..." style={{ textAlign: 'center', marginTop: 10 }} bold unique />
      <Text size="L" text="Page not found!" style={{ textAlign: 'center' }} bold unique />
      <Link href="/">
        <Text
          size="S"
          text="< to homepage"
          style={{ marginTop: 10, textAlign: 'center', color: theme.BRAND_COLOR, fontWeight: 900 }}
          unique
        />
      </Link>
    </PageLayout>
  )
}

export default _404
