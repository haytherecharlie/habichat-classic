import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/styles'

export const TopLayout = styled(View)({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderColor: theme.BRAND_COLOR
})
