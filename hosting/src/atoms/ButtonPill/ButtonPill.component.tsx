import React from 'react'
import types from 'prop-types'
import * as S from './ButtonPill.style'

const ButtonPill = ({ type, invert, children, ...props }) => {
  return type === 'button' ? (
    <S.Pill invert={invert}>
      <S.ButtonLink invert={invert} role="button" aria-pressed="false" {...props}>
        {children}
      </S.ButtonLink>
    </S.Pill>
  ) : (
    <S.Pill invert={invert}>
      <S.AniLink invert={invert} {...props}>
        {children}
      </S.AniLink>
    </S.Pill>
  )
}

ButtonPill.defaultProps = {
  type: 'button',
  invert: 'false'
}

ButtonPill.propTypes = {
  type: types.oneOf(['button', 'link']),
  invert: types.oneOf(['true', 'false'])
}

export default ButtonPill
