import React from "react"
import Captcha from "atoms/Captcha"
import Helmet from "components/Helmet"
import CenterLayout from "layouts/CenterLayout"

const AppCaptcha = () => {
  return (
    <CenterLayout>
      <Helmet title="Google Captcha" path="captcha" />
      <Captcha />
    </CenterLayout>
  )
}

export default AppCaptcha
