import React from 'react'
import { StatusBar } from 'react-native'
import * as S from './ScreenLayout.style'

const ScreenLayout = ({ children, statusBarStyle, showStatusBar }) => {
  StatusBar.setBarStyle(statusBarStyle, showStatusBar)

  return <S.ScreenLayout>{children}</S.ScreenLayout>
}

export default ScreenLayout
