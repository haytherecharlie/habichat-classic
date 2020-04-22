import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from 'atoms/Avatar'
import Logo from 'atoms/Logo'
import Text from 'atoms/Text'
import { auth } from 'services/firebase'
import ContentLayout from 'layouts/ContentLayout'
import * as S from './CommunityNav.style'

const CommunityNav = () => {
  const { photoURL } = useSelector(s => s.user.profile)

  return (
    <S.CommunityNav>
      <S.TopRow>
        <Logo type="logotype" />
        <Avatar source={{ uri: photoURL }} onPress={() => auth().signOut()} />
      </S.TopRow>
      <S.BottomRow>
        <Text type="h3" text="Ville Émard, Montréal QC" unique />
      </S.BottomRow>
    </S.CommunityNav>
  )
}

export default CommunityNav
