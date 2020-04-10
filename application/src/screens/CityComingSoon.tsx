import React, { useState } from 'react'
import { Image } from 'react-native'
import cityComingSoon from 'assets/images/city-coming-soon.png'
import Text from 'atoms/Text'
import EmailInput from 'atoms/EmailInput'
import Header from 'components/Header'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'
import { auth } from 'services/firebase'
import { vEmail } from 'utils/helpers'

const CityComingSoon = () => {
  const [email, setEmail] = useState('')
  const [valid, setValid] = useState('pending')

  const submitEmail = () => {
    auth()
      .currentUser.updateEmail(email)
      .then(() => auth().signOut())
  }

  const onChangeText = email => {
    setEmail(email)
    setValid(vEmail(email) === 'valid' ? 'valid' : 'invalid')
  }

  return (
    <ScreenLayout>
      <Header.Basic />
      <ContentLayout.Scroll>
        <ContentLayout.Top style={{ padding: 20 }}>
          <Text type="h1" text="howdy-there-partner" style={{ textAlign: 'center' }} />
          <Text type="p" text="habichat-not-available" style={{ textAlign: 'center', marginBottom: 20 }} />
          <Image source={cityComingSoon} style={{ width: 165, height: 165, margin: 'auto' }} />
          <Text type="h3" text="join-our-mailing-list" style={{ textAlign: 'center', marginTop: 20 }} />
          <Text type="p" text="never-miss-an-update" style={{ textAlign: 'center', marginTop: 2, marginBottom: 10 }} />
          <EmailInput
            autoFocus={true}
            onChangeText={onChangeText}
            onSubmitEditing={submitEmail}
            placeholder="your-email-address"
            validation={valid}
            value={email}
          />
        </ContentLayout.Top>
      </ContentLayout.Scroll>
    </ScreenLayout>
  )
}

export default CityComingSoon
