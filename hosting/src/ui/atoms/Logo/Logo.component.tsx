import React from 'react'
import Text from 'ui/atoms/Text'
import * as S from './Logo.style'

const Logo = ({ type = null, style = {} }) => {
  switch (type) {
    case 'logomark':
      return <S.Logomark src="/image/habichat.png" alt="habichat logo" style={style} />
    case 'logotype':
      return <Text size="XL" text="habichat" unique bold style={{ letterSpacing: -1, ...style }} />
    default:
      return (
        <S.CombinationMark style={style}>
          <S.Logomark src="/image/small-logo.png" alt="habichat logo" />
          <Text size="XL" text="habichat" unique bold style={{ letterSpacing: -1 }} />
        </S.CombinationMark>
      )
  }
}

export default Logo
