import React, { PropTypes } from 'react'
import SpriteAnimator from 'react-sprite-animator'

// import LatestPosts from '../../components/LatestPosts'
import Page from '../Page'

import ContentBlock from '../../components/ContentBlock'

import styles from './index.css'

import sample from '../../assets/img/iam.png'
import sample2 from '../../assets/img/melvin-logo.png'
import sample3 from '../../assets/img/logo-sub.png'

const Homepage = (props) => {
  return (
    <Page {...props}>
      <div className={styles.banner}>
        <div className={styles.bannerHead}>
          <center>
            <div id='hello' className='animated fadeIn' style={{marginTop: -120}}>
              <SpriteAnimator
                sprite={sample}
                scale={1.2}
                width={320}
                height={50}
                direction='vertical'
                loop={false}
                fps={10}
              />
            </div>
            <div id='nameLogo' className='animated fadeIn' style={{marginTop: 0}}>
              <SpriteAnimator
                sprite={sample2}
                scale={1}
                width={320}
                height={100}
                direction='vertical'
                loop={false}
                fps={10}
              />
            </div>
            <div id='hello2' className='animated fadeIn' style={{marginTop: 0}}>
              <SpriteAnimator
                sprite={sample3}
                scale={1}
                width={240}
                height={37.5}
                direction='vertical'
                loop={false}
                fps={8}
              />
            </div>
          </center>
        </div>
      </div>
      <div style={{margin: 5}}>
        <ContentBlock title='Website under construction'>
          <p>{props.head.intro}</p>
        </ContentBlock>
        <ContentBlock
          title='This is a Title'
          someText={{inLeft: props.head.desc1}}
          someThing={<img src='http://placehold.it/150x150' alt='sfsd' />} />
        <ContentBlock
          title='This is a Title'
          someText={{inRight: props.head.desc2}}
          someThing={<img src='http://placehold.it/150x150' alt='asdf' />} />
      </div>
    </Page>
  )
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired
}

export default Homepage
