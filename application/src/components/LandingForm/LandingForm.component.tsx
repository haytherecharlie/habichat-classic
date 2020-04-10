import React from 'react'
import { useDispatch } from 'react-redux'
import PillButton from 'atoms/PillButton'
import WebBrowser from 'atoms/WebBrowser'
import * as A from 'services/redux/actions'
import * as S from './LandingForm.style'

const LandingForm = () => {
  const dispatch = useDispatch()

  return (
    <S.LandingForm>
      <PillButton
        style={{ marginBottom: 10 }}
        text="sign-in"
        onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })}
      />
      <PillButton text="learn-more" white={true} onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })} />
      <S.Links>
        <WebBrowser text="privacy-policy" url="https://habi.chat/privacy" />
        <WebBrowser text="terms-of-service" url="https://habi.chat/terms" />
      </S.Links>
    </S.LandingForm>
  )
}

export default LandingForm
