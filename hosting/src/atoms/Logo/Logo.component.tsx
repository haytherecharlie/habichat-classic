import React from 'react'
import Text from 'atoms/Text'
import * as S from './Logo.style'

const Logo = () => {
  return (
    <S.Logo>
      <Text size="XL" text="habichat" unique bold />
    </S.Logo>
  )
}

export default Logo
