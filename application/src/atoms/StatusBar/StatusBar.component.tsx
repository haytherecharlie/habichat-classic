import React from 'react'
import { StatusBar as RnStatusBar } from 'react-native'
import * as S from './StatusBar.style'

const StatusBar = () => {
  return (
    <S.StatusBar>
      <RnStatusBar { ...S.RnStatusBar } />
    </S.StatusBar>
  )
}

export default StatusBar
