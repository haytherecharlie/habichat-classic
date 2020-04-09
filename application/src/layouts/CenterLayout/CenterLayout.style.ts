import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const CenterLayout = styled(View)({
  backgroundColor: theme.BACKGROUND_COLOR,
  width: `100%`,
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: 20,
  paddingRight: 20
})
