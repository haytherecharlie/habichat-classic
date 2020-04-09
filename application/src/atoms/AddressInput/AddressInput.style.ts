import styled from 'styled-components'
import { Platform, View } from 'react-native'
import theme from 'assets/theme'

const android = Platform.OS === 'android'

export const AddressInput = styled(View)({
  flex: 1,
  display: 'flex',
  width: `100%`,
  flexDirection: 'column',
  position: 'relative'
})

export const InputBorder = styled(View)({
  marginTop: 5,
  borderRadius: 25,
  border: 1,
  borderColor: p => theme[p.valid.toUpperCase()] || theme.BRAND_COLOR,
  overflow: 'hidden'
})

export const GooglePlacesAutocomplete = {
  container: {
    flex: 1,
    width: `100%`
  },
  textInputContainer: {
    borderRadius: 25,
    height: 40,
    borderTopColor: theme.BRAND_COLOR,
    borderBottomColor: theme.BRAND_COLOR,
    borderLeftColor: theme.BRAND_COLOR,
    borderRightColor: theme.BRAND_COLOR,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    display: 'flex',
    backgroundColor: theme.OPAQUE_BRAND
  },
  textInput: {
    backgroundColor: 'transparent',
    height: 40,
    borderRadius: 25,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: android ? 0 : -1,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    flex: 1,
    color: theme.PRIMARY_COLOR
  },
  poweredContainer: {
    backgroundColor: theme.OPAQUE_BRAND,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25
  },
  powered: {
    tintColor: theme.BRAND_COLOR
  },
  listView: {
    marginLeft: 0,
    marginRight: 0
  },
  row: {
    overflow: 'hidden',
    width: `85%`,
    padding: 0,
    margin: 13,
    marginLeft: 10,
    height: 20,
    flexDirection: 'row'
  },
  description: {
    color: theme.PRIMARY_COLOR
  },
  separator: {
    height: 1,
    backgroundColor: theme.OPAQUE_BRAND
  },
  predefinedPlacesDescription: {
    color: theme.BRAND_COLOR
  }
}
