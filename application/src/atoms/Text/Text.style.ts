import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { Text } from 'react-native'

export const h1 = styled(Text)({
  fontSize: 18,
  fontFamily: 'cocogoose',
  color: theme.BRAND_COLOR
})

export const h2 = styled(Text)({
  fontSize: 16,
  fontFamily: 'cocogoose',
  color: theme.BRAND_COLOR
})

export const h3 = styled(Text)({
  fontSize: 14,
  fontFamily: 'cocogoose',
  color: theme.BRAND_COLOR
})

export const p = styled(Text)({
  fontSize: 14,
  color: theme.PRIMARY_COLOR
})

export const span = styled(Text)({
  fontSize: 14,
  color: theme.PRIMARY_COLOR
})
