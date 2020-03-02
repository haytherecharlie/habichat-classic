import styled from 'styled-components'
import { View } from 'react-native'

export const SubHeader = styled(View)({
  height: 60,
  width: `100%`,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  padding: `0 20px 10px 20px`,
  background: '#FFF',
  boxShadow: `0 1px 1px rgba(0,0,0,0.2)`,
  marginTop: -25,
  zIndex: 200,
  borderRadius: 25
})
