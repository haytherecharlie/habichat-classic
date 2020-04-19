import React from 'react'
import SEO from 'atoms/SEO'
import Captcha from 'atoms/Captcha'
import TopLayout from 'layouts/TopLayout'

const Recaptcha = () => {
  return (
    <TopLayout>
      <SEO page="recaptcha" crawl={false} />
      <Captcha />
    </TopLayout>
  )
}

export default Recaptcha
