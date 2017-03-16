import React from 'react'

import LatestPosts from '../../components/LatestPosts'
import Page from '../Page'

const Blogpage = (props) => {
  return (
    <Page {...props}>
      <LatestPosts />
    </Page>
  )
}

export default Blogpage
