import React from 'react'
import { useDispatch } from 'react-redux'
import Text from 'atoms/Text'
import * as S from './Link.style'

const Link = ({ href = null, onClick = () => {}, children = null }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_NAV' })
    onClick()
  }

  return typeof href !== 'string' ? (
    <S.ButtonLink onClick={handleClick}>{children}</S.ButtonLink>
  ) : href.substr(0, 1) === '/' ? (
    <S.InternalLink to={href} onClick={handleClick}>
      {children}
    </S.InternalLink>
  ) : (
    <S.ExternalLink href={href} onClick={handleClick}>
      {children}
    </S.ExternalLink>
  )
}

export default Link
