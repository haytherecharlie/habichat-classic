import React, { useEffect, useRef } from 'react'
import enable from 'iphone-inline-video'
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
        <S.Video
          playsInline
          muted
          autoPlay
          loop
          src={require('assets/videos/aerials.mp4')}
          ref={video}
          poster={'assets/videos/aerials.jpg'}
        />
        <S.Image src={require('assets/images/habichat.png')} alt="habichat logo" />
        <Text
          size="XL"
          text="home-title"
          style={{ textTransform: 'uppercase', color: '#FFF', textAlign: 'center', zIndex: 3, marginTop: 20 }}
          bold
        />
        <Text size="M" text="home-subtext" style={{ color: '#FFF', textAlign: 'center', zIndex: 3, marginTop: 20 }} />
      </S.Content>
    </S.HeroBanner>
  )
}

export default HeroBanner
