import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Footer = styled('header')({
  width: `100%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `stretch`,
  background: theme.PRIMARY_COLOR,
  padding: `15px 15px 100px 15px`,
  borderTop: `1px solid ${theme.BRAND_COLOR}`
})

export const Responsive = styled('span')({
  flex: (p) => p.flex || 1,
  display: `flex`,
  alignItems: `center`,
  justifyContent: (p) => p.align || `center`
})

export const Copyright = styled('span')({
  fontSize: 12,
  color: theme.INVERSE_COLOR,
  fontWeight: 500,
  [theme.MEDIUM_QUERY]: {
    fontSize: 12
  }
})
