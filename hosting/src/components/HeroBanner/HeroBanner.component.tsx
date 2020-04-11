import React from 'react'
import habichatIcon from 'assets/images/logo-icon.png'
import rooftop from 'assets/videos/rooftop.webm'
import Text from 'atoms/Text'
import * as S from './HeroBanner.style'

const HeroBanner = () => {
  return (
    <S.HeroBanner>
      <S.Content>
        <S.Video playsInline muted autoPlay loop dataSilent >
          <source src={rooftop} type="video/mp4" />
        </S.Video>
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
