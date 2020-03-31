import React from "react"
import theme from 'assets/theme'
import Captcha from "atoms/Captcha"
import Helmet from "components/Helmet"
import CenterLayout from "layouts/CenterLayout"

const AppCaptcha = () => {
  console.log('darkMode: ', theme.DARK_MODE)
  
  return (
    <CenterLayout>
      <Helmet title="Google Captcha" path="captcha" />
      <Captcha />
    </CenterLayout>
  )
}

export default AppCaptcha
