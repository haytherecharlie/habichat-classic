import React, { useEffect, useRef } from 'react'
import enable from 'iphone-inline-video'
import habichatIcon from 'assets/images/logo-icon.png'
import aerials from 'assets/videos/aerials.webm'
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
        <S.Video playsInline muted autoPlay loop src={aerials} ref={video} />
        <S.Image src={habichatIcon} alt="habichat logo" />
        <Text
          size="h2"
          text="welcome-to-the-community"
          style={{ textTransform: 'uppercase', color: '#FFF', textAlign: 'center', zIndex: 3 }}
        />
        <Text size="p" text="welcome-subtext" style={{ color: '#FFF', textAlign: 'center', zIndex: 3 }} />
      </S.Content>
    </S.HeroBanner>
  )
}

export default HeroBanner
