import React from 'react'
import VideoBackground from 'atoms/VideoBackground'
import Logo from 'atoms/Logo'
import LandingForm from 'components/LandingForm'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'

const Landing = () => {
  return (
    <ScreenLayout statusBarStyle="light-content" showStatusBar={true}>
      <VideoBackground />
      <ContentLayout.Padding>
        <ContentLayout.Center style={{ flex: 1 }} />
        <ContentLayout.Center style={{ flex: 1 }}>
          <Logo />
        </ContentLayout.Center>
        <ContentLayout.Center style={{ flex: 1 }}>
          <LandingForm />
        </ContentLayout.Center>
      </ContentLayout.Padding>
    </ScreenLayout>
  )
}

export default Landing
