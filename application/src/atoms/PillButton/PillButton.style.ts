import { Platform, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import theme from 'assets/theme'

const android = Platform.OS === 'android'
export const PillButton = styled(TouchableOpacity)(p => ({
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 40,
  borderRadius: theme.PILL_BUTTON_RADIUS,
  borderWidth: 2,
  paddingTop: android ? 0 : 2,
  backgroundColor: p.white ? theme.WHITE : theme.BRAND_COLOR,
  borderColor: p.white ? theme.BRAND_COLOR : theme.WHITE,
  ...p.style
}))
