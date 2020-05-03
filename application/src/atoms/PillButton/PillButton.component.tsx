import React from 'react'
import Text from 'atoms/Text'
import theme from 'assets/theme'
import * as S from './PillButton.style'

const PillButton = ({ onPress, text = '', white = false, style = {}, unique = false }) => {
  return (
    <S.PillButton onPress={onPress} white={white} style={style}>
      <Text
        text={text}
        type="h3"
        style={{ color: white ? theme.BRAND_COLOR : theme.WHITE, textTransform: 'uppercase' }}
        unique={unique}
      />
    </S.PillButton>
  )
}

export default PillButton
