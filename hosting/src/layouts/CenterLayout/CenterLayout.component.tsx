import React from "react"
import GlobalStyle from "assets/theme/global.style"
import * as S from "./CenterLayout.style"

const CenterLayout = ({ children }) => {
  return (
    <S.CenterLayout>
      <GlobalStyle />
      {children}
    </S.CenterLayout>
  )
}

export default CenterLayout
