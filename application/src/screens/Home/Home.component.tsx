import React from 'react'
import CommunityHeadline from 'components/CommunityHeadline'
import MessageList from 'components/MessageList'
import Compose from 'components/Compose'
import * as S from './Home.style'

const Home = () => {
  return (
    <S.Wrapper>
      <CommunityHeadline />
      <MessageList />
      <Compose />
    </S.Wrapper>
  )
}

export default Home
