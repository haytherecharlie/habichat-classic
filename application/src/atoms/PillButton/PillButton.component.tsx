import React from 'react'
import Text from 'atoms/Text'
import theme from 'assets/theme'
import * as S from './PillButton.style'

const PillButton = ({ onPress, text = '', white = false }) => {
  return (
    <S.PillButton onPress={onPress} white={white}>
      <Text
        text={text}
        type="h3"
        style={{ color: white ? theme.BRAND_COLOR : theme.WHITE, textTransform: 'uppercase' }}
      />
    </S.PillButton>
  )
}

export default PillButton
