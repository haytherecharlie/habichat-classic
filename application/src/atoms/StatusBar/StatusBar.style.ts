import { View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import styled from 'styled-components'
import theme from 'assets/theme'

export const StatusBar = styled(View)({
  height: getStatusBarHeight(),
  width: `100%`,
  background: theme.BACKGROUND_COLOR
})
