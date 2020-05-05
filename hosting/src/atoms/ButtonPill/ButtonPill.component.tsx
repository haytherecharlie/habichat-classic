import React from 'react'
import Text from 'atoms/Text'
import theme from 'assets/theme'
import * as S from './ButtonPill.style'

const ButtonPill = ({ type, invert = false, text, unique = false, ...props }) => {
  return type === 'button' ? (
    <S.Pill invert={invert}>
      <S.ButtonLink invert={invert} role="button" aria-pressed="false" {...props}>
        <Text
          size="S"
          text={text}
          bold
          unique
          style={{ textTransform: 'uppercase', color: invert ? theme.BRAND_COLOR : theme.WHITE }}
        />
      </S.ButtonLink>
    </S.Pill>
  ) : (
    <S.Pill invert={invert}>
      <S.AniLink invert={invert} {...props}>
        <Text
          size="S"
          text={text}
          bold
          unique
          style={{ textTransform: 'uppercase', color: invert ? theme.BRAND_COLOR : theme.WHITE }}
        />
      </S.AniLink>
    </S.Pill>
  )
}

export default ButtonPill
