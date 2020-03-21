import React, { useState } from 'react'
import Text from 'atoms/Text'
import TextInput from 'atoms/TextInput'
import Button from 'atoms/Button'
import PlacesAutoComplete from 'atoms/PlacesAutoComplete'
import * as S from './RegisterForm.style'

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const submitForm = () => {
    if (email === '') return alert('Please include your email address.')
    if (firstName === '') return alert('Please include your first name.')
    if (lastName === '') return alert('Please include your last name.')
    alert(`firstName: ${firstName}, lastName: ${lastName}, email: ${email}`)
  }

  return (
    <S.RegisterForm>
      <S.TitleWrapper>
        <Text size="h1">REGISTER</Text>
      </S.TitleWrapper>
      <S.LabelWrapper>
        <Text size="h3">FIRST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper>
        <TextInput
          value={firstName}
          autoCompleteType="off"
          clearButtonMode="while-editing"
          onChangeText={setFirstName}
          multiline={false}
          placeholder="Your First Name"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">LAST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper>
        <TextInput
          clearButtonMode="while-editing"
          autoCompleteType="off"
          value={lastName}
          onChangeText={setLastName}
          multiline={false}
          placeholder="Your Last Name"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">EMAIL ADDRESS</Text>
      </S.LabelWrapper>
      <S.InputWrapper>
        <TextInput
          clearButtonMode="while-editing"
          value={email}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          onChangeText={setEmail}
          multiline={false}
          placeholder="Your Email Address"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">STREET ADDRESS</Text>
      </S.LabelWrapper>
      <PlacesAutoComplete />
      <S.ButtonWrapper>
        <Button onPress={submitForm}>REGISTER NOW</Button>
      </S.ButtonWrapper>
    </S.RegisterForm>
  )
}

export default RegisterForm
