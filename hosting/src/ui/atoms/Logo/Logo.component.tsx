import React from 'react'
import Text from 'ui/atoms/Text'
import * as S from './Logo.style'

const Logo = ({ type = null, style = {} }) => {
  switch (type) {
    case 'logomark':
      return <S.Logomark src="/image/habichat.png" alt="habichat logo" style={style} />
    case 'logotype':
      return (
        <S.Logotype style={{ paddingTop: 5 }}>
          <S.Habichat style={{ letterSpacing: -1 }} bold>
            habichat
          </S.Habichat>
        </S.Logotype>
      )
    default:
      return <S.CombinationMark src="/image/logo-bright.png" alt="habichat" />
  }
}

export default Logo
