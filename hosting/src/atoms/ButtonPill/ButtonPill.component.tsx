import React from 'react'
import types from 'prop-types'
import Text from 'atoms/Text'
import * as S from './ButtonPill.style'

const ButtonPill = ({ type, invert, children, ...props }) => {
  return type === 'button' ? (
    <S.Pill invert={invert}>
      <S.ButtonLink invert={invert} role="button" aria-pressed="false" {...props}>
        <Text color="inherit">{children}</Text>
      </S.ButtonLink>
    </S.Pill>
  ) : (
    <S.Pill invert={invert}>
      <S.AniLink invert={invert} {...props}>
        <Text color="inherit">{children}</Text>
      </S.AniLink>
    </S.Pill>
  )
}

ButtonPill.defaultProps = {
  type: 'button',
  invert: false,
  to: '/',
  onClick: () => {}
}

ButtonPill.propTypes = {
  type: types.oneOf(['button', 'link']),
  invert: types.bool,
  to: types.string,
  onClick: types.func,
  children: types.node.isRequired
}

export default ButtonPill
