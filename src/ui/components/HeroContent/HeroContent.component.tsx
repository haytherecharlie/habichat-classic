import React from 'react'
import theme from 'ui/assets/theme'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import Title from 'ui/atoms/Title'
import * as S from './HeroContent.style'

const HeroContent = () => {
  return (
    <S.HeroContent>
      <S.Row style={{ flex: 1 }} />
      <S.Row style={{ flex: 4 }}>
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
          style={{ color: '#FFF', textAlign: 'center', zIndex: 3, margin: `20px 0` }}
        />

        <S.Row style={{ flexDirection: 'row' }}>
          <Link href="/register">
            <ButtonPill style={{ padding: 10, minWidth: 200, margin: 10 }}>
              <Text size="S" style={{ color: '#FFF' }} text="JOIN THE COMMUNITY" bold unique />
            </ButtonPill>
          </Link>
        </S.Row>
      </S.Row>
      <S.Row style={{ flex: 1, justifyContent: 'flex-end' }}>
        <S.BouncingArrow fontSize={`50px`} color={theme.WHITE} />
      </S.Row>
    </S.HeroContent>
  )
}

export default HeroContent
