import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Footer = styled('header')({
  width: `100%`,
  height: theme.HEADER_HEIGHT,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `stretch`,
  background: `#FFF`,
  padding: `0 15px`,
  borderTop: `1px solid ${theme.SECONDARY_COLOR}`
})

export const Wrapper = styled('span')({
  flex: (p) => p.flex || 1,
  display: `flex`,
  alignItems: `center`,
  justifyContent: (p) => p.align || `center`
})

export const Copyright = styled('span')({
  fontSize: 12,
  color: theme.PRIMARY_COLOR,
  fontWeight: 500,
  [theme.MEDIUM_QUERY]: {
    fontSize: 12
  }
})
