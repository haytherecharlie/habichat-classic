import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: theme.HEADER_HEIGHT
})

export const Logo = styled('img')({
  height: 30,
  width: 30
})

export const Text = styled('span')({
  ...theme.SPECIAL_FONT,
  color: theme.ACCENT_COLOR,
  fontSize: 22,
  marginTop: 3,
  marginLeft: 2
})
