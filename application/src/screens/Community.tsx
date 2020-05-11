import React from 'react'
import { auth } from 'services/firebase'
import PillButton from 'atoms/PillButton'
import Header from 'components/Header'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'
import useFetchCommunity from 'utils/hooks/useFetchCommunity'

const Community = () => {
  useFetchCommunity()

  return (
    <ScreenLayout>
      <Header.Basic />
      <ContentLayout.Top>
        <PillButton onPress={() => auth().signOut()} text="signout" unique />
      </ContentLayout.Top>
    </ScreenLayout>
  )
}

export default Community
