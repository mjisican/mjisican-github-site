import React, {PropTypes} from 'react'

import Button from '../../components/Button'
import { Link } from 'phenomic'

import styles from './index.css'

const propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  cta: PropTypes.object
}

const Hero = ({image, title, cta}) => {
  return (
    <div
      className={styles.hero}
      style={image && {
        background: `#111 url('${image}') 50% 50% / cover`
      }}
    >
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>{ title }</h1>
          {
            cta &&
            <Link to={cta.link}>
              <Button className={styles.cta} light {...cta.props}>
                { cta.label }
              </Button>
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = propTypes
export default Hero
