import React from 'react'
import Helmet from 'atoms/Helmet'
import Captcha from 'atoms/Captcha'
import CenterLayout from 'layouts/CenterLayout'

const Recaptcha = () => {
  return (
    <CenterLayout>
      <Helmet title="Recaptcha" path="recaptcha" />
      <Captcha />
    </CenterLayout>
  )
}

export default Recaptcha
