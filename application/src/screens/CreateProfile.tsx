import React from 'react'
import PostalCodeInput from 'atoms/PostalCodeInput'
import NameInput from 'atoms/NameInput'
import PillButton from 'atoms/PillButton'
import Header from 'components/Header'
import ContentLayout from 'layouts/ContentLayout'
import ScreenLayout from 'layouts/ScreenLayout'
import dbCreateProfile from 'services/firebase/database/createProfile'
import useCreateProfileReducer from 'utils/hooks/useCreateProfileReducer'

const CreateProfile = () => {
  const [state, update] = useCreateProfileReducer()

  const submitForm = async () => {
    return [state.first, state.last, state.postalCode].some(o => o.valid === 'valid')
      ? dbCreateProfile(state).catch(err => console.log(err))
      : update({ type: 'find-errors' })
  }

  return (
    <ScreenLayout statusBarStyle="light-content" showStatusBar={true}>
      <Header.CreateProfile title="create-profile" />
      <ContentLayout.Padding>
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
            error={state.last.error}
            onChangeText={value => update({ type: 'last', value })}
            onSubmitEditing={() => state.postalCode.ref.current.focus()}
            placeholder="your-last-name"
            ref={state.last.ref}
            returnKeyType="next"
            title="last-name"
            validation={state.last.valid}
            value={state.last.value}
          />
          <PostalCodeInput
            error={state.postalCode.error}
            onChangeText={value => update({ type: 'postal-code', value })}
            onSubmitEditing={submitForm}
            placeholder="your-postal-code"
            ref={state.postalCode.ref}
            returnKeyType="done"
            title="postal-code"
            validation={state.postalCode.valid}
            value={state.postalCode.value}
          />
          <PillButton onPress={submitForm} text="next" style={{ marginTop: 30 }}></PillButton>
        </ContentLayout.Scroll>
      </ContentLayout.Padding>
    </ScreenLayout>
  )
}

export default CreateProfile
