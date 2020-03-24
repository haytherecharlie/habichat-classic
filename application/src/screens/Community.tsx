import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { auth } from 'services/firebase'
import CenterLayout from 'layouts/CenterLayout'
import SubHeader from 'components/SubHeader'
import MessageList from 'components/MessageList'
import Compose from 'components/Compose'

const Home = () => {
  return (
    <CenterLayout>
      <TouchableOpacity onPress={() => auth.signOut()}>
        <Text>Log Out</Text>
      </TouchableOpacity>
      {/* <SubHeader />
      <MessageList />
      <Compose /> */}
    </CenterLayout>
  )
}

export default Home
