import styled from 'styled-components'
import { View, Text } from 'react-native'
import theme from 'assets/styles'

export const Spinner = styled(View)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Title = styled(Text)({
  color: theme.PRIMARY_COLOR
})
