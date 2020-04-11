import React from 'react'
import Text from 'atoms/Text'
import * as S from './Link.style'

const Link = ({ to, text = null }) => {
  return (
    <S.Link to={to}>
      <Text size="span" text={text}></Text>
    </S.Link>
  )
}

export default Link
