import styled from 'styled-components'
import { View } from 'react-native'
import theme from 'assets/theme'

export const Captcha = styled(View)({
  height: 530,
  background: theme.BACKGROUND_COLOR,
  opacity: p => (p.loaded ? 1 : 0),
  paddingTop: 20
})
