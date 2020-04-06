import styled from 'styled-components'
import { TouchableOpacity, Image } from 'react-native'
import theme from 'assets/theme'

export const Avatar = styled(TouchableOpacity)({
  borderWidth: 1,
  borderRadius: 20,
  borderColor: theme.BRAND_COLOR
})

export const Photo = styled(Image)({
  height: 40,
  width: 40,
  borderRadius: 20
})
