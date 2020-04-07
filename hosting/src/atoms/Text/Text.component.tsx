import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import * as S from './Text.style'

const Text = ({ size = null, text = 'placeholder', style = {}, unique = false }) => {
  const { formatMessage } = useIntl()

  switch (size) {
    case 'h1':
      return <S.h1 style={style}>{unique ? text : formatMessage({ id: text })}</S.h1>
    case 'h2':
      return <S.h2 style={style}>{unique ? text : formatMessage({ id: text })}</S.h2>
    case 'h3':
      return <S.h3 style={style}>{unique ? text : formatMessage({ id: text })}</S.h3>
    case 'p':
      return <S.p style={style}>{unique ? text : formatMessage({ id: text })}</S.p>
    default:
      return <S.span style={style}>{unique ? text : formatMessage({ id: text })}</S.span>
  }
}

export default Text
