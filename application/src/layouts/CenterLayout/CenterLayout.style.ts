import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const CenterLayout = styled(View)({
  width: `100%`,
  backgroundColor: theme.BACKGROUND_COLOR,
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
