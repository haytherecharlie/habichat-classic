import React from 'react'
import { useSelector } from 'react-redux'
import { TouchableOpacity, Text } from 'react-native'
import { auth } from 'services/firebase'
import CenterLayout from 'layouts/CenterLayout'
import SubHeader from 'components/SubHeader'
import MessageList from 'components/MessageList'
import Compose from 'components/Compose'

const Home = () => {
  const { profile } = useSelector(s => s.user)
  return (
    <CenterLayout>
      <Text>{profile.displayName}</Text>
      <TouchableOpacity onPress={() => auth.signOut()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      {/* <SubHeader />
      <MessageList />
      <Compose /> */}
    </CenterLayout>
  )
}

export default Home
