import React from 'react'
import { useDispatch } from 'react-redux'
import PostalCodeInput from 'atoms/PostalCodeInput'
import NameInput from 'atoms/NameInput'
import PillButton from 'atoms/PillButton'
import Header from 'components/Header'
import ContentLayout from 'layouts/ContentLayout'
import ScreenLayout from 'layouts/ScreenLayout'
import { auth } from 'services/firebase'
import * as A from 'services/redux/actions'
import useCreateProfileReducer from 'utils/hooks/useCreateProfileReducer'

const CreateProfile = () => {
  const dispatch = useDispatch()
  const [state, update] = useCreateProfileReducer()

  const submitForm = async () => {
    if ([state.first, state.last].some(o => o.valid === 'valid')) {
      await auth()
        .currentUser.updateProfile({
          displayName: `${state.city.value}, ${state.last.value}, ${state.first.value}`,
          photoURL: state.avatar.value
        })
        .catch(err => console.log(err))
      return dispatch({ type: A.SIGN_IN, value: auth().currentUser })
    }
    return update({ type: 'find-errors' })
  }

  return (
    <ScreenLayout statusBarStyle="light-content" showStatusBar={true}>
      <Header.CreateProfile title="create-profile" />
      {state.step.value === 'address' && (
        <ContentLayout.Top style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
          <PostalCodeInput />
        </ContentLayout.Top>
      )}

      {state.step.value === 'name' && (
        <ContentLayout.Scroll>
          <NameInput
            autoFocus={true}
            error={state.first.error}
            onChangeText={value => update({ type: 'first', value })}
            onSubmitEditing={() => state.last.ref.current.focus()}
            placeholder="your-first-name"
            ref={state.first.ref}
            returnKeyType="next"
            title="first-name"
            validation={state.first.valid}
            value={state.first.value}
          />
          <NameInput
            autoCompleteType="name"
            autoCapitalize="words"
            blurOnSubmit={true}
            error={state.last.error}
            onChangeText={value => update({ type: 'last', value })}
            placeholder="your-last-name"
            ref={state.last.ref}
            returnKeyType="done"
            title="last-name"
            validation={state.last.valid}
            value={state.last.value}
          />
          <PillButton onPress={submitForm} text="next" style={{ marginTop: 30 }}></PillButton>
        </ContentLayout.Scroll>
      )}
    </ScreenLayout>
  )
}

export default CreateProfile
