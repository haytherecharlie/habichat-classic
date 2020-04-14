import React from 'react'
import { changeLocale } from 'gatsby-plugin-locale'
import Text from 'atoms/Text'
import * as S from './ChangeLocale.style'

const ChangeLocale = ({ onClick = () => null }) => {
  const handleClick = lang => {
    onClick()
    changeLocale(lang)
  }

  return (
    <S.ChangeLocale>
      <S.FlagLink onClick={() => handleClick('en')}>
        <Text text="en" />
      </S.FlagLink>
      <S.Divider />
      <S.FlagLink onClick={() => handleClick('fr')}>
        <Text text="fr" />
      </S.FlagLink>
    </S.ChangeLocale>
  )
}

export default ChangeLocale
