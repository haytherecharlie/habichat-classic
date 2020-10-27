import React from 'react'
import * as S from './Logo.style'

const Logo = ({ type = null, style = {} }) => {
  switch (type) {
    case 'logomark':
      return <S.Logomark src="/image/habichat.png" alt="habichat logo" style={style} />
    case 'logotype':
      return (
        <S.Logotype style={{ paddingTop: 5, ...style }}>
          <S.Habichat style={{ letterSpacing: -1, ...style }} bold>
            habichat
          </S.Habichat>
        </S.Logotype>
      )
    default:
      return <S.CombinationMark style={style} src="/image/combomark.png" alt="habichat" />
  }
}

export default Logo
