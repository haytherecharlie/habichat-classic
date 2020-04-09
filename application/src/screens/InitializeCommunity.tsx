import React from 'react'
import Spinner from 'atoms/Spinner'
import Header from 'components/Header'
import ContentLayout from 'layouts/ContentLayout'
import ScreenLayout from 'layouts/ScreenLayout'
import useCommunityInitialization from 'utils/hooks/useCommunityInitialization'

const InitializeCommunity = () => {
  useCommunityInitialization()

  return (
    <ScreenLayout>
      <Header.Basic />
      <ContentLayout>
        <Spinner />
      </ContentLayout>
    </ScreenLayout>
  )
}

export default InitializeCommunity
