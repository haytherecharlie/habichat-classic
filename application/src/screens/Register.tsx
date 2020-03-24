import React from 'react'
import Header from 'components/Header'
import RegisterForm from 'components/RegisterForm'
import CenterLayout from 'layouts/CenterLayout'
import useRegisterValidation from 'utils/hooks/useRegisterValidation'

const Register = () => {
  const [state, dispatch] = useRegisterValidation()

  return (
    <>
      <Header />
      <RegisterForm {...{ state, dispatch }} />
    </>
  )
  // const props = { state, dispatch }
  // switch (state.page) {
  //   case 'RegisterSubmit':
  //     return <RegisterSubmit {...props} />
  //   default:
  //     return <RegisterForm {...props} />
  // }
}

export default Register
