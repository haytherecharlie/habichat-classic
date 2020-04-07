import React from 'react'
import habichatShadow from 'assets/images/habichat-shadow.png'
import Text from 'atoms/Text'
import * as S from './HeroBanner.style'

const HeroBanner = () => {
  return (
    <S.HeroBanner>
      <S.Content>
        <S.Image src={habichatShadow} alt="habichat logo" />
        <Text size="h2" text="welcome-to-the-community" style={{ textTransform: 'uppercase', color: '#FFF', textAlign: 'center'  }} />
        <Text size="p" text="welcome-subtext" style={{ color: '#FFF', textAlign: 'center' }} />
      </S.Content>
    </S.HeroBanner>
  )
}

export default HeroBanner
