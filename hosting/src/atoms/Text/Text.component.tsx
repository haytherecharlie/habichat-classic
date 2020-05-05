import React from 'react'
import { useIntl } from 'gatsby-plugin-locale'
import * as S from './Text.style'

const Text = ({ size = 'M', bold = false, text = 'placeholder', style = {}, unique = false }) => {
  const { formatMessage } = useIntl()

  if (size === 'XL') {
    return (
      <S.XLarge bold={bold} style={style}>
        {unique ? text : formatMessage({ id: text })}
      </S.XLarge>
    )
  }
  if (size === 'L') {
    return (
      <S.Large bold={bold} style={style}>
        {unique ? text : formatMessage({ id: text })}
      </S.Large>
    )
  }
  if (size === 'M') {
    return (
      <S.Medium bold={bold} style={style}>
        {unique ? text : formatMessage({ id: text })}
      </S.Medium>
    )
  }
  if (size === 'S') {
    return (
      <S.Small bold={bold} style={style}>
        {unique ? text : formatMessage({ id: text })}
      </S.Small>
    )
  }
  if (size === 'XS') {
    return (
      <S.XSmall bold={bold} style={style}>
        {unique ? text : formatMessage({ id: text })}
      </S.XSmall>
    )
  }
}

export default Text
