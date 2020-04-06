import React from 'react'
import { useSelector } from 'react-redux'
import { TouchableOpacity, Text } from 'react-native'
import { auth } from 'services/firebase'
import Avatar from 'atoms/Avatar'
import CenterLayout from 'layouts/CenterLayout'
import SubHeader from 'components/SubHeader'
import MessageList from 'components/MessageList'
import Compose from 'components/Compose'

const Community = () => {
  const { displayName, photoURL } = useSelector(s => s.user.account)
  return (
    <CenterLayout>
      <Avatar source={{ uri: photoURL }} onPress={() => auth.signOut()} />
      <Text>{displayName}</Text>
      {/* <SubHeader /> */}
      {/* <MessageList />
      <Compose /> */}
    </CenterLayout>
  )
}

export default Community
