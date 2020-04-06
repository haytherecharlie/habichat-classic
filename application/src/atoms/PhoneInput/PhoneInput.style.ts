import styled from 'styled-components'
import { View, Text, Platform } from 'react-native'
import theme from 'assets/theme'

export const PhoneInput = styled(View)({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 20,
  position: 'relative'
})

export const CountryCode = styled(Text)({
  position: 'absolute',
  top: Platform.OS === 'android' ? 60 : 58,
  left: 20,
  color: theme.PRIMARY_COLOR,
  fontSize: 14
})

export const InputBorder = styled(View)({
  marginTop: 5,
  borderRadius: 25,
  border: 1,
  borderColor: p => theme[p.valid.toUpperCase()],
  overflow: 'hidden'
})

export const PhoneNumberMask = {
  containerStyle: {
    width: `100%`,
    height: 40,
  },
  style: {
    flex: 1,
    width: `100%`,
    backgroundColor: theme.OPAQUE_BRAND,
    color: theme.PRIMARY_COLOR,
    paddingLeft: 65
  },
  placeholderTextColor: theme.INPUT_PLACEHOLDER
}
