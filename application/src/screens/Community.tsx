import React from 'react'
import { useSelector } from 'react-redux'
import Text from 'atoms/Text'
import CommunityNav from 'components/CommunityNav'
import Header from 'components/Header'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'

const Community = () => {
  const { firstName } = useSelector(s => s.user.profile)

  return (
    <ScreenLayout>
      <Header.Basic />
      <ContentLayout.Top>
        <CommunityNav />
      </ContentLayout.Top>
    </ScreenLayout>
  )
}

export default Community
