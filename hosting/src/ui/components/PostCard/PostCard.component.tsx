import React from 'react'
import Avatar from 'ui/atoms/Avatar'
import Elipsis from 'react-ionicons/lib/MdMore'
import Text from 'ui/atoms/Text'
import Title from 'ui/atoms/Title'
import * as S from './PostCard.style'

const PostCard = ({ pid, author, text }) => {
  return (
    <S.PostCard>
      <S.TextInfo>
        <S.TiLeft>
          <Avatar src={author.photoURL} alt="avatar" />
        </S.TiLeft>
        <S.TiMiddle>
          <S.Author>
            <Title size="h4" text={author.displayName} style={{ fontWeight: 900 }} unique />
            <Title size="h4" text={`@${author.displayName}`} style={{ marginLeft: 5, color: `#777` }} unique />
          </S.Author>
          <S.Body>
            <Text size="S" text={text} style={{ color: `#777` }} unique />
          </S.Body>
        </S.TiMiddle>
        <S.TiRight>
          <Title size="h5" text={`4h`} style={{ marginRight: 5, marginBottom: 10, color: `#CCCCCC` }} unique />
          <Elipsis size="20px" color="#CCC" />
        </S.TiRight>
      </S.TextInfo>
      <S.Media />
      <S.Discussion />
    </S.PostCard>
  )
}

export default PostCard
