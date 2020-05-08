import styled from 'styled-components'
import theme from 'assets/theme'

const LinkStyle = {
  true: {
    textDecoration: `none`,
    position: 'relative',
    cursor: 'pointer',
    '&:after': {
      transition: 'bottom .2s',
      content: '""',
      position: 'absolute',
      bottom: 1,
      left: 0,
      width: `100%`,
      height: 1,
      background: theme.BRAND_COLOR
    },
    '&:hover': {
      '&:after': {
        bottom: -2
      }
    }
  },
  false: {}
}

export const XLarge = styled('h1')(P => ({
  fontSize: theme.FONT_XL,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...P.style,
  ...LinkStyle[P.link]
}))

export const Large = styled('h2')(P => ({
  fontSize: theme.FONT_L,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...P.style,
  ...LinkStyle[P.link]
}))

export const Medium = styled('h3')(P => ({
  fontSize: theme.FONT_M,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  marginTop: 0,
  ...P.style,
  ...LinkStyle[P.link]
}))

export const Small = styled('span')(P => ({
  fontSize: theme.FONT_S,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  ...P.style,
  ...LinkStyle[P.link]
}))

export const XSmall = styled('span')(P => ({
  fontSize: theme.FONT_XS,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  color: theme.PRIMARY_COLOR,
  ...P.style,
  ...LinkStyle[P.link]
}))
