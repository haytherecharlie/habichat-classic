import styled from 'styled-components'
import theme from 'assets/theme'

export const XLarge = styled('h1')(P => ({
  fontSize: theme.FONT_XL,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...P.style
}))

export const Large = styled('h2')(P => ({
  fontSize: theme.FONT_L,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...P.style
}))

export const Medium = styled('h3')(P => ({
  fontSize: theme.FONT_M,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...P.style
}))

export const Small = styled('span')(P => ({
  fontSize: theme.FONT_S,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  ...P.style
}))

export const XSmall = styled('span')(P => ({
  fontSize: theme.FONT_XS,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  ...P.style
}))
