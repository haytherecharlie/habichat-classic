import React from 'react'
import { useDispatch } from 'react-redux'
import { Entypo } from '@expo/vector-icons'
import Text from 'atoms/Text'
import theme from 'assets/theme'
import * as A from 'services/redux/actions'
import * as S from './BackButton.style'

const BackButton = ({ screen }) => {
  const dispatch = useDispatch()
  
  return (
    <S.BackButton onPress={() => dispatch({ type: A.NAVIGATE, screen })}>
      <Entypo {...S.IconStyle} />
      <Text size="h1" style={{ color: theme.BRAND_COLOR }}>
        Back
      </Text>
    </S.BackButton>
  )
}

export default BackButton
