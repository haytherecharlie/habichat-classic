import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from 'atoms/Avatar'
import Text from 'atoms/Text'
import AddressInput from 'atoms/AddressInput'
import Header from 'components/Header'
// import Compose from 'components/Compose'
// import MessageList from 'components/MessageList'
// import SubHeader from 'components/SubHeader'
import CenterLayout from 'layouts/CenterLayout'
import { auth } from 'services/firebase'

const Community = () => {
  const { displayName, photoURL } = useSelector(s => s.user.account)
  return (
    <CenterLayout>
      <Header.Basic />
      <Avatar source={{ uri: photoURL }} onPress={() => auth().signOut()} />
      {/* <Text type="h3" text={displayName} unique></Text> */}
      <AddressInput />
      {/* <SubHeader /> */}
      {/* <MessageList />
      <Compose /> */}
    </CenterLayout>
  )
}

export default Community
