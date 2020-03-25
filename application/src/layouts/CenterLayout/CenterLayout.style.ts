import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/styles/theme.style'

export const CenterLayout = styled(View)({
  background: theme.BACKGROUND_COLOR,
  flex: 1,
  width: `100%`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})
