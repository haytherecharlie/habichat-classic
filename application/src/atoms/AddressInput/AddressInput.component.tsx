import React, { useEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { requestPermissionsAsync } from 'expo-location'
import { useSelector } from 'react-redux'
import Text from 'atoms/Text'
import Spinner from 'atoms/Spinner'
import translate from 'language/translate'
import * as S from './AddressInput.style'

const AddressInput = () => {
  const [permission, setPermission] = useState('pending')
  const { uid } = useSelector(s => s.user.account)

  const getPermissionStatus = async () => {
    let { status } = await requestPermissionsAsync()
    return setPermission(status)
  }

  useEffect(() => {
    getPermissionStatus()
  }, [])

  if (permission === 'pending') {
    return (
      <S.AddressInput>
        <Spinner />
      </S.AddressInput>
    )
  }

  return (
    <S.AddressInput>
      <Text type="h3" text="street-address" style={{ marginLeft: 15, marginBottom: 5 }} />
      <GooglePlacesAutocomplete
        autoFocus={true}
        placeholder={translate.t('your-street-address')}
        currentLocationLabel={translate.t('use-current-location')}
        minLength={4}
        returnKeyType="search"
        fetchDetails={true}
        styles={S.GooglePlacesAutocomplete}
        currentLocation={permission === 'granted'}
        query={{
          sessionToken: uid,
          components: 'country:ca',
          location: '43.7184038,-79.518142',
          radius: '25000',
          key: 'AIzaSyC8Kwa-4RTaJO0VTW9aWnO6h8nh3guJP90',
          language: 'en',
          types: ['address']
        }}
      />
    </S.AddressInput>
  )
}

export default AddressInput
