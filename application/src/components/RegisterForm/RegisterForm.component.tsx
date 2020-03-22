import React, { useState } from 'react'
import Text from 'atoms/Text'
import Button from 'atoms/Button'
import TextInput from 'atoms/TextInput'
import PlacesAutoComplete from 'atoms/PlacesAutoComplete'
import geocoder from 'utils/helpers/geoCoder'
import useRegisterValidation from 'utils/hooks/useRegisterValidation'
import * as S from './RegisterForm.style'

const RegisterForm = ({ setUserData }) => {
  const [error, setError] = useState('')
  const [state, dispatch] = useRegisterValidation()

  const onEndEditing = type => {
    switch (type) {
      case 'first':
        return state.refs.last.current.focus()
      case 'last':
        return state.refs.email.current.focus()
      case 'email':
        return state.street.valid === 'valid' ? dispatch({ type: 'street', value: '' }) : state.refs.street.current.triggerFocus()
      default:
        return
    }
  }

  const submitForm = async () => {
    const { first, last, email, street } = state
    if (first.valid && last.valid && email.valid && street.valid) {
      const latLng = await geocoder(street.value)
      return setUserData({
        latLng,
        firstName: first.value,
        lastName: last.value,
        email: email.value,
        street: street.value
      })
    }
    return setError('Please correct errors above.')
  }

  return (
    <S.RegisterForm>
      <S.TitleWrapper>
        <Text size="h1">REGISTER</Text>
      </S.TitleWrapper>
      <S.LabelWrapper>
        <Text size="h3">FIRST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper validation={state.first.valid}>
        <TextInput
          ref={state.refs.first}
          autoFocus={true}
          blurOnSubmit={false}
          value={state.first.value}
          autoCompleteType="off"
          clearButtonMode="while-editing"
          onChangeText={t => dispatch({ type: 'first', value: t })}
          onSubmitEditing={() => onEndEditing('first')}
          multiline={false}
          placeholder="Your First Name"
          returnKeyType="next"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">LAST NAME</Text>
      </S.LabelWrapper>
      <S.InputWrapper validation={state.last.valid}>
        <TextInput
          ref={state.refs.last}
          blurOnSubmit={false}
          onSubmitEditing={() => onEndEditing('last')}
          clearButtonMode="while-editing"
          autoCompleteType="off"
          value={state.last.value}
          onChangeText={t => dispatch({ type: 'last', value: t })}
          multiline={false}
          placeholder="Your Last Name"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">EMAIL ADDRESS</Text>
      </S.LabelWrapper>
      <S.InputWrapper validation={state.email.valid}>
        <TextInput
          ref={state.refs.email}
          blurOnSubmit={false}
          onSubmitEditing={() => onEndEditing('email')}
          clearButtonMode="while-editing"
          value={state.email.value}
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          onChangeText={t => dispatch({ type: 'email', value: t })}
          multiline={false}
          placeholder="Your Email Address"
        />
      </S.InputWrapper>
      <S.LabelWrapper>
        <Text size="h3">STREET ADDRESS</Text>
      </S.LabelWrapper>
      <PlacesAutoComplete
        validation={state.street.valid}
        onChangeText={t => dispatch({ type: 'street', value: t })}
        onPress={({ description }) => dispatch({ type: 'street', value: description })}
        value={state.street.value}
        ref={state.refs.street}
      />
      <S.ErrorText>{error}</S.ErrorText>
      <S.ButtonWrapper>
        <Button onPress={submitForm}>REGISTER NOW</Button>
      </S.ButtonWrapper>
    </S.RegisterForm>
  )
}

export default RegisterForm
