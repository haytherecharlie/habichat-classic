import styled from 'styled-components'
import TransitionLink from 'gatsby-plugin-transition-link/AniLink'
import theme from 'assets/theme'

const linkStyle = {
  border: 'none',
  padding: 10,
  borderRadius: theme.PILL_RADIUS,
  fontSize: theme.FONT_M,
  fontFamily: theme.FONT_BODY,
  background: 'none',
  textDecoration: `none`,
  textAlign: 'center',
  color: p => (p.invert ? theme.BRAND_COLOR : theme.WHITE),
  cursor: 'pointer'
}

export const AniLink = styled(TransitionLink)({
  ...linkStyle,
  display: 'block',
  width: `100%`
})
export const ButtonLink = styled('button')({
  width: '100%',
  ...linkStyle
})

export const Pill = styled('div')({
  background: p => (p.invert ? theme.WHITE : theme.BRAND_COLOR),
  width: `100%`,
  borderRadius: theme.PILL_RADIUS,
  border: p => `2px solid ${p.invert ? theme.BRAND_COLOR : theme.WHITE}`
})
