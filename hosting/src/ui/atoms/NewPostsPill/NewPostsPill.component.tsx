import React from 'react'
import { pathOr } from 'ramda'
import ArrowUp from 'react-ionicons/lib/MdArrowRoundUp'
import { useSelector } from 'react-redux'
import ButtonPill from 'ui/atoms/ButtonPill'
import Text from 'ui/atoms/Text'
import * as S from './NewPostsPill.style'

const NewPostsPill = ({ cid }) => {
  const newPosts = useSelector(s => pathOr([], ['communities', cid, 'newPosts'], s))

  return newPosts.length ? (
    <S.Wrapper>
      <ButtonPill>
        <div style={{ padding: `5px 20px 5px 15px` }}>
          <ArrowUp color="#FFF" fontSize="15" />
          <Text size="S" text="New Posts!" style={{ marginLeft: 5, fontWeight: 600 }} unique />
        </div>
      </ButtonPill>
    </S.Wrapper>
  ) : null
}

export default NewPostsPill
