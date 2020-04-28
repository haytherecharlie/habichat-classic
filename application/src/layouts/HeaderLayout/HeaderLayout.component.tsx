import React from 'react'
import StatusBar from 'atoms/StatusBar'
import ContentLayout from 'layouts/ContentLayout'
import * as S from './HeaderLayout.style'

const HeaderLayout = ({ children = null }) => {
  return (
    <S.HeaderLayout>
      <StatusBar />
      {children && <S.Header>{children}</S.Header>}
    </S.HeaderLayout>
  )
}

export default HeaderLayout
