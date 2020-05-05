import React from 'react'
import Text from 'atoms/Text'
import * as S from './Link.style'

const Link = ({ to, text = null, unique = false, onClick = () => null }) => {
  return (
    <S.LinkWrapper>
      <S.ALink to={to} onClick={onClick}>
        <Text size="S" text={text} unique={unique} />
      </S.ALink>
    </S.LinkWrapper>
  )
}

export default Link
