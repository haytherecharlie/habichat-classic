import React from 'react'
import Header from 'components/Header'
import Captcha from 'atoms/Captcha'
import TopLayout from 'layouts/TopLayout'

const Landing = () => {
  return (
    <TopLayout>
      <Header.Auth />
      <Captcha />
    </TopLayout>
  )
}

export default Landing
