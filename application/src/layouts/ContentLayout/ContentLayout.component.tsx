import React from 'react'
import * as S from './ContentLayout.style'

const Center = ({ children = null, style = {} }) => {
  return <S.Center style={style}>{children}</S.Center>
}

const Padding = ({ children = null, style = {} }) => {
  return <S.Padding style={style}>{children}</S.Padding>
}

const Scroll = ({ children = null, style = {} }) => {
  return <S.Scroll style={style}>{children}</S.Scroll>
}

const Top = ({ children = null, style = {} }) => {
  return <S.Top style={style}>{children}</S.Top>
}

export default {
  Center,
  Padding,
  Scroll,
  Top
}
