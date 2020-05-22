import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import qs from 'query-string'
import PostCard from 'components/PostCard'
import PageLayout from 'layouts/PageLayout'
import postalCodes from 'config/postal-codes.json'
import asyncLoadCommunity from 'services/firebase/api/loadCommunity'

const Community = ({ location }) => {
  const dispatch = useDispatch()
  const { posts } = useSelector(s => s)

  const searchPostalCode = async () => {
    try {
      const postalCode = qs.parse(location.search).c //postalRef.current.value.substr(0, 3).toUpperCase()
      if (!postalCodes[postalCode]) throw new Error('invalid postal code')
      const data = await asyncLoadCommunity(postalCode)
      dispatch({ type: 'INIT_COMMUNITY', ...data })
    } catch (err) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    searchPostalCode()
  }, [])

  return (
    <PageLayout page="community" crawl={false}>
      {Object.entries(posts).map(([id, post]) => (
        <PostCard key={id} post={{ ...post, id }} />
      ))}
    </PageLayout>
  )
}

export default Community
