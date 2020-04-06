import React from 'react'
import habichatShadow from 'assets/images/habichat-shadow.png'
import * as S from './HeroBanner.style'

const HeroBanner = () => {
  return (
    <S.Wrapper>
      <S.Image src={habichatShadow} alt=""/>
      <S.Title>WELCOME TO THE COMMUNITY!</S.Title>
      <S.Paragraph>
        {`There's a lot going on in your neighbourhood, habichat makes it easy to connect, share and stay informed about everything happening in your community.`}
      </S.Paragraph>
    </S.Wrapper>
  )
}

export default HeroBanner
