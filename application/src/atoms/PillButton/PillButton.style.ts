import styled from 'styled-components'
import theme from 'assets/theme'
import { TouchableOpacity } from 'react-native'

export const PillButton = styled(TouchableOpacity)(({ style }) => ({
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.BRAND_COLOR,
  height: 40,
  borderRadius: 25,
  borderWidth: 2,
  borderColor: theme.WHITE,
  ...style
}))
