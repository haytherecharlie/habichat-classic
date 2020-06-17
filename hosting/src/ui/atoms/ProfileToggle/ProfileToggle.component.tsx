import React from 'react'
import { useDispatch } from 'react-redux'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import * as S from './ProfileToggle.style'

const ProfileToggle = () => {
  const dispatch = useDispatch()
  const onClick = () => dispatch({ type: 'NAV' })

  return (
    <Link type="internal" href="/" onClick={onClick}>
      <ButtonPill style={{ padding: `7px 15px`, flex: 1 }}>
        <Text size="XS" text="LOG IN" style={{ color: '#FFF' }} bold unique />
      </ButtonPill>
    </Link>
  )
}

export default ProfileToggle
