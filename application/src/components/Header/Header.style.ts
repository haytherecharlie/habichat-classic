import styled from 'styled-components'
import { View } from 'react-native'

export const Left = styled(View)({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  marginLeft: 20
})

export const Right = styled(View)({
  height: `100%`,
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  marginRight: 20
})
