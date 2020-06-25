import React from 'react'
import Avatar from 'ui/atoms/Avatar'
import Text from 'ui/atoms/Text'
import * as S from './NeighbourCard.style'

const NeighbourCard = ({ id, photoURL, displayName }) => {
  return (
    <S.NeighbourCard id={id}>
      <Avatar src={photoURL} alt="Brad Pitt" />
      <Text size="XS" text={displayName} style={{ color: `#777`, marginTop: 5 }} unique />
    </S.NeighbourCard>
  )
}

export default NeighbourCard
