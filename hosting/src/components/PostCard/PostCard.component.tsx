import React from 'react'
import { useSelector } from 'react-redux'
import Reply from 'react-ionicons/lib/IosRedo'
import ChatBubbles from 'react-ionicons/lib/MdChatbubbles'
import theme from 'assets/theme'
import Avatar from 'atoms/Avatar'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import * as S from './PostCard.style'

const PostCard = ({ post }) => {
  const members = useSelector(s => s.members)
  return (
    <S.PostCard>
      <S.LeftCard>
        <Avatar src={members[post.userID].photoURL} alt="display profile" style={{ margin: `10px 0 0 -20px` }} />
      </S.LeftCard>
      <S.RightCard>
        <Link type="internal" href={`/thread?p=${post.id}`}>
          <S.TextPane>
            <Text size="S" text={members[post.userID].displayName} bold unique />
            <Text size="S" text={post.bodyText} style={{ marginTop: 5, fontWeight: 300 }} unique />
          </S.TextPane>
        </Link>
        <S.CommentsPane>
          <Link type="button" onClick={() => console.log('WOWO')}>
            <ChatBubbles fontSize={`${theme.FONT_S}px`} color={theme.BRAND_COLOR} />
            <Text
              size="XS"
              text="10 Comments"
              style={{ marginLeft: 2, color: theme.BRAND_COLOR, fontWeight: 600 }}
              unique
            />
          </Link>
          <Link type="button" onClick={() => console.log('WOWO')}>
            <Reply fontSize={`${theme.FONT_M}px`} color={theme.BRAND_COLOR} />
            <Text
              size="XS"
              text="Write Reply"
              style={{ marginLeft: 2, color: theme.BRAND_COLOR, fontWeight: 600 }}
              unique
            />
          </Link>
        </S.CommentsPane>
      </S.RightCard>
    </S.PostCard>
  )
}

export default PostCard
