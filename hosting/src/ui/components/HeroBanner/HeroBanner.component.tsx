import React, { useEffect, useRef } from 'react'
import enable from 'iphone-inline-video'
import theme from 'ui/assets/theme'
import Text from 'ui/atoms/Text'
import * as S from './HeroBanner.style'

const HeroBanner = () => {
  const video = useRef(null)
  useEffect(() => {
    enable(video.current, { iPad: true })
  }, [])

  return (
    <S.HeroBanner>
      <S.Content>
        <S.Video playsInline muted autoPlay loop src="/video/aerials.mp4" ref={video} poster="image/aerials.jpg" />
        <S.Image src="image/habichat.png" alt="habichat logo" />
        <Text
          size="XL"
          text="home-title"
          style={{ color: '#FFF', textAlign: 'center', zIndex: 3, marginTop: 20, fontSize: 25 }}
          bold
        />
        <Text size="M" text="home-subtext" style={{ color: '#FFF', textAlign: 'center', zIndex: 3, marginTop: 20 }} />
        <S.BouncingArrow fontSize={`50px`} color={theme.WHITE} style={{zIndex: 200}} />
      </S.Content>
    </S.HeroBanner>
  )
}

export default HeroBanner
