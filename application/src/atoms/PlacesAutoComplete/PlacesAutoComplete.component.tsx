import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import theme from 'assets/styles/theme.style'
import * as S from './PlacesAutoComplete.style'
import geoCoder from 'utils/helpers/geoCoder'
const PlacesAutoComplete = () => {
  const onPress = async data => {
    const geo = await geoCoder(data)
    alert(geo)
  }

  return (
    <GooglePlacesAutocomplete
      placeholder="Your Street Address"
      minLength={2}
      autoFocus={false}
      returnKeyType={'default'}
      fetchDetails={true}
      styles={{
        container: {
          flex: 0,
          width: `100%`
        },
        textInputContainer: {
          backgroundColor: theme.FOREGROUND_COLOR,
          borderTopWidth: 0,
          borderRadius: 25,
          height: 38,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 10,
          marginBottom: 10,
          borderRightWidth: 1.5,
          borderRightColor: 'rgba(0,0,0,0.1)',
          borderBottomWidth: 1.5,
          borderBottomColor: 'rgba(0,0,0,0.1)'
        },
        textInput: {
          color: '#5d5d5d',
          marginTop: 4,
          paddingLeft: 0,
          fontSize: theme.FONT_MEDIUM
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
      currentLocation={false}
      query={{
        sessionToken: `${Math.random() * 100000}`,
        components: 'country:ca',
        location: '43.7184038,-79.518142',
        radius: '25000',
        key: 'AIzaSyDchtR-tAGXxS--04z8bQCOKLdr9Wlhvds',
        language: 'en',
        types: 'address'
      }}
    />
  )
}

export default PlacesAutoComplete
