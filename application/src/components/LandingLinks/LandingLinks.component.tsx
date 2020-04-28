import React from 'react'
import { useDispatch } from 'react-redux'
import PillButton from 'atoms/PillButton'
import WebBrowser from 'atoms/WebBrowser'
import translate from 'language/translate'
import * as A from 'services/redux/actions'
import * as S from './LandingLinks.style'

const LandingLinks = () => {
  const dispatch = useDispatch()
  const lang = translate.t('lang')

  return (
    <S.LandingLinks>
      <PillButton
        style={{ marginBottom: 10 }}
        text="sign-in"
        onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })}
      />
      <PillButton text="learn-more" white={true} onPress={() => dispatch({ type: A.MODAL, value: 'onboarding' })} />
      <S.Links>
        <WebBrowser text="privacy-policy" url={`https://habi.chat/${lang}/privacy/`} />
        <WebBrowser text="terms-of-service" url={`https://habi.chat/${lang}/terms/`} />
      </S.Links>
    </S.LandingLinks>
  )
}

export default LandingLinks
