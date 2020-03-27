import React from 'react'
import Header from 'components/Header'
import RegisterForm from 'components/RegisterForm'
import TopLayout from 'layouts/TopLayout'

const Register = () => {
  return (
    <TopLayout>
      <Header.Auth title="REGISTER" />
      <RegisterForm />
    </TopLayout>
  )
}

export default Register
