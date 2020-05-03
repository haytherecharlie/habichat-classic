import styled from 'styled-components'
import { Image } from 'react-native'
import theme from 'assets/theme'

export const Picture = styled(Image)({
  width: theme.ONBOARD_IMAGE_SIZE,
  height: theme.ONBOARD_IMAGE_SIZE
})
