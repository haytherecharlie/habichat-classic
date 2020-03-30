import styled from 'styled-components'
import theme from 'assets/theme'
import { ScrollView } from 'react-native'

export const PhoneAuthForm = styled(ScrollView)({
  width: `100%`,
  display: 'flex',
  padding: `0px 25px`,
  background: theme.BACKGROUND_COLOR
})