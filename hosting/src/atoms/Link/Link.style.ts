import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Link = styled('a')({
  ...theme.FOCUS_OUTLINE,
  color: theme.BRAND_COLOR,
  fontFamily: theme.FONT_BODY,
  fontWeight: theme.FONT_REGULAR,
  fontSize: theme.FONT_MEDIUM,
  textDecoration: `none`,
  position: 'relative',
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
})
