import React, { useState } from 'react'
import Text from 'atoms/Text'
import TextInput from 'atoms/TextInput'
import Button from 'atoms/Button'
import * as S from './RegisterForm.style'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const submitForm = () => {
    // submit the form then login
  }

  return (
    <S.RegisterForm>
      <S.TitleWrapper>
        <Text size="h1">REGISTER</Text>
      </S.TitleWrapper>
      <S.LabelWrapper>
        <Text size="h3">EMAIL ADDRESS</Text>
      </S.LabelWrapper>
      <S.InputWrapper>
        <TextInput text={email} changeText={setEmail} multiline={false} placeholder="alrightalright@alright.com" />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">FIRST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper>
        <TextInput text={firstName} changeText={setFirstName} multiline={false} placeholder="Matthew" autoFocus={true} />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">LAST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper>
        <TextInput text={lastName} changeText={setLastName} multiline={false} placeholder="McConaughey" />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <Button onPress={submitForm}>REGISTER NOW</Button>
      </S.ButtonWrapper>
    </S.RegisterForm>
  )
}

export default RegisterForm
