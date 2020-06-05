import React from 'react'
import pathOr from 'ramda.pathor'
import Reply from 'react-ionicons/lib/IosRedo'
import ChatBubbles from 'react-ionicons/lib/MdChatbubbles'
import theme from 'ui/assets/theme'
import Avatar from 'ui/atoms/Avatar'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import * as S from './PostCard.style'

const PostCard = ({ cid, pid, post }) => {
  const photoURL = pathOr('', ['metadata', 'author', 'photoURL'], post)
  const displayName = pathOr('', ['metadata', 'author', 'displayName'], post)
  const text = pathOr('', ['text'], post)
  const replyCount = 12

  return (
    <S.PostCard>
      <S.LeftCard>
        <Avatar src={photoURL} alt="display profile" style={{ height: 35, width: 35, margin: `8px 0 0 -20px` }} />
      </S.LeftCard>
      <S.RightCard>
        <Link type="internal" href={`/app/community/${cid}/post/${pid}`}>
          <S.TextPane>
            <Text size="S" text={displayName} bold unique />
            <Text size="S" text={text} style={{ marginTop: 5, fontWeight: 300 }} unique />
          </S.TextPane>
        </Link>
        <S.CommentsPane>
          <Link type="button" onClick={() => console.log('WOWO')}>
            <ChatBubbles fontSize={`${theme.FONT_S}px`} color={theme.BRAND_COLOR} />
            <Text
              size="XS"
              text={`${replyCount} Comments`}
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
