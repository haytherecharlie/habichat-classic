import React from 'react'
import { StatusBar as SBar } from 'react-native'
import * as S from './StatusBar.style'

const StatusBar = () => {
  return (
    <S.StatusBar>
      <SBar {...S.SBar} />
    </S.StatusBar>
  )
}

export default StatusBar
