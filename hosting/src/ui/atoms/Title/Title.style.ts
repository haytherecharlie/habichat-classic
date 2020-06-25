import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Title = styled('div')(style => ({
  ...style
}))

export const H1 = styled('h1')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_XL + 5 + 'px',
  fontSize: theme.FONT_XL + 'px',
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: P.bold ? -0.5 : 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...P.style
}))

export const H2 = styled('h2')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_L + 4 + 'px',
  fontSize: theme.FONT_L,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: P.bold ? -0.5 : 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...P.style
}))

export const H3 = styled('h3')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_M + 4 + 'px',
  fontSize: theme.FONT_M,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: P.bold ? -0.5 : 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...P.style
}))

export const H4 = styled('h4')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_S + 3 + 'px',
  fontSize: theme.FONT_S,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: P.bold ? -0.5 : 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...P.style
}))

export const H5 = styled('h5')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_XS + 2 + 'px',
  fontSize: theme.FONT_XS,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: P.bold ? -0.5 : 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...P.style
}))
