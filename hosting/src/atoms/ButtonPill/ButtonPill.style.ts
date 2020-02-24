import styled from 'styled-components'
import TransitionLink from 'gatsby-plugin-transition-link/AniLink'
import theme from 'assets/styles/theme.style'

const linkStyle = {
  border: 'none',
  padding: 10,
  borderRadius: 25,
  fontWeight: 700,
  fontSize: 14,
  fontFamily: theme.FONT_NORMAL,
  background: 'none',
  textDecoration: `none`,
  textAlign: 'center',
  color: (p) => (p.invert === 'true' ? theme.BACKGROUND_COLOR : theme.PRIMARY_COLOR),
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 2px ${theme.HIGHLIGHT_COLOR} inset`,
    borderRadius: 25
  }
}

export const AniLink = styled(TransitionLink)({
  display: 'block',
  ...linkStyle
})
export const ButtonLink = styled('button')({
  width: '100%',
  ...linkStyle
})

export const Pill = styled('div')({
  background: (p) => (p.invert === 'true' ? theme.PRIMARY_COLOR : theme.BACKGROUND_COLOR),
  width: `100vw`,
  maxWidth: 700,
  margin: `auto`,
  borderRadius: 25,
  border: (p) => `2px solid ${p.invert === 'true' ? theme.BACKGROUND_COLOR : theme.PRIMARY_COLOR}`
})
