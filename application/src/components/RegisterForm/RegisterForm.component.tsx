import React, { useState } from 'react'
import Text from 'atoms/Text'
import PillButton from 'atoms/PillButton'
import Spinner from 'atoms/Spinner'
import FormInput from 'atoms/FormInput'
import CenterLayout from 'layouts/CenterLayout'
import { auth } from 'services/firebase'
import { postOptions } from 'utils/helpers'
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
    return [first, last, email, pass].some(o => o.valid !== 'valid') ? dispatch({ type: 'validate' }) : signIn()
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
      <S.RegisterForm>
        <FormInput
          autoCompleteType="name"
          autoCapitalize="words"
          autoFocus={true}
          error={state.first.error}
          onChangeText={t => dispatch({ type: 'first', value: t })}
          onSubmitEditing={() => onEndEditing('first')}
          placeholder="Your First Name"
          ref={state.refs.first}
          title="first name"
          validation={state.first.valid}
          value={state.first.value}
          style={{ clearButton: { background: 'red' } }}
        />
        <FormInput
          autoCompleteType="name"
          autoCapitalize="words"
          error={state.last.error}
          onChangeText={t => dispatch({ type: 'last', value: t })}
          onSubmitEditing={() => onEndEditing('last')}
          placeholder="Your Last Name"
          ref={state.refs.last}
          title="last name"
          validation={state.last.valid}
          value={state.last.value}
        />
        <FormInput
          autoCompleteType="email"
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
          autoCompleteType="password"
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
        <PillButton onPress={submitForm}>REGISTER NOW</PillButton>
      </S.RegisterForm>
    )
  }
}

export default RegisterForm
