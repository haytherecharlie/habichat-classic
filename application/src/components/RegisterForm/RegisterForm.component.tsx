import React, { useState } from 'react'
import Text from 'atoms/Text'
import Button from 'atoms/Button'
import Spinner from 'atoms/Spinner'
import TextInput from 'atoms/TextInput'
import CenterLayout from 'layouts/CenterLayout'
import { auth } from 'services/firebase'
import { postOptions } from 'utils/helpers/options'
import useFormValidation from 'utils/hooks/useFormValidation'
import * as S from './RegisterForm.style'

const RegisterForm = () => {
  const [state, dispatch] = useFormValidation()
  const [stage, setStage] = useState('form')

  const onEndEditing = type => {
    if (type === 'first') return state.refs.last.current.focus()
    if (type === 'last ') return state.refs.email.current.focus()
    if (type === 'email ') return state.refs.pass.current.focus()
    if (type === 'pass') return submitForm()
  }

  const signIn = async () => {
    try {
      setStage('fetching')
      const displayName = `${state.last.value}, ${state.first.value}`
      const email = state.email.value
      const password = state.pass.value
      const body = JSON.stringify({ displayName, email, password })
      const request = await fetch('https://habi.chat/createUser', postOptions(body))
      const json = await request.json()
      if (json.code === 'auth/weak-password') {
        setStage('form')
        return dispatch({ type: 'weak-password' })
      }
      if (json.code === 'auth/email-already-exists') {
        setStage('form')
        return dispatch({ type: 'email-taken' })
      }
      return auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      console.log(err)
    }
  }

  const submitForm = async () => {
    const { first, last, email, pass } = state
    return [first, last, email, pass].some(o => o.value === '' && o.valid !== 'valid') ? dispatch({ type: 'validate' }) : signIn()
  }

  if (stage === 'failed') {
    return (
      <CenterLayout>
        <Text>Something went wrong!</Text>
      </CenterLayout>
    )
  }

  if (stage === 'fetching') {
    return (
      <CenterLayout>
        <Spinner />
        <Text>Registering user...</Text>
      </CenterLayout>
    )
  }

  if (stage === 'form') {
    return (
      <S.RegisterForm contentContainerStyle={{ paddingTop: 10, paddingBottom: 20 }}>
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
        {state.first.error && <S.ErrorText>{state.first.error}</S.ErrorText>}
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
            returnKeyType="next"
          />
        </S.InputWrapper>
        {state.last.error && <S.ErrorText>{state.last.error}</S.ErrorText>}
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
            returnKeyType="next"
          />
        </S.InputWrapper>
        {state.email.error && <S.ErrorText>{state.email.error}</S.ErrorText>}
        <S.LabelWrapper>
          <Text size="h3">PASSWORD</Text>
        </S.LabelWrapper>
        <S.InputWrapper validation={state.pass.valid}>
          <TextInput
            ref={state.refs.pass}
            blurOnSubmit={false}
            onSubmitEditing={() => onEndEditing('pass')}
            clearButtonMode="while-editing"
            value={state.pass.value}
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="off"
            onChangeText={t => dispatch({ type: 'pass', value: t })}
            multiline={false}
            secureTextEntry
            placeholder="Create a Password"
            returnKeyType="done"
          />
        </S.InputWrapper>
        {state.pass.error && <S.ErrorText>{state.pass.error}</S.ErrorText>}
        <S.ButtonWrapper>
          <Button onPress={submitForm}>REGISTER NOW</Button>
        </S.ButtonWrapper>
      </S.RegisterForm>
    )
  }
}

export default RegisterForm
