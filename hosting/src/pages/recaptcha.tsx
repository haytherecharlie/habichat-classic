import React from 'react'
import Helmet from 'atoms/Helmet'
import Captcha from 'atoms/Captcha'
import PageLayout from 'layouts/PageLayout'

const Recaptcha = () => {
  return (
    <PageLayout>
      <Helmet title="Recaptcha" path="recaptcha" />
      <Captcha />
    </PageLayout>
  )
}

export default Recaptcha
