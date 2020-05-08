import React from 'react'
import { changeLocale } from 'gatsby-plugin-locale'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import * as S from './ChangeLocale.style'

const ChangeLocale = ({ onClick = () => null }) => {
  const handleClick = lang => {
    onClick()
    changeLocale(lang)
  }

  return (
    <S.ChangeLocale>
      <Link onClick={() => handleClick('en')}>
        <Text size="S" text="EN" unique link />
      </Link>
      <S.Divider />
      <Link onClick={() => handleClick('fr')}>
        <Text size="S" text="FR" unique link />
      </Link>
    </S.ChangeLocale>
  )
}

export default ChangeLocale
