import React from 'react'
import { useDispatch } from 'react-redux'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import * as S from './ChangeLocale.style'

const ChangeLocale = ({ onClick = () => {} }) => {
  const dispatch = useDispatch()

  const changeLocale = language => {
    dispatch({ type: 'LANGUAGE', language })
    onClick()
  }

  return (
    <S.ChangeLocale>
      <Link type="button" onClick={() => changeLocale('en')}>
        <Text size="XS" text="EN" unique link />
      </Link>
      <S.Divider />
      <Link type="button" onClick={() => changeLocale('fr')}>
        <Text size="XS" text="FR" unique link />
      </Link>
    </S.ChangeLocale>
  )
}

export default ChangeLocale
