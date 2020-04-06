import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from 'atoms/Avatar'
import Text from 'atoms/Text'
// import Compose from 'components/Compose'
// import MessageList from 'components/MessageList'
// import SubHeader from 'components/SubHeader'
import CenterLayout from 'layouts/CenterLayout'
import { auth } from 'services/firebase'

const Community = () => {
  const { displayName, photoURL } = useSelector(s => s.user.account)
  return (
    <CenterLayout>
      <Avatar source={{ uri: photoURL }} onPress={() => auth().signOut()} />
      <Text type="h3" text={displayName} unique></Text>
      {/* <SubHeader /> */}
      {/* <MessageList />
      <Compose /> */}
    </CenterLayout>
  )
}

export default Community
