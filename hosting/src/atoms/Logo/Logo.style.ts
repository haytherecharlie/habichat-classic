import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

export const Logo = styled('img')({
  height: 30,
  width: 30,
  marginRight: 5
})

export const Text = styled('div')({
  ...theme.SPECIAL_FONT,
  color: theme.BRAND_COLOR,
  fontSize: theme.FONT_LARGE,
})
