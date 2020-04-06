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
      await auth().currentUser.updateProfile({
          displayName: `${city.value}, ${last.value}, ${first.value}`,
          photoURL: avatar.value
        })
        .catch(err => console.log(err))
      return dispatch({ type: A.SIGN_IN, value: auth().currentUser })
    }
    return update({ type: 'find-errors' })
  }

  return (
    <TopLayout>
      <Header.CreateProfile title="create-profile" />
      <ScrollLayout>
        <NameInput
          autoFocus={true}
          error={first.error}
          onChangeText={value => update({ type: 'first', value })}
          onSubmitEditing={() => last.ref.current.focus()}
          placeholder="your-first-name"
          ref={first.ref}
          returnKeyType="next"
          title="first-name"
          validation={first.valid}
          value={first.value}
        />
        <NameInput
          autoCompleteType="name"
          autoCapitalize="words"
          blurOnSubmit={true}
          error={last.error}
          onChangeText={value => update({ type: 'last', value })}
          placeholder="your-last-name"
          ref={last.ref}
          returnKeyType="done"
          title="last-name"
          validation={last.valid}
          value={last.value}
        />
        <PillButton onPress={submitForm} text="next" style={{ marginTop: 30 }}></PillButton>
      </ScrollLayout>
    </TopLayout>
  )
}

export default CreateProfile
