import React from 'react'
import * as S from './ContentLayout.style'

const Center = ({ children = null, style = {} }) => {
  return <S.Center style={style}>{children}</S.Center>
}

const Scroll = ({ children = null, style = {} }) => {
  return <S.Scroll style={style}>{children}</S.Scroll>
}

const Top = ({ children = null, style = {} }) => {
  return <S.Top style={style}>{children}</S.Top>
}

export default {
  Center,
  Scroll,
  Top
}
