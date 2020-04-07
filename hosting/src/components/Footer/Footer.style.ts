import styled from 'styled-components'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedIn'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import theme from 'assets/theme'

export const Footer = styled('header')({
  width: `100%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `stretch`,
  background: '#222',
  padding: `0 15px`,
  height: theme.FOOTER_HEIGHT,
  borderTop: `1px solid ${theme.BRAND_COLOR}`
})

export const Responsive = styled('span')({
  flex: p => p.flex || 1,
  display: `flex`,
  alignItems: `center`,
  justifyContent: p => p.align || `center`
})

export const Copyright = styled('span')({
  fontSize: 12,
  color: theme.INVERSE_COLOR,
  fontWeight: 500,
  [theme.MEDIUM_QUERY]: {
    fontSize: 12
  }
})

const iconStyle = {
  background: theme.INVERSE_COLOR,
  borderRadius: `50%`,
  height: `18px`,
  width: `18px`,
  padding: `5px`,
  [`&:hover`]: { opacity: 0.7 }
}

export const Twitter = styled(LogoTwitter)({ ...iconStyle })
export const LinkedIn = styled(LogoLinkedIn)({ ...iconStyle })
export const Github = styled(LogoGithub)({ ...iconStyle })

export const SocialLinks = styled('div')({
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-around'
})

export const Link = styled('a')({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  padding: `5px`
})
