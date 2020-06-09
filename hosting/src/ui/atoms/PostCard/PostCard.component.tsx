import React, { useRef } from 'react'
import { navigate } from 'gatsby'
import pathOr from 'ramda.pathor'
import Reply from 'react-ionicons/lib/IosRedo'
import ChatBubbles from 'react-ionicons/lib/MdChatbubbles'
import theme from 'ui/assets/theme'
import Avatar from 'ui/atoms/Avatar'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import * as S from './PostCard.style'

const PostCard = ({ post }) => {
  let downclick = 0
  const photoURL = pathOr('', ['author', 'photoURL'], post)
  const displayName = pathOr('', ['author', 'displayName'], post)
  const text = pathOr('', ['text'], post)
  const replies = pathOr('', ['replies'], post)

  const handleButtonPress = () => {
    downclick = new Date().getTime()
  }

  const handleButtonRelease = () => {
    const diff = new Date().getTime() - downclick
    if (diff < 200) return navigate(`/post/${post.id}`)
  }

  return (
    <S.PostCard>
      <S.LeftCard>
        <Avatar src={photoURL} alt="display profile" style={{ height: 35, width: 35, margin: `8px 0 0 -20px` }} />
      </S.LeftCard>
      <S.RightCard>
        <S.TextPane
          onTouchStart={handleButtonPress}
          onTouchEnd={handleButtonRelease}
          onMouseDown={handleButtonPress}
          onMouseUp={handleButtonRelease}>
          <Text size="S" text={displayName} bold unique />
          <Text size="S" text={text} style={{ marginTop: 5, fontWeight: 300 }} unique />
        </S.TextPane>
        <S.CommentsPane>
          <Link type="button" onClick={() => console.log('WOWO')}>
            <ChatBubbles fontSize={`${theme.FONT_S}px`} color={theme.BRAND_COLOR} />
            <Text
              size="XS"
              text={`${replies} Comments`}
              style={{ marginLeft: 3, color: theme.BRAND_COLOR, fontWeight: 600 }}
              unique
            />
          </Link>
          <Link type="button" onClick={() => console.log('WOWO')}>
            <Reply fontSize={`${theme.FONT_M}px`} color={theme.BRAND_COLOR} />
            <Text
              size="XS"
              text="Write Reply"
              style={{ marginLeft: 3, color: theme.BRAND_COLOR, fontWeight: 600 }}
              unique
            />
          </Link>
        </S.CommentsPane>
      </S.RightCard>
    </S.PostCard>
  )
}

export default PostCard
