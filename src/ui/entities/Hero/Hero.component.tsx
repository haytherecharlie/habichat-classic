import React, { useEffect, useRef } from 'react'
import enable from 'iphone-inline-video'
import LoginForm from 'ui/components/LoginForm'
import * as S from './Hero.style'

const Hero = () => {
  const video = useRef(null)

  useEffect(() => {
    enable(video.current, { iPad: true })
  }, [])

  return (
    <S.HeroBanner>
      <S.Video
        disableRemotePlayback
        playsInline
        muted
        autoPlay
        loop
        src="/video/aerials.mp4"
        ref={video}
        poster="image/aerials.jpg"
      />
      <LoginForm />
    </S.HeroBanner>
  )
}

export default Hero
