import React from 'react'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import ButtonPill from 'ui/atoms/ButtonPill'
import * as S from './Onboarding.style'

const Onboarding = () => {
  return (
    <S.Onboarding>
      <S.Row>
        <S.Column>
          <Text size="XL" text="home-onboard-1-title" bold style={{ marginBottom: 20, textAlign: 'center' }} />
          <Text size="M" text="home-onboard-1-body" style={{ marginBottom: 20, textAlign: 'center' }} />
        </S.Column>
        <S.Column>
          <S.Image src="/image/onboard-city.png" alt="global city" />
        </S.Column>
      </S.Row>
      <S.PurpleDiv>
        <S.SkewedUp />
        <S.Row>
          <S.Column>
            <S.Image src="/image/onboard-window.png" alt="apartment window" />
          </S.Column>
          <S.Column>
            <Text size="XL" text="home-onboard-2-title" bold style={{ textAlign: 'center', marginBottom: 20 }} />
            <Text size="M" text="home-onboard-2-body" style={{ marginBottom: 20, textAlign: 'center' }} />
          </S.Column>
        </S.Row>
        <S.SkewedDown />
      </S.PurpleDiv>
      <S.Row>
        <S.Column style={{ alignItems: 'center' }}>
          <S.Image src="/image/onboard-wave.png" alt="neighbours waving" />
        </S.Column>
        <S.Column style={{ alignItems: 'center' }}>
          <Text size="XL" text="home-onboard-3-title" bold style={{ textAlign: 'center', marginBottom: 20 }} />
          <Text size="M" text="home-onboard-3-body" style={{ marginBottom: 20, textAlign: 'center' }} />
          <Link href="/community/H4E">
            <ButtonPill>
              <Text
                size="M"
                text="home-onboard-button"
                bold
                style={{ textAlign: 'center', margin: `5px 10px` }}
              />
            </ButtonPill>
          </Link>
        </S.Column>
      </S.Row>
    </S.Onboarding>
  )
}

export default Onboarding
