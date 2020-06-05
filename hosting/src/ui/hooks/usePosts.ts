import pathOr from 'ramda.pathor'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchPosts } from 'api/routes'

const usePosts = cid => {
  const posts = useSelector(s => pathOr(undefined, ['posts', cid], s))
  
  useEffect(() => {
    fetchPosts(cid)
  }, [])

  return posts
}

export default usePosts
