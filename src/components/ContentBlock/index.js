import React, { PropTypes } from 'react'
import styles from './index.css'

const propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  someText: PropTypes.object,
  someThing: PropTypes.any
}

const {container, textContent, media} = styles

const ContentBlock = ({ children, someText, someThing, title }) => {
  return (
    <div className='pure-g'>
      <div className='pure-u-1-24 pure-u-md-4-24 pure-u-lg-5-24' />
      <div className='pure-u-22-24 pure-u-md-16-24 pure-u-lg-14-24'>
        {someText
          ? someText.inLeft
            ? <div className={`pure-g`}>
              {/* Contents in Left */}
              <div className={`${textContent} pure-u-1 pure-u-md-2-3 pure-u-lg-2-3`}>
                <strong>{title}</strong>
                <p>{someText.inLeft}</p>
              </div>
              <div className={`${media} pure-u-1 pure-u-md-1-3 pure-u-lg-1-3`}>
                {someThing || ''}
              </div>
            </div>
            : <div className={`pure-g ${container}`}>
              {/* Contents in right */}
              <div className={`${textContent} pure-u-1 pure-u-md-2-3 pure-u-lg-2-3`}>
                <strong>{title}</strong>
                <p>{someText.inRight}</p>
              </div>
              <div className={`${media} pure-u-1 pure-u-md-1-3 pure-u-lg-1-3`}>
                {someThing || ''}
              </div>
            </div>
          : <div className={textContent}>
            {/* Contents in Left */}
            <center><strong>{title || ''}</strong></center>
            {children}
          </div>
        }
      </div>
    </div>
  )
}

ContentBlock.propTypes = propTypes
export default ContentBlock
