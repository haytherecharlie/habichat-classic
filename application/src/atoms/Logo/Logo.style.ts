import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { View, Text, Image } from 'react-native'

export const Logo = styled(View)({
  display: 'flex',
  flexDirection: `row`,
  alignItems: 'center',
  justifyContent: 'center'
})

export const Icon = styled(Image)({
  height: 30,
  width: 30,
  background: `orange`
})

export const Title = styled(Text)({
  marginTop: 5,
  fontSize: 25,
  letterSpacing: `-1px`,
  marginLeft: 3,
  fontFamily: 'cocogoose',
  color: theme.BRAND_COLOR
})
