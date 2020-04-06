import React from 'react'
import { useDispatch } from 'react-redux'
import NameInput from 'atoms/NameInput'
import PillButton from 'atoms/PillButton'
import Header from 'components/Header'
import ScrollLayout from 'layouts/ScrollLayout'
import TopLayout from 'layouts/TopLayout'
import { auth } from 'services/firebase'
import * as A from 'services/redux/actions'
import { randomAvatar } from 'utils/helpers'
import useFormValidation from 'utils/hooks/useFormValidation'

const Register = () => {
  const dispatch = useDispatch()
  const [state, check] = useFormValidation()

  const submitForm = async () => {
    const { first, last } = state
    if ([first, last].some(o => o.valid === 'valid')) {
      try {
        const firstName = state.first.value
        const lastName = state.last.value
        const avatar = randomAvatar()
        const user = auth.currentUser
        await user.updateProfile({ displayName: `pyNBzg3V742S5v8gWfRB, ${lastName}, ${firstName}`, photoURL: avatar })
        const newUser = auth.currentUser
        return dispatch({ type: A.SIGN_IN, value: newUser })
      } catch (err) {
        console.log(err)
      }
    }
    return check({ type: 'validate' })
  }

  return (
    <TopLayout>
      <Header.Auth title="REGISTER" />
      <ScrollLayout>
        <NameInput
          autoFocus={true}
          autoCompleteType="name"
          autoCapitalize="words"
          error={state.first.error}
          onChangeText={t => check({ type: 'first', value: t })}
          onSubmitEditing={() => state.refs.last.current.focus()}
          placeholder="Your First Name"
          ref={state.refs.first}
          title="first name"
          validation={state.first.valid}
          value={state.first.value}
          returnKeyType="next"
        />
        <NameInput
          autoCompleteType="name"
          autoCapitalize="words"
          error={state.last.error}
          onChangeText={t => check({ type: 'last', value: t })}
          placeholder="Your Last Name"
          ref={state.refs.last}
          title="last name"
          validation={state.last.valid}
          value={state.last.value}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <PillButton onPress={submitForm}>REGISTER NOW</PillButton>
      </ScrollLayout>
    </TopLayout>
  )
}

export default Register
