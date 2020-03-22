import React from 'react'
import Spinner from 'atoms/Spinner'
import * as S from './RegisterSubmit.style'

const RegisterSubmit = ({ userData }) => {
  const { firstName, lastName, email, street, latLng } = userData
  console.log(userData)
  return (
    <S.Wrapper>
      <Spinner />
      <S.Title>{`firstName: ${firstName}`}</S.Title>
      <S.Title>{`lastName: ${lastName}`}</S.Title>
      <S.Title>{`email: ${email}`}</S.Title>
      <S.Title>{`street: ${street}`}</S.Title>
      <S.Title>{`latLng: ${latLng}`}</S.Title>
    </S.Wrapper>
  )
}

export default RegisterSubmit
