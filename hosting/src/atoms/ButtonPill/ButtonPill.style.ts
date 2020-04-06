import styled from 'styled-components'
import TransitionLink from 'gatsby-plugin-transition-link/AniLink'
import theme from 'assets/styles/theme.style'

const linkStyle = {
  ...theme.FOCUS_OUTLINE,
  ...theme.HOVER_TEXT,
  border: 'none',
  padding: 10,
  borderRadius: theme.BORDER_RADIUS,
  fontWeight: theme.FONT_REGULAR,
  fontSize: theme.FONT_MEDIUM,
  fontFamily: theme.FONT_BODY,
  background: 'none',
  textDecoration: `none`,
  textAlign: 'center',
  color: (p) => (p.invert ? theme.BACKGROUND_COLOR : theme.PRIMARY_COLOR),
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
  background: (p) => (p.invert ? theme.PRIMARY_COLOR : theme.BACKGROUND_COLOR),
  width: `100%`,
  maxWidth: 700,
  borderRadius: theme.BORDER_RADIUS,
  border: (p) => `2px solid ${p.invert ? theme.BACKGROUND_COLOR : theme.PRIMARY_COLOR}`
})
