import styled from 'styled-components'
import { Image, Text, View } from 'react-native'
import theme from 'assets/theme'

export const Logomark = styled(Image)({
  height: 150,
  width: 150
})

export const Logotype = styled(Text)({
  fontSize: 25,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR
})

export const CombinationMark = styled(View)({
  fontSize: 18,
  fontFamily: 'cocogoose',
  color: theme.PRIMARY_COLOR
})
