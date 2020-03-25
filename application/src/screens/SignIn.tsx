import React from 'react'
import Header from 'components/Header'
import SignInForm from 'components/SignInForm'
import TopLayout from 'layouts/TopLayout'

const SignIn = () => {
  return (
    <TopLayout>
      <Header.SignIn />
      <SignInForm />
    </TopLayout>
  )
}

export default SignIn
