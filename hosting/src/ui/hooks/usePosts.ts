import pathOr from 'ramda.pathor'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchPosts } from 'api/routes'

const usePosts = cid => {
  const posts = useSelector(s => pathOr({}, ['posts', cid], s))

  useEffect(() => {
    const listener = fetchPosts(cid)
    return () => {
      listener()
    }
  }, [])

  return posts
}

export default usePosts
