import React from 'react'
import * as S from './ButtonPill.style'

const ButtonPill = ({ invert = false, children = null, style = {} }) => {
  return (
    <div style={{ paddingBottom: 5 }}>
      <S.Pill invert={invert} style={style}>
        {children}
      </S.Pill>
    </div>
  )
}

export default ButtonPill
