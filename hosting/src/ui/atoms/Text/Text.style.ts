import styled from 'styled-components'
import theme from 'ui/assets/theme'

const LinkStyle = {
  true: {
    textDecoration: `underline`,
    textDecorationColor: theme.BRAND_COLOR,
    '&:hover': {
      textDecoration: 'none'
    }
  },
  false: {}
}

export const Text = styled('div')(style => ({
  ...style
}))

export const XLarge = styled('span')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_XL + 5 + 'px',
  fontSize: theme.FONT_XL + 'px',
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const Large = styled('span')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_L + 4 + 'px',
  fontSize: theme.FONT_L,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const Medium = styled('span')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_M + 4 + 'px',
  fontSize: theme.FONT_M,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const Small = styled('span')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_S + 3 + 'px',
  fontSize: theme.FONT_S,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))

export const XSmall = styled('span')(P => ({
  verticalAlign: 'bottom',
  maxWidth: `100%`,
  lineHeight: theme.FONT_XS + 2 + 'px',
  fontSize: theme.FONT_XS,
  fontWeight: 500,
  fontFamily: P.bold ? 'cocogoose' : 'helvetica',
  letterSpacing: 0,
  color: theme.PRIMARY_COLOR,
  margin: 0,
  padding: 0,
  ...LinkStyle[P.link],
  ...P.style
}))
