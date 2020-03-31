import React from "react"
import Captcha from "atoms/Captcha"
import Helmet from "components/Helmet"
import TopLayout from "layouts/TopLayout"

const AppCaptcha = () => {
  return (
    <TopLayout>
      <Helmet title="Google Captcha" path="captcha" />
      <Captcha />
    </TopLayout>
  )
}

export default AppCaptcha
