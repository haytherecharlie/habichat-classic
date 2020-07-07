import React from 'react'
import Title from 'ui/atoms/Title'
import NeighbourCard from 'ui/components/NeighbourCard'
import useNeighbours from 'ui/hooks/useNeighbours'
import * as S from './NeighboursList.style'

const NeighboursList = ({ cid }) => {
  // const [loading, neighbours = useNeighbours(cid)
  const neighbours = {
    '12323': {
      displayName: 'Brad',
      photoURL: 'https://habi.chat/avatars/brad_pitt.jpeg'
    },
    '12423': {
      displayName: 'Béyonce👸🏾',
      photoURL: 'https://habi.chat/avatars/beyonce_knowles.jpeg'
    },
    '12523': {
      displayName: 'Jennifer💪🏽',
      photoURL: 'https://habi.chat/avatars/jennifer_lopez.jpeg'
    },
    '12623': {
      displayName: 'Will',
      photoURL: 'https://habi.chat/avatars/will_smith.jpeg'
    },
    '12653': {
      displayName: 'Tom',
      photoURL: 'https://habi.chat/avatars/tom_cruise.jpeg'
    }
  }

  return (
    <S.Neighbours>
      <Title size="h3" text="NEIGHBOURS" style={{ paddingLeft: 10 }} bold unique />
      <S.ScrollList>
        {Object.entries(neighbours).map(([id, info]) => (
          <NeighbourCard key={id} id={id} {...info} />
        ))}
      </S.ScrollList>
    </S.Neighbours>
  )
}

export default NeighboursList
