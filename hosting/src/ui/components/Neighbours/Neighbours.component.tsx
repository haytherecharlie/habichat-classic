import React from 'react'
import Text from 'ui/atoms/Text'
import * as S from './Neighbours.style'
import { Avatar } from 'ui/atoms/Avatar/Avatar.style'

const Neighbours = () => {
  return (
    <S.Neighbours>
      <Text size="M" text="Your Neighbours" bold unique />
      <S.ScrollList>
        <S.Neighbour>
          <Avatar src="/avatars/brad_pitt.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="Charlie" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/tom_cruise.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="Margaret" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/jennifer_lopez.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="Donald" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/will_smith.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="Steven" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/tom_cruise.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="Matt" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/beyonce_knowles.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="Miranda" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/brad_pitt.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="Kendrick" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/brad_pitt.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="kendrick89" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/brad_pitt.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="kendrick89" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/brad_pitt.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="kendrick89" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/brad_pitt.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="kendrick89" unique />
        </S.Neighbour>
        <S.Neighbour>
          <Avatar src="/avatars/brad_pitt.jpeg" alt="Brad Pitt" />
          <Text size="XS" text="kendrick89" unique />
        </S.Neighbour>
      </S.ScrollList>
    </S.Neighbours>
  )
}

export default Neighbours
