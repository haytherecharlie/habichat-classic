import React from 'react'
import Text from 'atoms/Text'
import * as S from './Link.style'

const Link = ({ to, text = null, onClick = () => null }) => {
  return (
    <S.Link to={to} onClick={onClick}>
      <Text size="span" text={text}></Text>
    </S.Link>
  )
}

export default Link
