import React from 'react'
import CenterLayout from 'layouts/CenterLayout'
import RegisterForm from 'components/RegisterForm'
import RegisterSubmit from 'components/RegisterSubmit'
import useRegisterValidation from 'utils/hooks/useRegisterValidation'

const Register = () => {
  const [state, dispatch] = useRegisterValidation()

  switch (state.page) {
    case 'RegisterSubmit':
      return (
        <CenterLayout>
          <RegisterSubmit state={state} />
        </CenterLayout>
      )
    default:
      return (
        <CenterLayout>
          <RegisterForm state={state} dispatch={dispatch} />
        </CenterLayout>
      )
  }
}

export default Register
