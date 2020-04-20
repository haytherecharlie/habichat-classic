import React, { useEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { requestPermissionsAsync } from 'expo-location'
import { useSelector, useDispatch } from 'react-redux'
import Text from 'atoms/Text'
import translate from 'language/translate'
import geoLocateAsync from 'utils/helpers/geoLocateAsync'
import * as S from './AddressInput.style'

const AddressInput = () => {
  const dispatch = useDispatch()
  const [permission, setPermission] = useState('pending')
  const { uid } = useSelector(s => s.user.account)

  const onPress = async ({ structured_formatting }, { geometry }) => {
    try {
      await geoLocateAsync(structured_formatting, geometry)
    } catch (err) {
      if (err === '404') dispatch({ type: 'NAVIGATE', screen: 'city-coming-soon' })
    }
  }

  useEffect(() => {
    requestPermissionsAsync().then(({ status }) => setPermission(status))
  }, [])

  return permission !== 'pending' ? (
    <S.AddressInput>
      <Text type="h3" text="street-address" style={{ marginLeft: 15, marginBottom: 5 }} />
      <GooglePlacesAutocomplete
        autoFocus={true}
        placeholder={translate.t('your-street-address')}
        currentLocationLabel={translate.t('use-current-location')}
        minLength={1}
        returnKeyType="search"
        fetchDetails={true}
        styles={S.GooglePlacesAutocomplete}
        currentLocation={permission === 'granted'}
        onPress={onPress}
        query={{
          sessionToken: uid,
          components: 'country:ca',
          location: '45.504207,-73.598475',
          radius: '2000',
          key: 'AIzaSyC8Kwa-4RTaJO0VTW9aWnO6h8nh3guJP90',
          language: 'en',
          types: ['(regions)']
        }}
      />
    </S.AddressInput>
  ) : null
}

export default AddressInput
