import React from 'react'
import SubHeader from 'components/SubHeader'
import MessageList from 'components/MessageList'
import Compose from 'components/Compose'
import * as S from './Home.style'

const Home = () => {
  return (
    <S.Home>
      <SubHeader />
      <MessageList />
      <Compose />
    </S.Home>
  )
}

export default Home
