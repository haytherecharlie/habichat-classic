import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { Text } from 'react-native'

export const h1 = styled(Text)(({ style }) => ({
  fontSize: 18,
  fontFamily: 'cocogoose',
  color: theme.BRAND_COLOR,
  ...style
}))

export const h2 = styled(Text)(({ style }) => ({
  fontSize: 16,
  fontFamily: 'cocogoose',
  color: theme.BRAND_COLOR,
  ...style
}))

export const h3 = styled(Text)(({ style }) => ({
  fontSize: 14,
  fontFamily: 'cocogoose',
  color: theme.BRAND_COLOR,
  ...style
}))

export const p = styled(Text)(({ style }) => ({
  fontSize: 14,
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const span = styled(Text)(({ style }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: theme.PRIMARY_COLOR,
  ...style
}))
