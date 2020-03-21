import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import * as S from './PlacesAutoComplete.style'
import geoCoder from 'utils/helpers/geoCoder'
const PlacesAutoComplete = () => {
  const onPress = async data => {
    const geo = await geoCoder(data)
    console.log(geo)
  }

  return (
    <GooglePlacesAutocomplete
      placeholder="Enter Your Street Address"
      minLength={2}
      autoFocus={true}
      returnKeyType={'search'}
      listViewDisplayed="true"
      fetchDetails={false}
      onPress={onPress}
      getDefaultValue={() => ''}
      query={{
        sessionToken: `${Math.random() * 100000}`,
        components: 'country:ca',
        location: '43.7184038,-79.518142',
        radius: '25000',
        key: 'AIzaSyDchtR-tAGXxS--04z8bQCOKLdr9Wlhvds',
        language: 'en',
        types: 'address'
      }}
      styles={S.PlacesAutoComplete}
      GooglePlacesSearchQuery={{ rankby: 'distance' }}
      debounce={500}
    />
  )
}

export default PlacesAutoComplete
