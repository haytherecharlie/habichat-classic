import React from 'react'
import { changeLocale } from 'gatsby-plugin-intl'
import Text from 'atoms/Text'
import * as S from './ChangeLocale.style'

const ChangeLocale = () => {
  return (
    <S.ChangeLocale>
      <S.FlagLink onClick={() => changeLocale('en')}>
        <Text text="en" />
      </S.FlagLink>
      <S.Divider />
      <S.FlagLink onClick={() => changeLocale('fr')}>
        <Text text="fr" />
      </S.FlagLink>
    </S.ChangeLocale>
  )
}

export default ChangeLocale
