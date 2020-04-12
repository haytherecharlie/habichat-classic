import React from 'react'
import Helmet from 'atoms/Helmet'
import Text from 'atoms/Text'
import Header from 'components/Header'
import Footer from 'components/Footer'
import PageLayout from 'templates/PageLayout'
import ContentLayout from 'layouts/ContentLayout'

const Terms = () => (
  <PageLayout>
    <Helmet title="Terms of Service" path="terms" />
    <Header />
    <ContentLayout.Padding>
      <Text size="h1" text="terms-1" />
      <Text size="h2" text="terms-2" />
      <Text size="p" text="terms-3" />
      <Text size="h2" text="terms-4" />
      <ol type="a">
        <li>
          <Text size="p" text="terms-5" />
          <ol type="i">
            <li>
              <Text size="p" text="terms-6" />
            </li>
            <li>
              <Text size="p" text="terms-7" />
            </li>
            <li>
              <Text size="p" text="terms-8" />
            </li>
            <li>
              <Text size="p" text="terms-9" />
            </li>
            <li>
              <Text size="p" text="terms-10" />
            </li>
          </ol>
        </li>
        <li>
          <Text size="p" text="terms-11" />
        </li>
      </ol>
      <Text size="h2" text="terms-12" />
      <ol type="a">
        <li>
          <Text size="p" text="terms-13" />
        </li>
        <li>
          <Text size="p" text="terms-14" />
        </li>
      </ol>
      <Text size="h2" text="terms-15" />
      <ol type="a">
        <li>
          <Text size="p" text="terms-16" />
        </li>
      </ol>
      <Text size="h2" text="terms-17" />
      <ol type="a">
        <li>
          <Text size="p" text="terms-18" />
        </li>
      </ol>
      <Text size="h2" text="terms-19" />
      <ol type="a">
        <li>
          <Text size="p" text="terms-20" />
        </li>
      </ol>
      <Text size="h2" text="terms-21" />
      <ol type="a">
        <li>
          <Text size="p" text="terms-22" />
        </li>
      </ol>
      <Text size="h2" text="terms-23" />
      <ol type="a">
        <li>
          <Text size="p" text="terms-24" />
        </li>
      </ol>
    </ContentLayout.Padding>
    <Footer />
  </PageLayout>
)

export default Terms
