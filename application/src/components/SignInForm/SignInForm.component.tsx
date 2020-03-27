import React, { useState } from 'react'
import Text from 'atoms/Text'
import Button from 'atoms/Button'
import Spinner from 'atoms/Spinner'
import TextInput from 'atoms/TextInput'
import CenterLayout from 'layouts/CenterLayout'
import { auth } from 'services/firebase'
import { postOptions } from 'utils/helpers'
import useFormValidation from 'utils/hooks/useFormValidation'
import * as S from './SignInForm.style'

const SignInForm = () => {
  const [state, dispatch] = useFormValidation()
  const [stage, setStage] = useState('form')

  const onEndEditing = type => {
    if (type === 'email ') return state.refs.pass.current.focus()
    if (type === 'pass') return submitForm()
  }

  const signIn = async () => {
    try {
      setStage('fetching')
      const email = state.email.value
      const password = state.pass.value
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setStage('form')
        return dispatch({ type: 'email-not-found' })
      }
      if (error.code === 'auth/wrong-password') {
        setStage('form')
        return dispatch({ type: 'wrong-password' })
      }
    }
  }

  const submitForm = async () => {
    const { email, pass } = state
    return [email, pass].some(o => o.value === '' && o.valid !== 'valid') ? dispatch({ type: 'validate' }) : signIn()
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
        <Text>Signing In user...</Text>
      </CenterLayout>
    )
  }

  if (stage === 'form') {
    return (
      <S.SignInForm contentContainerStyle={{ paddingTop: 10, paddingBottom: 20 }}>
        <S.LabelWrapper>
          <Text size="h3">EMAIL ADDRESS</Text>
        </S.LabelWrapper>
        <S.InputWrapper validation={state.email.valid}>
          <TextInput
            ref={state.refs.email}
            autoFocus={true}
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
          <Button onPress={submitForm}>SIGN IN</Button>
        </S.ButtonWrapper>
      </S.SignInForm>
    )
  }
}

export default SignInForm
