import React from 'react'
import { useSelector } from 'react-redux'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import * as S from './AddressInput.style'

const AddressInput = () => {
  const { uid } = useSelector(s => s.user.account)

  return (
    <S.AddressInput>
      <GooglePlacesAutocomplete
        autoFocus={true}
        placeholder="Your Street Address"
        minLength={4}
        returnKeyType="search"
        fetchDetails={true}
        styles={S.GooglePlacesAutocomplete}
        currentLocation={true}
        query={{
          sessionToken: uid,
          components: 'country:ca',
          location: '43.7184038,-79.518142',
          radius: '25000',
          key: 'AIzaSyC8Kwa-4RTaJO0VTW9aWnO6h8nh3guJP90',
          language: 'en',
          types: 'address'
        }}
      />
    </S.AddressInput>
  )
}

export default AddressInput
