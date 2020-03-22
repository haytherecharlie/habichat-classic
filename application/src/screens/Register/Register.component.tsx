import React, { useState } from 'react'
import RegisterForm from 'components/RegisterForm'
import RegisterSubmit from 'components/RegisterSubmit'
import * as S from './Register.style'

const Register = () => {
  const [userData, setUserData] = useState(null)
  return <S.Wrapper>{!userData ? <RegisterForm setUserData={setUserData} /> : <RegisterSubmit userData={userData} />}</S.Wrapper>
}

export default Register
