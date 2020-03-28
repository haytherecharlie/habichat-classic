import styled from 'styled-components'
import { TouchableOpacity, View } from 'react-native'
import Text from 'atoms/Text'
import theme from 'assets/styles'

export const BackButton = styled(TouchableOpacity)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
})

export const BackText = styled(Text)({
  color: theme.BRAND_COLOR
})

export const IconStyle = {
  name: 'chevron-left',
  color: theme.BRAND_COLOR,
  size: 22,
  style: {
    marginLeft: -6
  }
}

export const Placeholder = styled(View)({
  width: 65
})
