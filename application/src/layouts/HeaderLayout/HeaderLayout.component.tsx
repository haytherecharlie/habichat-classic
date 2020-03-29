import React, { Fragment } from 'react'
import StatusBar from 'atoms/StatusBar'
import theme from 'assets/theme'
import * as S from './HeaderLayout.style'

const HeaderLayout = ({ children = null }) => {
  return (
    <Fragment>
      <StatusBar />
      {children && <S.Header>{children}</S.Header>}
    </Fragment>
  )
}

export default HeaderLayout
