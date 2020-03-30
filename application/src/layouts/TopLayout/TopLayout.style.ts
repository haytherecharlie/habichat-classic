import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const TopLayout = styled(View)({
  flex: 1,
  background: theme.BACKGROUND_COLOR,
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderColor: theme.BRAND_COLOR
})
