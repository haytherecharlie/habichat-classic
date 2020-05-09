import styled from 'styled-components'
import theme from 'assets/theme'

const LinkStyle = {
  true: {
    textDecoration: `underline`,
    textDecorationColor: theme.BRAND_COLOR,
    background: theme.BACKGROUND_COLOR,
    transition: `text-decoration .5s, background .5s`,
    '&:hover': {
      background: theme.BRAND_COLOR,
      textDecorationColor: theme.WHITE
    }
  },
  false: {}
}

export const XLarge = styled('h1')(P => ({
  fontSize: theme.FONT_XL,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const Large = styled('h2')(P => ({
  fontSize: theme.FONT_L,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const Medium = styled('h3')(P => ({
  fontSize: theme.FONT_M,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const Small = styled('p')(P => ({
  fontSize: theme.FONT_S,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const XSmall = styled('p')(P => ({
  fontSize: theme.FONT_XS,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))
