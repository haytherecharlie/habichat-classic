import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoLinkedIn from 'react-ionicons/lib/LogoLinkedIn'
import LogoGithub from 'react-ionicons/lib/LogoGithub'

const iconStyle = {
  background: theme.PRIMARY_COLOR,
  borderRadius: `50%`,
  height: `18px`,
  width: `18px`,
  padding: `5px`
}

export const Twitter = styled(LogoTwitter)({ ...iconStyle, [`&:hover`]: { background: theme.TWITTER } })
export const LinkedIn = styled(LogoLinkedIn)({ ...iconStyle, [`&:hover`]: { background: theme.LINKEDIN } })
export const Github = styled(LogoGithub)({ ...iconStyle, [`&:hover`]: { background: theme.GITHUB } })

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
