import React from 'react'
import CenterLayout from 'layouts/CenterLayout'
import SubHeader from 'components/SubHeader'
import MessageList from 'components/MessageList'
import Compose from 'components/Compose'

const Home = () => {
  return (
    <CenterLayout>
      <SubHeader />
      <MessageList />
      <Compose />
    </CenterLayout>
  )
}

export default Home
