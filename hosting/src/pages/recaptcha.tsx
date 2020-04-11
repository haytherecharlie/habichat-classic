import React from 'react'
import Helmet from 'atoms/Helmet'
import Captcha from 'atoms/Captcha'
import ScreenLayout from 'layouts/ScreenLayout'

const Recaptcha = () => {
  return (
    <ScreenLayout>
      <Helmet title="Recaptcha" path="recaptcha" />
      <Captcha />
    </ScreenLayout>
  )
}

export default Recaptcha
