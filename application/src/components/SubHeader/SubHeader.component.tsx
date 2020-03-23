import React from 'react'
import { useSelector } from 'react-redux'
import Text from 'atoms/Text'
import * as S from './SubHeader.style'

const SubHeader = () => {
  const { name, city } = useSelector(s => s.community)
  return (
    <S.SubHeader elevation={3}>
      <Text size="h3">{`${name || 'Con Air'}, ${city || 'Culver City'}`}</Text>
    </S.SubHeader>
  )
}

export default SubHeader
