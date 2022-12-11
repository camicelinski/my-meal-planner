/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import PostItemSmall from '../components/PostItem/PostItemSmall'
import Pagination from '../components/Pagination/Pagination'
import { sortByDate } from '../helpers/sortByDate'

const Home = () => {
  const [documents] = useAllPrismicDocumentsByType('blog_post')

  const pageUrl = '/home'

  return (
    <>
      <main>
        <Route path={`${pageUrl}/:page`}>
          {documents && (
            <Pagination
              path={'/home'}
              limit={5}
              length={documents.length}
            >
              {documents && (
                documents.sort(sortByDate).map((post, index) =>
                  <PostItemSmall
                    post={post}
                    key={index}
                  />
                )
              )}
            </Pagination>
          )}
        </Route>
      </main>
    </>
  )
}

export default Home
