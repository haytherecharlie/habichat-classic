import React from 'react'
import PostCard from 'ui/components/PostCard'
import Title from 'ui/atoms/Title'
import * as S from './PostsList.style'

const PostsList = () => {
  const posts = {
    '01': {
      author: {
        displayName: 'Brad',
        photoURL: 'https://habi.chat/avatars/brad_pitt.jpeg'
      },
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    '02': {
      author: {
        displayName: 'Béyonce',
        photoURL: 'https://habi.chat/avatars/beyonce_knowles.jpeg'
      },
      text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.`
    },
    '03': {
      author: {
        displayName: 'Jennifer',
        photoURL: 'https://habi.chat/avatars/jennifer_lopez.jpeg'
      },
      text: `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`
    },
    '04': {
      author: {
        displayName: 'Will',
        photoURL: 'https://habi.chat/avatars/will_smith.jpeg'
      },
      text: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.`
    },
    '05': {
      author: {
        displayName: 'Tom',
        photoURL: 'https://habi.chat/avatars/tom_cruise.jpeg'
      },
      text: `Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    }
  }

  return (
    <S.PostsList>
      <Title size="h3" text="COMMUNITY POSTS" style={{ paddingLeft: 1 }} bold unique />
      <S.ScrollList>
        {posts && Object.entries(posts).map(([pid, post]) => post && <PostCard key={pid} pid={pid} {...post} />)}
      </S.ScrollList>
    </S.PostsList>
  )
}

export default PostsList
