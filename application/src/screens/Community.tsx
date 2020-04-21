import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from 'atoms/Avatar'
import Text from 'atoms/Text'
import Header from 'components/Header'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'
import { auth } from 'services/firebase'

const Community = () => {
  const { firstName, photoURL } = useSelector(s => s.user.profile)

  return (
    <ScreenLayout>
      <Header.Basic />
      <ContentLayout.Top>
        <Text size="h1">{firstName}</Text>
        <Avatar source={{ uri: photoURL }} onPress={() => auth().signOut()} />
      </ContentLayout.Top>
    </ScreenLayout>
  )
}

export default Community
