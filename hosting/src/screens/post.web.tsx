import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'atoms/Link'
import ComposePost from 'components/ComposePost'
import PostCard from 'components/PostCard'
import PageLayout from 'layouts/PageLayout'
import postalCodes from 'config/postal-codes.json'
import { habiFetch } from 'utils/helpers'

const Post = ({ cid, pid, navigate }) => {
  const dispatch = useDispatch()
  const { posts, user } = useSelector(s => s)
  const [loading, setLoading] = useState(true)

  // const searchPostalCode = async () => {
  //   try {
  //     if (!postalCodes[cid]) throw new Error('invalid postal code')
  //     const { status, data } = await habiFetch(`/community/${cid}/post/${pid}`)
  //     if (status !== 'success') throw new Error(data)
  //     setLoading(false)
  //     return dispatch({ type: 'INIT_COMMUNITY', ...data })
  //   } catch (err) {
  //     navigate('/404/')
  //   }
  // }
  
  // useEffect(() => {
  //   searchPostalCode()
  // }, [])

  return (
    <PageLayout loading={false} page="post" crawl={false} style={{ marginTop: 5 }}>
      {posts[pid] && <PostCard key={pid} post={{ ...posts[pid], pid, cid }} />}
    </PageLayout>
  )
}

export default Post
