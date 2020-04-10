import styled from 'styled-components'
import { Video } from 'expo-av'
import {Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

export const VideoBackground = styled(Video)({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -100,
  width: width - 4,
  height,
  borderWidth: 1
})
