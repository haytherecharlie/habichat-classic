import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const AppLayout = styled(View)({
  flex: 1,
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  borderLeftWidth: 2,
  borderRightWidth: 2,
  borderColor: theme.BRAND_COLOR,
  background: theme.BACKGROUND_COLOR
})
