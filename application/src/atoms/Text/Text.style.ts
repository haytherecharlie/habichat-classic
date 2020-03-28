import styled from 'styled-components'
import { Text } from 'react-native'
import theme from 'assets/styles'

export const h1 = styled(Text)(({ style }) => ({
  fontSize: 18,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const h2 = styled(Text)(({ style }) => ({
  fontSize: 16,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const h3 = styled(Text)(({ style }) => ({
  fontSize: 14,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR,
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
