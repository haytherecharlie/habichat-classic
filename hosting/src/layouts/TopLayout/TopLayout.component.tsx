import React from "react"
import GlobalStyle from "assets/theme/global.style"
import * as S from "./TopLayout.style"

const TopLayout = ({ children }) => {
  return (
    <S.TopLayout>
      <GlobalStyle />
      {children}
    </S.TopLayout>
  )
}

export default TopLayout
