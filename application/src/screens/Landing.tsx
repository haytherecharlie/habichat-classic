import React from 'react'
import VideoBackground from 'atoms/VideoBackground'
import Logo from 'atoms/Logo'
import LandingLinks from 'components/LandingLinks'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'

const Landing = () => {
  return (
    <ScreenLayout>
      <VideoBackground />
      <ContentLayout.Padding>
        <ContentLayout.Center />
        <ContentLayout.Center>
          <Logo type="logomark" />
        </ContentLayout.Center>
        <ContentLayout.Center>
          <LandingLinks />
        </ContentLayout.Center>
      </ContentLayout.Padding>
    </ScreenLayout>
  )
}

export default Landing
