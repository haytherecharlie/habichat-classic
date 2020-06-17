import React from 'react'
import { formatMessage } from 'ui/language/translations'
import * as S from './Text.style'

const Text = ({ size = 'M', bold = false, text = 'placeholder', style = {}, unique = false, link = false }) => {
  if (size === 'XL') {
    return (
      <S.Text style={{ paddingTop: 5 }}>
        <S.XLarge bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.XLarge>
      </S.Text>
    )
  }

  if (size === 'L') {
    return (
      <S.Text style={{ paddingTop: 3 }}>
        <S.Large bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.Large>
      </S.Text>
    )
  }

  if (size === 'M') {
    return (
      <S.Text style={{ paddingTop: 2 }}>
        <S.Medium bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.Medium>
      </S.Text>
    )
  }

  if (size === 'S') {
    return (
      <S.Text style={{ paddingTop: 2 }}>
        <S.Small bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.Small>
      </S.Text>
    )
  }

  if (size === 'XS') {
    return (
      <S.Text style={{ paddingTop: 2 }}>
        <S.XSmall bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.XSmall>
      </S.Text>
    )
  }
}

export default Text
