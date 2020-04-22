import React from 'react'
import icon from 'assets/images/logoicon.png'
import * as S from './Logo.style'

const Logo = ({ type }) => {
  if (type === 'logomark') return <S.Logomark source={icon} alt="habichat logo" />
  if (type === 'logotype') return <S.Logotype>habichat</S.Logotype>
  if (type === 'combination-mark')
    return (
      <S.CombinationMark>
        <S.Logomark source={icon} alt="habichat logo" />
        <S.Logotype>habichat</S.Logotype>
      </S.CombinationMark>
    )
}

export default Logo
