import React, { useState } from 'react'
import Text from 'atoms/Text'
import PillButton from 'atoms/PillButton'
import Spinner from 'atoms/Spinner'
import FormInput from 'atoms/FormInput'
import CenterLayout from 'layouts/CenterLayout'
import { auth } from 'services/firebase'
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
      console.log(error.code)
    }
  }

  const submitForm = async () => {
    const { email, pass } = state
    return [email, pass].some(o => o.valid !== 'valid') ? dispatch({ type: 'validate' }) : signIn()
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
      <S.SignInForm>
        <FormInput
          autoFocus={true}
          error={state.email.error}
          onChangeText={t => dispatch({ type: 'email', value: t })}
          onSubmitEditing={() => onEndEditing('email')}
          placeholder="Your Email Address"
          ref={state.refs.email}
          title="email address"
          validation={state.email.valid}
          value={state.email.value}
        />
        <FormInput
          error={state.pass.error}
          onChangeText={t => dispatch({ type: 'pass', value: t })}
          onSubmitEditing={() => onEndEditing('pass')}
          placeholder="Create a Password"
          ref={state.refs.pass}
          returnKeyType="done"
          secureTextEntry
          title="password"
          validation={state.pass.valid}
          value={state.pass.value}
        />
        <PillButton onPress={submitForm}>SIGN IN</PillButton>
      </S.SignInForm>
    )
  }
}

export default SignInForm
