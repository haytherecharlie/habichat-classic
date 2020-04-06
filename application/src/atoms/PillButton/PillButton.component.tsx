import React from 'react'
import Text from 'atoms/Text'
import theme from 'assets/theme'
import * as S from './PillButton.style'

const PillButton = ({ onPress, text = '', style = {} }) => {
  return (
    <S.PillButton onPress={onPress} style={style}>
      <Text text={text} type="h3" style={{ color: theme.WHITE, textTransform: 'uppercase' }}></Text>
    </S.PillButton>
  )
}

export default PillButton
