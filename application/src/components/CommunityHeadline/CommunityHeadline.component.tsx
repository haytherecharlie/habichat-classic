import React from 'react'
import { useSelector } from 'react-redux'
import Text from 'atoms/Text'
import * as S from './CommunityHeadline.style'

const CommunityHeadline = () => {
  const { name, city } = useSelector(s => s.community)
  return (
    <S.CommunityHeadline>
      <Text size="h3">{`${name}, ${city}`}</Text>
    </S.CommunityHeadline>
  )
}

export default CommunityHeadline
