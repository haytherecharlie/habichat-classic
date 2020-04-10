import React from 'react'
import { useDispatch } from 'react-redux'
import PillButton from 'atoms/PillButton'
import VideoBackground from 'atoms/VideoBackground'
import Logo from 'atoms/Logo'
import WebBrowser from 'atoms/WebBrowser'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'
import * as A from 'services/redux/actions'

const Landing = () => {
  const dispatch = useDispatch()

  return (
    <ScreenLayout statusBarStyle="light-content" showStatusBar={true}>
      <VideoBackground />
      <ContentLayout.Padding>
        <ContentLayout.Center style={{ flex: 1 }} />
        <ContentLayout.Center style={{ flex: 5 }}>
          <Logo />
        </ContentLayout.Center>
        <ContentLayout.Top style={{ flex: 1, justifyContent: 'space-around' }}>
          <PillButton text="sign-in" onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })} />
          <PillButton
            text="learn-more"
            white={true}
            onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })}
          />
        </ContentLayout.Top>
        <ContentLayout.Top
          style={{
            height: 80,
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}>
          <WebBrowser text="privacy-policy" url="https://habi.chat/privacy" />
          <WebBrowser text="terms-of-service" url="https://habi.chat/terms" />
        </ContentLayout.Top>
      </ContentLayout.Padding>
    </ScreenLayout>
  )
}

export default Landing
