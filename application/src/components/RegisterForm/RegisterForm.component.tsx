import React from 'react'
import Text from 'atoms/Text'
import Button from 'atoms/Button'
import TextInput from 'atoms/TextInput'
import * as S from './RegisterForm.style'

const RegisterForm = ({ state, dispatch }) => {

  const onEndEditing = type => {
    if (type === 'first') return state.refs.last.current.focus()
    if (type === 'last ') return state.refs.email.current.focus()
    if (type === 'email ') return state.refs.pass.current.focus()
    if (type === 'pass') return submitForm()
  }

  const submitForm = async () => {
    const { first, last, email, pass } = state
    if ([first, last, email, pass].some(o => o.value === '' && o.valid !== 'valid')) {
      return dispatch({
        type: 'validate',
        value: {
          first: state.first.value === '' ? { ...state.first, valid: 'invalid', error: 'Please include a valid first name.' } : state.first,
          last: state.last.value === '' ? { ...state.last, valid: 'invalid', error: 'Please include a valid last name.' } : state.last,
          email: state.email.value === '' ? { ...state.email, valid: 'invalid', error: 'Please include a valid email name.' } : state.email,
          pass: state.pass.value === '' ? { ...state.pass, valid: 'invalid', error: 'Passwords are minimum eight characters.' } : state.pass
        }
      })
    }
    return dispatch({ type: 'page', value: 'RegisterSubmit' })
  }

  return (
    <S.RegisterForm contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}>
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

export default RegisterForm
