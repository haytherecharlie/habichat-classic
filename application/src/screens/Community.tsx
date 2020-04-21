import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from 'atoms/Avatar'
import AddressInput from 'atoms/AddressInput'
import Header from 'components/Header'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'
import { auth } from 'services/firebase'

const Community = () => {
  const { photoURL } = useSelector(s => s.user.profile)
  auth().signOut()
  return (
    <ScreenLayout>
      <Header.Basic />
      <ContentLayout.Top>
        <Avatar source={{ uri: photoURL }} onPress={() => auth().signOut()} />
        <AddressInput />
      </ContentLayout.Top>
    </ScreenLayout>
  )
}

export default Community
