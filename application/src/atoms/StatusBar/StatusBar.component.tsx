import React from 'react'
import { StatusBar as RnStatusBar } from 'react-native'
import * as S from './StatusBar.style'

const StatusBar = () => {
  return (
    <S.StatusBar>
      <RnStatusBar barStyle="light-content" />
    </S.StatusBar>
  )
}

export default StatusBar
