import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import invariant from 'invariant'
import { BodyContainer, joinUri } from 'phenomic'

import Loading from '../../components/Loading'

import styles from './index.css'

const Homepage = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children
  },
  {
    metadata: { pkg }
  }
) => {
  invariant(
    typeof head.title === 'string',
    `Your page '${__filename}' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url)
    },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${pkg.twitter}` },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description }
  ]

  return (
    <div className={styles.page}>
      <Helmet
        title={metaTitle}
        meta={meta}
      />
      { header }
      {
        isLoading
        ? <Loading />
        : <BodyContainer>{ body }</BodyContainer>
      }
      <div className={styles.banner}>
      { header }
        <h1 className={styles.bannerHead}>
          Melvin Isican
        </h1>
      </div>
    </div>
  )
}

Homepage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element
}

Homepage.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default Homepage
