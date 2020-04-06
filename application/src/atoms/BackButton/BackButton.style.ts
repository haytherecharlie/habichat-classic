import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import theme from 'assets/theme'

export const BackButton = styled(TouchableOpacity)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
})

export const TextStyle = {
  color: theme.BRAND_COLOR,
  marginLeft: -4
}

export const IconStyle = {
  name: 'chevron-left',
  color: theme.BRAND_COLOR,
  size: 21,
  style: {
    marginLeft: -6,
  }
}
