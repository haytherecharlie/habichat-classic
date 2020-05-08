import React from 'react'
import * as S from './Link.style'

const Link = ({ href = null, onClick = null, children = null }) => {
  return typeof href !== 'string' ? (
    <S.ButtonLink onClick={onClick}>{children}</S.ButtonLink>
  ) : href.substr(0, 1) === '/' ? (
    <S.InternalLink to={href}>{children}</S.InternalLink>
  ) : (
    <S.ExternalLink href={href}>{children}</S.ExternalLink>
  )
}

export default Link
