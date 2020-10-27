import React from 'react'
import theme from 'ui/assets/theme'
import Logo from 'ui/atoms/Logo'
import * as S from './LoginForm.style'

const LoginForm = () => {
  return (
    <S.LoginForm>
      <S.Row style={{ flex: 1 }} />
      <S.Row style={{ flex: 4 }}>
        <Logo type="logomark" style={{ margin: '0px auto 20px auto' }} />
        <S.Input type="email" placeholder="Email" />
        <S.Input type="password" placeholder="Password" />
        <S.LogIn>Log In</S.LogIn>
        <S.SignUp>Register a new account</S.SignUp>
      </S.Row>
      <S.Row style={{ flex: 1, justifyContent: 'flex-end' }}>
        <S.BouncingArrow fontSize={`50px`} color={theme.WHITE} />
      </S.Row>
    </S.LoginForm>
  )
}

export default LoginForm
