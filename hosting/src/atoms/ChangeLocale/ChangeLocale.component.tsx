import React from 'react'
import { navigate } from 'gatsby'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import { changeLocale } from 'language/translations'
import * as S from './ChangeLocale.style'

const ChangeLocale = () => {
  const handleClick = lang => {
    navigate(changeLocale(lang))
  }

  return (
    <S.ChangeLocale>
      <Link onClick={() => handleClick('/en')}>
        <Text size="S" text="EN" unique link />
      </Link>
      <S.Divider />
      <Link onClick={() => handleClick('/fr')}>
        <Text size="S" text="FR" unique link />
      </Link>
    </S.ChangeLocale>
  )
}

export default ChangeLocale
