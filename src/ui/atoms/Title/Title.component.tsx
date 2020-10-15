import React from 'react'
import { formatMessage } from 'ui/language/translations'
import * as S from './Title.style'

const Title = ({ size = 'h1', bold = false, text = 'placeholder', style = {}, unique = false, link = false }) => {
  if (size === 'h1') {
    return (
      <S.Title style={{ paddingTop: 5 }}>
        <S.H1 bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.H1>
      </S.Title>
    )
  }

  if (size === 'h2') {
    return (
      <S.Title style={{ paddingTop: 3 }}>
        <S.H2 bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.H2>
      </S.Title>
    )
  }

  if (size === 'h3') {
    return (
      <S.Title style={{ paddingTop: 2 }}>
        <S.H3 bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.H3>
      </S.Title>
    )
  }

  if (size === 'h4') {
    return (
      <S.Title style={{ paddingTop: 2 }}>
        <S.H4 bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.H4>
      </S.Title>
    )
  }

  if (size === 'h5') {
    return (
      <S.Title style={{ paddingTop: 2 }}>
        <S.H5 bold={bold} style={style} link={link}>
          {unique ? text : formatMessage(text)}
        </S.H5>
      </S.Title>
    )
  }
}

export default Title
