import styled from 'styled-components'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedIn'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import theme from 'ui/assets/theme'

export const Footer = styled('header')(P => ({
  height: theme.FOOTER_HEIGHT,
  width: `100%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `stretch`,
  background: theme.BACKGROUND_COLOR,
  padding: `0 15px`,
  borderTop: `1px solid ${theme.BRAND_COLOR}`,
  ...P.style
}))

export const Responsive = styled('span')(P => ({
  position: 'relative',
  maxWidth: theme.LARGE_VIEW,
  flex: 1,
  display: `flex`,
  flexDirection: 'row',
  alignItems: `center`,
  justifyContent: `center`,
  ...P.style
}))

const iconStyle = {
  border: `1px solid ${theme.BRAND_COLOR}`,
  background: theme.PRIMARY_COLOR,
  borderRadius: `50%`,
  height: theme.FONT_S,
  width: theme.FONT_S,
  padding: 5,
  margin: 5,
  [`&:hover`]: { opacity: 0.7 }
}

export const Twitter = styled(LogoTwitter)({ ...iconStyle })
export const LinkedIn = styled(LogoLinkedIn)({ ...iconStyle })
export const Github = styled(LogoGithub)({ ...iconStyle })
