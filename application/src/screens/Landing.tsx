import React from 'react'
import { useDispatch } from 'react-redux'
import PillButton from 'atoms/PillButton'
import VideoBackground from 'atoms/VideoBackground'
import Logo from 'atoms/Logo'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'
import * as A from 'services/redux/actions'

const Landing = () => {
  const dispatch = useDispatch()

  return (
    <ScreenLayout>
      <VideoBackground />
      <ContentLayout.Center style={{ flex: 1 }} />
      <ContentLayout.Center style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
        <Logo />
      </ContentLayout.Center>
      <ContentLayout.Top style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
        <PillButton text="sign-in" onPress={() => dispatch({ type: A.NAVIGATE, screen: 'sign-in' })} />
      </ContentLayout.Top>
    </ScreenLayout>
  )
}

export default Landing
