import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { TouchableOpacity, Text } from 'react-native'

export const Button = styled(TouchableOpacity)({
  flex: 1,
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Title = styled(Text)({
  color: theme.INVERSE_COLOR
})
