import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import SpriteAnimator from 'react-sprite-animator'
import logo from '../../assets/img/smiley.png'
import {
  openNavMenu,
  closeNavMenu
} from '../../redux/actions/app'

// import Svg from 'react-svg-inline'

class Header extends Component {
  constructor () {
    super()
    this._toggleMenu = this._toggleMenu.bind(this)
  }
  _toggleMenu () {
    const { dispatch, menuOpen } = this.props
    if (menuOpen) {
      dispatch(closeNavMenu())
    } else {
      dispatch(openNavMenu())
    }
  }
  render () {
    const { menuOpen } = this.props
    const open = menuOpen ? 'open' : ''
    const menuShape = menuOpen ? 'x' : ''
    return (
      <div className={`custom-wrapper pure-g ${open}`} id='menu'>
        <div className='pure-u-1 pure-u-md-1-3'>
          <div className='pure-menu'>
            <SpriteAnimator
              sprite={logo}
              scale={1.2}
              width={80}
              height={80}
              direction='vertical'
              loop={false}
              fps={10}
            />
            <a className={`custom-toggle ${menuShape}`} id='toggle' onClick={this._toggleMenu}><s className='bar' /><br /><s className='bar' /></a>
          </div>
        </div>
        <div className='pure-u-1 pure-u-md-1-3' />
        <div className='pure-u-1 pure-u-md-1-3'>
          <div className='pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform'>
            <ul className='pure-menu-list'>
              <li className='pure-menu-item'><Link className='pure-menu-link'>Home</Link></li>
              <li className='pure-menu-item'><Link className='pure-menu-link'>Work</Link></li>
              <li className='pure-menu-item'><Link className='pure-menu-link'>Blog</Link></li>
              <li className='pure-menu-item'><Link className='pure-menu-link'>Gallery</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  menuOpen: PropTypes.bool,
  dispatch: PropTypes.func
}

function mapStateToProps (state) {
  return {
    menuOpen: state.app.menuOpen
  }
}

export default connect(mapStateToProps)(Header)
