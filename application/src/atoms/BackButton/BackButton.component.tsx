import React from 'react'
import { useDispatch } from 'react-redux'
import { Entypo } from '@expo/vector-icons'
import Text from 'atoms/Text'
import * as A from 'services/redux/actions'
import * as S from './BackButton.style'

const BackButton = ({ screen }) => {
  const dispatch = useDispatch()

  return (
    <S.BackButton onPress={() => dispatch({ type: A.NAVIGATE, screen })}>
      <Entypo {...S.IconStyle} />
      <Text type="h3" style={S.TextStyle} text="back-button" />
    </S.BackButton>
  )
}

export default BackButton
