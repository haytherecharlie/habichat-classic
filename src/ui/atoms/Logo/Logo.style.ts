import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Logomark = styled('img')({
  height: 24,
  width: 24,
  marginTop: -2
})

export const CombinationMark = styled('img')({
  height: 25,
  width: 'auto'
})

export const Logotype = styled('div')(style => ({
  ...style
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
