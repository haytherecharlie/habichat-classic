import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const Captcha = styled(View)({
  height: p => p.fullHeight ? `520px` : `100px`,
  width: 310,
  margin: 'auto',
  background: theme.BACKGROUND_COLOR,
  opacity: p => (p.loaded ? 1 : 0),
  paddingTop: 20
})
