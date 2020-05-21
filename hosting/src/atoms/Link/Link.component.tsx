import React from 'react'
import { useDispatch } from 'react-redux'
import * as S from './Link.style'

const Link = ({ href = null, onClick = () => {}, children = null, style = {} }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_NAV' })
    onClick()
  }

  return typeof href !== 'string' ? (
    <S.ButtonLink style={style} onClick={handleClick}>
      {children}
    </S.ButtonLink>
  ) : href.substr(0, 1) === '/' ? (
    <S.InternalLink style={style} to={href} onClick={handleClick}>
      {children}
    </S.InternalLink>
  ) : (
    <S.ExternalLink style={style} href={href} onClick={handleClick}>
      {children}
    </S.ExternalLink>
  )
}

export default Link
