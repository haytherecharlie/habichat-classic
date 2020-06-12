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
          <S.Image src="/image/onboard-city.png" alt="global city" />
        </S.Column>
        <S.Column>
          <Text size="M" text="landing-onboard-1-title" bold style={{ marginBottom: 10, textAlign: 'center' }} />
          <Text size="S" text="landing-onboard-1-body" style={{ marginBottom: 0, textAlign: 'center' }} />
        </S.Column>
      </S.Row>
      <S.PurpleDiv>
        <S.SkewedUp />
        <S.Row>
          <S.Column>
            <Text size="M" text="landing-onboard-2-title" bold style={{ color: '#FFF', textAlign: 'center', marginBottom: 10 }} />
            <Text size="S" text="landing-onboard-2-body" style={{ color: '#FFF', marginBottom: 0, textAlign: 'center' }} />
          </S.Column>
          <S.Column>
            <S.Image src="/image/onboard-window.png" alt="apartment window" />
          </S.Column>
        </S.Row>
        <S.SkewedDown />
      </S.PurpleDiv>
      <S.Row>
        <S.Column style={{ alignItems: 'center' }}>
          <S.Image src="/image/onboard-wave.png" alt="neighbours waving" />
        </S.Column>
        <S.Column style={{ alignItems: 'center' }}>
          <Text size="M" text="landing-onboard-3-title" bold style={{ textAlign: 'center', marginBottom: 10 }} />
          <Text size="S" text="landing-onboard-3-body" style={{ marginBottom: 15, textAlign: 'center' }} />
          <Link href="/">
            <ButtonPill>
              <Text
                size="S"
                text="landing-onboard-button"
                bold
                style={{ color: '#FFF', textAlign: 'center', margin: `12px 15px 10px 15px` }}
              />
            </ButtonPill>
          </Link>
        </S.Column>
      </S.Row>
    </S.Onboarding>
  )
}

export default Onboarding
