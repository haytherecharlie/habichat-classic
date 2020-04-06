import React from 'react'
import translate from 'language/translate'
import * as S from './Text.style'

const Text = ({ type = null, text = '', style = {}, unique = false }) => {
  switch (type) {
    case 'h1':
      return <S.h1 style={style}>{unique ? text : translate.t(text)}</S.h1>
    case 'h2':
      return <S.h2 style={style}>{unique ? text : translate.t(text)}</S.h2>
    case 'h3':
      return <S.h3 style={style}>{unique ? text : translate.t(text)}</S.h3>
    case 'label':
      return <S.Label style={style}>{unique ? text : translate.t(text)}</S.Label>
    case 'error':
      return <S.Error style={style}>{unique ? text : translate.t(text)}</S.Error>
    case 'p':
      return <S.p style={style}>{unique ? text : translate.t(text)}</S.p>
    default:
      return <S.span style={style}>{unique ? text : translate.t(text)}</S.span>
  }
}

export default Text
