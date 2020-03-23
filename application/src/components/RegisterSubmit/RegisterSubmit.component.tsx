import React, { useEffect } from 'react'
import { auth } from 'services/firebase'
import Spinner from 'atoms/Spinner'
import Text from 'atoms/Text'
import * as S from './RegisterSubmit.style'

const RegisterSubmit = ({ state }) => {
  const signIn = async () => {
    return await auth.createUserWithEmailAndPassword(state.email.value, state.pass.value)
  }

  useEffect(() => {
    signIn()
  }, [])

  return (
    <S.Wrapper>
      <Spinner />
      <Text>Registering New User...</Text>
    </S.Wrapper>
  )
}

export default RegisterSubmit
