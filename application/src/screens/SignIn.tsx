import React from 'react'
import Header from 'components/Header'
import PhoneAuthForm from 'components/PhoneAuthForm'
import TopLayout from 'layouts/TopLayout'

const Landing = () => {
  return (
    <TopLayout>
      <Header.Auth />
      <PhoneAuthForm />
    </TopLayout>
  )
}

export default Landing
