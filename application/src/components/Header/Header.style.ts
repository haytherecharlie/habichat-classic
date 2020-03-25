import styled from 'styled-components'
import theme from 'assets/styles/theme.style'
import { TouchableOpacity, View } from 'react-native'

export const BackButton = styled(TouchableOpacity)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
})

export const IconStyle = {
  name: 'chevron-left',
  color: theme.PRIMARY_COLOR,
  size: 22,
  style: {
    marginLeft: -6
  }
}

export const Placeholder = styled(View)({
  width: 65
})
