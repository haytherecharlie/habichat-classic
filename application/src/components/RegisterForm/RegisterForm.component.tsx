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
    alert(`firstName: ${firstName}, lastName: ${lastName}, email: ${email}`)
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
        <TextInput
          clearButtonMode="while-editing"
          value={email}
          autoCorrect={false}
          autoCapitalize="none"
          autoFocus={true}
          autoCompleteType="email"
          onChangeText={setEmail}
          multiline={false}
          placeholder="alrightalright@alright.com"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">FIRST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper>
        <TextInput value={firstName} clearButtonMode="while-editing" onChangeText={setFirstName} multiline={false} placeholder="Matthew" />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">LAST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper>
        <TextInput clearButtonMode="while-editing" value={lastName} onChangeText={setLastName} multiline={false} placeholder="McConaughey" />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <Button onPress={submitForm}>REGISTER NOW</Button>
      </S.ButtonWrapper>
    </S.RegisterForm>
  )
}

export default RegisterForm
