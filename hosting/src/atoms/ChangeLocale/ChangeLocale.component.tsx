import React from 'react'
import { changeLocale } from 'gatsby-plugin-intl'
import quebec from 'assets/images/quebec.jpg'
import canada from 'assets/images/canada.jpg'
import * as S from './ChangeLocale.style'

const ChangeLocale = () => {
  return (
    <S.ChangeLocale>
      <S.FlagLink onClick={() => changeLocale('en')}>
        <S.Image height="12px" src={canada} alt="english" />
      </S.FlagLink>
      <S.FlagLink onClick={() => changeLocale('fr')}>
        <S.Image height="12px" src={quebec} alt="québécois" />
      </S.FlagLink>
    </S.ChangeLocale>
  )
}

export default ChangeLocale
