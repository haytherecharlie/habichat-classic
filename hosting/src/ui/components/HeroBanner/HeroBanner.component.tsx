import React, { useEffect, useRef } from 'react'
import enable from 'iphone-inline-video'
import theme from 'ui/assets/theme'
import Text from 'ui/atoms/Text'
import Title from 'ui/atoms/Title'
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
          disableRemotePlayback
          playsInline
          muted
          autoPlay
          loop
          src="/video/aerials.mp4"
          ref={video}
          poster="image/aerials.jpg"
        />
        <S.Image src="image/habichat.png" alt="habichat logo" />
        <Title
          size="h2"
          text="landing-title"
          style={{ color: '#FFF', textAlign: 'center', zIndex: 3, marginTop: 20, fontSize: 25 }}
          bold
        />
        <Text
          size="M"
          text="landing-subtext"
          style={{ color: '#FFF', textAlign: 'center', zIndex: 3, marginTop: 20 }}
        />
        <S.BouncingArrow fontSize={`50px`} color={theme.WHITE} style={{ zIndex: 200 }} />
      </S.Content>
    </S.HeroBanner>
  )
}

export default HeroBanner
