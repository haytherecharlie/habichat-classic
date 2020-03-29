import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const CenterLayout = styled(View)({
  background: theme.BACKGROUND_COLOR,
  flex: 1,
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderLeftWidth: 2,
  borderRightWidth: 2,
  borderColor: theme.BRAND_COLOR
})
