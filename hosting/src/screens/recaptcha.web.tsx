import React from 'react'
import Captcha from 'atoms/Captcha'
import SEO from 'atoms/SEO'
import GlobalStyle from 'assets/theme/global.style'

const Recaptcha = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SEO page="recaptcha" crawl={false} />
      <GlobalStyle />
      <Captcha />
    </div>
  )
}

export default Recaptcha
