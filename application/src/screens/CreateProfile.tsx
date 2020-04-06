import React from 'react'
import { useDispatch } from 'react-redux'
import NameInput from 'atoms/NameInput'
import PillButton from 'atoms/PillButton'
import Header from 'components/Header'
import ScrollLayout from 'layouts/ScrollLayout'
import TopLayout from 'layouts/TopLayout'
import { auth } from 'services/firebase'
import * as A from 'services/redux/actions'
import useCreateProfileReducer from 'utils/hooks/useCreateProfileReducer'

const CreateProfile = () => {
  const dispatch = useDispatch()
  const [{ avatar, city, first, last }, update] = useCreateProfileReducer()

  const submitForm = async () => {
    if ([first, last].some(o => o.valid === 'valid')) {
      try {
        await auth.currentUser.updateProfile({
          displayName: `${city.value}, ${last.value}, ${first.value}`,
          photoURL: avatar.value
        })
        return dispatch({ type: A.SIGN_IN, value: auth.currentUser })
      } catch (err) {
        console.log(err)
      }
    }
    return update({ type: 'find-errors' })
  }

  return (
    <TopLayout>
      <Header.CreateProfile title="CREATE PROFILE" />
      <ScrollLayout>
        <NameInput
          autoFocus={true}
          error={first.error}
          onChangeText={t => update({ type: 'first', value: t })}
          onSubmitEditing={() => last.ref.current.focus()}
          placeholder="Your First Name"
          ref={first.ref}
          returnKeyType="next"
          title="first name"
          validation={first.valid}
          value={first.value}
        />
        <NameInput
          autoCompleteType="name"
          autoCapitalize="words"
          blurOnSubmit={true}
          error={last.error}
          onChangeText={t => update({ type: 'last', value: t })}
          placeholder="Your Last Name"
          ref={last.ref}
          returnKeyType="done"
          title="last name"
          validation={last.valid}
          value={last.value}
        />
        <PillButton onPress={submitForm}>NEXT</PillButton>
      </ScrollLayout>
    </TopLayout>
  )
}

export default CreateProfile
