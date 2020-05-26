import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'atoms/Link'
import ComposePost from 'components/ComposePost'
import PostCard from 'components/PostCard'
import PageLayout from 'layouts/PageLayout'
import postalCodes from 'config/postal-codes.json'
import { habiFetch } from 'utils/helpers'

const Community = ({ cid, navigate }) => {
  const dispatch = useDispatch()
  const { posts, user } = useSelector(s => s)
  const [loading, setLoading] = useState(true)

  const searchPostalCode = async () => {
    try {
      if (!postalCodes[cid]) throw new Error('invalid postal code')
      const { status, data } = await habiFetch(`/community/${cid}`)
      if (status !== 'success') throw new Error(data)
      setLoading(false)
      return dispatch({ type: 'INIT_COMMUNITY', ...data })
    } catch (err) {
      navigate('/404/')
    }
  }
  useEffect(() => {
    searchPostalCode()
  }, [])

  return (
    <PageLayout loading={loading} page="community" crawl={false} style={{ marginTop: 5 }}>
      {Object.entries(posts).map(([pid, post]) => <PostCard key={pid} post={{ ...post, pid, cid }} />)}
      {user.authenticated && <ComposePost user={user} />}
      <Link type="button" onClick={() => console.log('hello')}></Link>
    </PageLayout>
  )
}

export default Community
