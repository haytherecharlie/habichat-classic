import React from 'react'
import RegisterForm from 'components/RegisterForm'
import RegisterSubmit from 'components/RegisterSubmit'
import useRegisterValidation from 'utils/hooks/useRegisterValidation'

const Register = () => {
  const [state, dispatch] = useRegisterValidation()

  const props = { state, dispatch }
  switch (state.page) {
    case 'RegisterSubmit':
      return <RegisterSubmit {...props} />
    default:
      return <RegisterForm {...props} />
  }
}

export default Register
