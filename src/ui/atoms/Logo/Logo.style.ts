import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Logomark = styled('img')(P => ({
  height: 120,
  width: `auto`,
  marginTop: -2,
  ...P.style
}))

export const CombinationMark = styled('img')(P => ({
  height: `auto`,
  width: `80%`,
  ...P.style
}))

export const Logotype = styled('div')(P => ({
  ...P.style
}))

export const Habichat = styled('h1')(P => ({
  verticalAlign: 'bottom',
  lineHeight: theme.FONT_XL + 5 + 'px',
  fontSize: theme.FONT_XL + 'px',
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...P.style
}))
