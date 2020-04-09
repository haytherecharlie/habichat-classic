import styled from 'styled-components'
import { View } from 'react-native'

export const ContentLayout = styled(View)(p => ({
  flex: 1,
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: p.justify || 'center',
  paddingLeft: 20,
  paddingRight: 20,
  ...p.style
}))
