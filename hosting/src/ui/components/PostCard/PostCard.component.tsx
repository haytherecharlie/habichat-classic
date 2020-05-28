import React from 'react'
import { useSelector } from 'react-redux'
import Reply from 'react-ionicons/lib/IosRedo'
import ChatBubbles from 'react-ionicons/lib/MdChatbubbles'
import theme from 'ui/assets/theme'
import Avatar from 'ui/atoms/Avatar'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import * as S from './PostCard.style'

const PostCard = ({ post }) => {
  console.log(post)
  const members = useSelector(s => s.members)
  return (
    <S.PostCard>
      <S.LeftCard>
        <Avatar src={members[post.userID].photoURL} alt="display profile" style={{ margin: `15px 0 0 -20px` }} />
      </S.LeftCard>
      <S.RightCard>
        <Link type="internal" href={`/community/${post.cid}/post/${post.pid}`}>
          <S.TextPane>
            <Text size="M" text={members[post.userID].displayName} bold unique />
            <Text size="M" text={post.bodyText} style={{ marginTop: 5, fontWeight: 300 }} unique />
          </S.TextPane>
        </Link>
        <S.CommentsPane>
          <Link type="button" onClick={() => console.log('WOWO')}>
            <ChatBubbles fontSize={`${theme.FONT_S}px`} color={theme.BRAND_COLOR} />
            <Text
              size="XS"
              text={`${post.replies} Comments`}
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
