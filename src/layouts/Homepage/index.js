import React, { PropTypes } from 'react'
import SpriteAnimator from 'react-sprite-animator'
import Svg from 'react-svg-inline'

// import LatestPosts from '../../components/LatestPosts'
import Page from '../Page'

import ContentBlock from '../../components/ContentBlock'

import styles from './index.css'

import sample from '../../assets/img/iam.png'
import sample2 from '../../assets/img/melvin-logo.png'
import sample3 from '../../assets/img/logo-sub.png'
import sample4 from '../../assets/img/laptop.svg'

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
                fps={5}
              />
            </div>
          </center>
        </div>
      </div>
      <div style={{margin: 5}}>
        <ContentBlock title='What I Can Do' />
        <ContentBlock
          title='I Design'
          someText={{inLeft: props.head.desc1}}
          someThing={<div className={styles.sample} />} />
        <ContentBlock
          title='I Code'
          someText={{inLeft: props.head.desc2}} />
        <ContentBlock>
          <center>
            <Svg svg={sample4} />
          </center>
        </ContentBlock>
        <ContentBlock title='Website under construction' />
      </div>
    </Page>
  )
}

Homepage.propTypes = {
  head: PropTypes.object.isRequired
}

export default Homepage
