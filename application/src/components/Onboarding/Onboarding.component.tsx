import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import onboard1 from 'assets/images/onboard-1.png'
import onboard2 from 'assets/images/onboard-2.png'
import onboard3 from 'assets/images/onboard-3.png'
import PillButton from 'atoms/PillButton'
import Text from 'atoms/Text'
import ContentLayout from 'layouts/ContentLayout'
import ModalLayout from 'layouts/ModalLayout'
import * as S from './Onboarding.style'

const Onboarding = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const { modal } = useSelector(s => s.app)

  const close = () => {
    setPage(1)
    return dispatch({ type: 'MODAL', value: null })
  }

  const Page = ({ onPress, btnTxt, source, name }) => (
    <ContentLayout.Padding>
      <ContentLayout.Center style={{ flex: 0, flexBasis: 100 }} />
      <ContentLayout.Center style={{ flex: 4 }}>
        <S.Picture source={source} alt="onboarding image" />
        <Text type="h1" text={`${name}-title`} style={{ textAlign: 'center', marginTop: 15 }} />
        <Text type="p" text={`${name}-body`} style={{ textAlign: 'center', margin: 20, marginBottom: 40 }} />
      </ContentLayout.Center>
      <ContentLayout.Bottom style={{ flexBasis: 100, flex: 0, paddingBottom: 35 }}>
        <PillButton onPress={onPress} text={btnTxt} />
      </ContentLayout.Bottom>
    </ContentLayout.Padding>
  )

  return (
    <ModalLayout visible={modal === 'onboarding'}>
      {page === 1 && <Page btnTxt="next" name="onboard-1" source={onboard1} onPress={() => setPage(page + 1)} />}
      {page === 2 && <Page btnTxt="next" name="onboard-2" source={onboard2} onPress={() => setPage(page + 1)} />}
      {page === 3 && <Page btnTxt="welcome" name="onboard-3" source={onboard3} onPress={close} />}
    </ModalLayout>
  )
}

export default Onboarding
