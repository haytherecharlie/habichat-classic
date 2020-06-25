import { pathOr } from 'ramda'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface Post {
  userID: string
  author: {
    photoURL: string
    displayName: string
  }
}

const useNeighbours = cid => {
  const [loading, setLoading] = useState(true)
  const [neighbours, setNeighbours] = useState({})
  const posts = useSelector(s => pathOr({}, ['posts', cid], s))

  useEffect(() => {
    const postObj = Object.values(posts)
    if (postObj.length) {
      setNeighbours(postObj.reduce((acc: Object, post: Post) => ({ ...acc, [post.userID]: { ...post.author } }), {}))
    }
    setLoading(false)
  }, [posts])

  return [loading, Object.values(neighbours)]
}

export default useNeighbours
