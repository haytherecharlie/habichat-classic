import React from 'react'
import PlacesAutoComplete from 'atoms/PlacesAutoComplete'
import * as S from './GeoLocation.style'

const GeoLocation = () => {
  return (
    <S.Wrapper>
      <PlacesAutoComplete />
    </S.Wrapper>
  )
}

export default GeoLocation
