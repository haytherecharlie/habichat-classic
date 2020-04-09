import React from 'react'
import { Image } from 'react-native'
import spiltMilk from 'assets/images/spilt-milk.png'
import Text from 'atoms/Text'
import Header from 'components/Header'
import ScreenLayout from 'layouts/ScreenLayout'
import ContentLayout from 'layouts/ContentLayout'

const Error = () => {
  return (
    <ScreenLayout>
      <Header.Basic />
      <ContentLayout.Center>
        <Image source={spiltMilk} style={{ width: 250, height: 100 }} />
        <Text text="error" style={{ textAlign: 'center' }} />
      </ContentLayout.Center>
    </ScreenLayout>
  )
}

export default Error
