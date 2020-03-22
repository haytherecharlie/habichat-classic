import React, { useEffect, useState, forwardRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import theme from 'assets/styles/theme.style'
import * as V from 'utils/helpers/validation'
import * as S from './PlacesAutoComplete.style'

const PlacesAutoComplete = (props, ref) => {
  const [autoFocus, setAutoFocus] = useState(false)
  const { onChangeText, validation, onPress, value } = props

  const borderColor = () => {
    if (validation === 'pending') return theme.PRIMARY_COLOR
    if (validation === 'valid') return theme.VALID_GREEN
    if (validation === 'invalid') return theme.INVALID_RED
  }

  const pressDummy = () => onChangeText('')
  useEffect(() => { setAutoFocus(true) }, [])

  if (validation !== 'valid')
    return (
      <GooglePlacesAutocomplete
        ref={ref}
        autoFocus={autoFocus}
        placeholder="Your Street Address"
        minLength={2}
        returnKeyType={'default'}
        fetchDetails={true}
        styles={{
          container: { ...S.container },
          textInputContainer: { ...S.textInputContainer },
          textInput: { ...S.textInput, borderColor: borderColor() }
        }}
        currentLocation={false}
        onPress={onPress}
        textInputProps={{ clearButtonMode: 'never', onChangeText }}
        query={{
          sessionToken: `${Math.random() * 100000}`,
          components: 'country:ca',
          location: '43.7184038,-79.518142',
          radius: '25000',
          key: 'AIzaSyDchtR-tAGXxS--04z8bQCOKLdr9Wlhvds',
          language: 'en',
          types: 'address'
        }}
        renderLeftButton={() => null}
        renderRightButton={() => null}
      />
    )
  return (
    <S.DummyContainer ref={ref} borderColor={borderColor()} onPress={pressDummy}>
      <S.DummyInput>{value}</S.DummyInput>
    </S.DummyContainer>
  )
}

export default forwardRef(PlacesAutoComplete)
