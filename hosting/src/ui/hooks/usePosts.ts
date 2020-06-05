import pathOr from 'ramda.pathor'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchPosts } from 'api/routes'

const usePosts = cid => {
  const reduxPosts = useSelector(s => pathOr([], ['posts'], s))
  const postIDs = useSelector(s => pathOr(undefined, ['communities', cid, 'postIDs'], s))
  const posts = Object.keys(postIDs).reduce((acc, id) => {
    acc[id] = reduxPosts[id]
    return acc
  }, {})

  useEffect(() => {
    fetchPosts(cid)
  }, [])

  return posts
}

export default usePosts
