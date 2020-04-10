import React from 'react'
import landing from 'assets/videos/landingside.mp4'
import * as S from './VideoBackground.style'

const VideoBackground = () => {
  return <S.VideoBackground source={landing} rate={1.0} volume={1.0} isMuted={false} resizeMode="cover" shouldPlay isLooping />
}

export default VideoBackground
