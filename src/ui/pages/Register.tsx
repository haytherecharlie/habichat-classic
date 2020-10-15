import React from 'react'
import RegistrationForm from 'ui/entities/RegistrationForm'
import PageLayout from 'ui/layouts/PageLayout'

const Register = () => {
  return (
    <PageLayout page="register" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <RegistrationForm />
    </PageLayout>
  )
}

export default Register
