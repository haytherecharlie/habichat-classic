import React from 'react'
import Text from 'atoms/Text'
import theme from 'assets/theme'
import * as S from './ButtonPill.style'

const ButtonPill = ({ invert = false, text = '', unique = false, style = {} }) => {
  return (
    <S.Pill invert={invert}>
      <Text
        size="S"
        text={text}
        bold
        unique={unique}
        style={{ textTransform: 'uppercase', color: invert ? theme.BRAND_COLOR : theme.WHITE, ...style }}
      />
    </S.Pill>
  )
}

export default ButtonPill
