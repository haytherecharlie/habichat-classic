import styled from 'styled-components'
import theme from 'assets/theme'

export const Logo = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Icon = styled('img')({
  height: 25,
  width: `auto`
})

export const Text = styled('div')({
  color: theme.BRAND_COLOR,
  letterSpacing: -1,
  marginTop: 6,
  marginLeft: 2,
  fontSize: 25,
  fontFamily: 'cocogoose',
  // textShadow: `-1px -1px 0 ${theme.BRAND_COLOR}, 1px -1px 0 ${theme.BRAND_COLOR}, -1px 1px 0 ${theme.BRAND_COLOR}, 1px 1px 0 ${theme.BRAND_COLOR}`
})