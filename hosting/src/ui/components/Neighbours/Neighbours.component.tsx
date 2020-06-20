import React from 'react'
import Text from 'ui/atoms/Text'
import useNeighbours from 'ui/hooks/useNeighbours'
import * as S from './Neighbours.style'
import { Avatar } from 'ui/atoms/Avatar/Avatar.style'

const Neighbours = ({ cid }) => {
  const neighbours = useNeighbours(cid)

  return (
    <S.Neighbours>
      <Text size="M" text="Your Neighbours" bold unique />
      <S.ScrollList>
        {neighbours &&
          neighbours.map(({ displayName, photoURL }) => (
            <S.Neighbour>
              <Avatar src={photoURL} alt="Brad Pitt" />
              <Text size="XS" text={displayName} unique />
            </S.Neighbour>
          ))}
      </S.ScrollList>
    </S.Neighbours>
  )
}

export default Neighbours
