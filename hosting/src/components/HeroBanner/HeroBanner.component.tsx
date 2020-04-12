import React, { useEffect, useRef } from 'react'
import enable from 'iphone-inline-video'
import habichat from 'assets/images/habichat.png'
import aerials from 'assets/videos/aerials.webm'
import placeholder from 'assets/videos/aerials.jpg'
import Text from 'atoms/Text'
import * as S from './HeroBanner.style'

const HeroBanner = () => {
  const video = useRef(null)
  useEffect(() => {
    enable(video.current, { iPad: true })
  }, [])

  return (
    <S.HeroBanner>
      <S.Content>
        <S.Video playsInline muted autoPlay loop src={aerials} ref={video} poster={placeholder} />
        <S.Image src={habichat} alt="habichat logo" />
        <Text
          size="h2"
          text="home-title"
          style={{ textTransform: 'uppercase', color: '#FFF', textAlign: 'center', zIndex: 3 }}
        />
        <Text size="p" text="home-subtext" style={{ color: '#FFF', textAlign: 'center', zIndex: 3 }} />
      </S.Content>
    </S.HeroBanner>
  )
}

export default HeroBanner
