import styled from 'styled-components'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedIn'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import theme from 'assets/theme'

export const Footer = styled('header')({
  height: theme.FOOTER_HEIGHT,
  width: `100%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `stretch`,
  background: theme.BACKGROUND_COLOR,
  padding: `0 15px`,
  borderTop: `1px solid ${theme.BRAND_COLOR}`
})

export const Responsive = styled('span')({
  flex: p => p.flex || 1,
  display: `flex`,
  alignItems: `center`,
  justifyContent: p => p.align || `center`
})

const iconStyle = {
  border: `1px solid ${theme.BRAND_COLOR}`,
  background: theme.PRIMARY_COLOR,
  borderRadius: `50%`,
  height: theme.FONT_M,
  width: theme.FONT_M,
  padding: `5px`,
  margin: 5,
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
