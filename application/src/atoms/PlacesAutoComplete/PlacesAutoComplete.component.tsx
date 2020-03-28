import React, { useEffect, useState, forwardRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import theme from 'assets/styles'
import * as S from './PlacesAutoComplete.style'

const PlacesAutoComplete = (props, ref) => {
  const [defer, setDefer] = useState(true)
  const [autoFocus, setAutoFocus] = useState(false)
  const { onChangeText, validation, onPress, value } = props

  const borderColor = () => {
    if (validation === 'pending') return theme.PRIMARY_COLOR
    if (validation === 'valid') return theme.VALID_GREEN
    if (validation === 'invalid') return theme.INVALID_RED
  }

  const pressDummy = () => onChangeText('')

  useEffect(() => {
    setAutoFocus(true)
  }, [])

  return (
    <S.PlacesAutoComplete>
      {validation !== 'valid' ? (
        <GooglePlacesAutocomplete
          ref={ref}
          autoFocus={autoFocus}
          placeholder="Your Street Address"
          minLength={2}
          returnKeyType={'default'}
          styles={{
            container: S.container,
            textInputContainer: S.textInputContainer,
            textInput: { ...S.textInput, borderColor: borderColor() },
            listView: S.ListView
          }}
          currentLocation={false}
          onPress={onPress}
          textInputProps={{ clearButtonMode: 'never', onChangeText: t => (defer ? setDefer(false) : onChangeText(t)) }}
          query={{
            sessionToken: `${Math.random() * 100000}`,
            components: 'country:ca',
            location: '43.7184038,-79.518142',
            radius: '20000',
            key: 'AIzaSyDchtR-tAGXxS--04z8bQCOKLdr9Wlhvds',
            language: 'en',
            types: 'address',
            strictbounds: 'true'
          }}
        />
      ) : (
        <S.DummyContainer ref={ref} borderColor={borderColor()} onPress={pressDummy}>
          <S.DummyInput>{value}</S.DummyInput>
        </S.DummyContainer>
      )}
    </S.PlacesAutoComplete>
  )
}

export default forwardRef(PlacesAutoComplete)
