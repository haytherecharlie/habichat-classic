import React from 'react'
import * as S from './ContentLayout.style'

const ContentLayout = ({ children = null, style = {} }) => {
  return <S.ContentLayout style={style}>{children}</S.ContentLayout>
}

export default ContentLayout
