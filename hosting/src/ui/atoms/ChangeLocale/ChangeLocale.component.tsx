import React from 'react'
import { navigate } from 'gatsby'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import { changeLocale } from 'ui/language/translations'
import * as S from './ChangeLocale.style'

const ChangeLocale = ({ onClick }) => {
  const handleClick = lang => {
    onClick()
    navigate(changeLocale(lang))
  }

  return (
    <S.ChangeLocale>
      <Link type="button" onClick={() => handleClick('/en')}>
        <Text size="S" text="EN" unique link />
      </Link>
      <S.Divider />
      <Link type="button" onClick={() => handleClick('/fr')}>
        <Text size="S" text="FR" unique link />
      </Link>
    </S.ChangeLocale>
  )
}

export default ChangeLocale
