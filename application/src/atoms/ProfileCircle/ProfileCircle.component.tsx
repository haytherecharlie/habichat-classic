import React from 'react'
import defaultPic from 'assets/images/profile-pic.png'
import * as S from './ProfileCircle.style'

const ProfileCircle = () => {
  return <S.Circle source={defaultPic} alt="Nicolas Cage" />
}

export default ProfileCircle
