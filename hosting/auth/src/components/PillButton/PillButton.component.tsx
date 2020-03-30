import React from 'react'
import * as S from './PillButton.style'

const PillButton = ({ darkMode, onClick }) => {
  return (
    <S.PillButton id="sign-in-button" darkMode={darkMode} onClick={onClick}>
      NEXT
    </S.PillButton>
  )
}

export default PillButton
