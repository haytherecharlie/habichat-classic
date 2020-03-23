import React from 'react'
import RegisterForm from 'components/RegisterForm'
import RegisterSubmit from 'components/RegisterSubmit'
import useRegisterValidation from 'utils/hooks/useRegisterValidation'
import * as S from './Register.style'

const Register = () => {
  const [state, dispatch] = useRegisterValidation()

  switch (state.page) {
    case 'RegisterSubmit':
      return (
        <S.Wrapper>
          <RegisterSubmit state={state} />
        </S.Wrapper>
      )
    default:
      return (
        <S.Wrapper>
          <RegisterForm state={state} dispatch={dispatch} />
        </S.Wrapper>
      )
  }
}

export default Register
