import styled from 'styled-components'
import { Text } from 'react-native'
import theme from 'assets/theme'

export const h1 = styled(Text)(({ style }) => ({
  fontSize: theme.FONT_LARGE,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const h2 = styled(Text)(({ style }) => ({
  fontSize: theme.FONT_MEDIUM,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const h3 = styled(Text)(({ style }) => ({
  fontSize: theme.FONT_SMALL,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const Label = styled(Text)({
  fontSize: theme.FONT_MEDIUM,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR
})

export const Error = styled(Text)({
  fontSize: theme.FONT_MEDIUM,
  marginTop: 5,
  color: theme.INVALID,
  fontWeight: 600,
  width: `100%`,
  textAlign: 'center'
})

export const p = styled(Text)(({ style }) => ({
  fontSize: theme.FONT_MEDIUM,
  color: theme.PRIMARY_COLOR,
  ...style
}))

export const span = styled(Text)(({ style }) => ({
  fontSize: theme.FONT_SMALL,
  fontWeight: 700,
  color: theme.PRIMARY_COLOR,
  ...style
}))
