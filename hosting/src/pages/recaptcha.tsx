import React from 'react'
import SEO from 'atoms/SEO'
import Captcha from 'atoms/Captcha'
import PageLayout from 'layouts/PageLayout'

const Recaptcha = () => {
  return (
    <PageLayout>
      <SEO page="recaptcha" path="/recaptcha" crawl={false} />
      <Captcha />
    </PageLayout>
  )
}

export default Recaptcha
