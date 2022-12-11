import React from 'react'
import { useParams } from 'react-router-dom'
import { usePrismicDocumentByUID } from '@prismicio/react'
import PostItem from '../components/PostItem/PostItem'

const Post = () => {
  const { uid } = useParams()
  const [post] = usePrismicDocumentByUID('blog_post', uid)

  return (
    <>
      {post && (
        <PostItem post={post} />
      )}
    </>
  )
}

export default Post
