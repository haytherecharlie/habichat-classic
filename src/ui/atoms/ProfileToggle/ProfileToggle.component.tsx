import React from 'react'
import Avatar from 'ui/atoms/Avatar'
import Link from 'ui/atoms/Link'
import * as S from './ProfileToggle.style'

const ProfileToggle = ({ style = {} }) => {
  return (
    <Link type="internal" href="/">
      <Avatar src="/image/profile.png" alt="profile" style={{ height: 25, width: 25, border: 'none', ...style }} />
    </Link>
  )
}

export default ProfileToggle
