import PropTypes from 'prop-types'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

const Header = ({ siteTitle }) => (
  <div
    className='header'
    style={{
      marginBottom: '1.45rem',
      position: 'fixed',
      top: 0,
      width: '100%',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '.75rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <span
          style={{
            color: '#FDFFFC',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          onClick={()=>scroller.scrollTo('page1', {
            duration: 1000,
            delay: 50,
            smooth: 'easeInOutQuad',
          })}
        >
          <FontAwesomeIcon icon={faCode} /><span style={{marginLeft: 5, fontVariant: 'small-caps'}}>Hdwatts</span>
        </span>
      </h1>
      <div>
        <a
          className='header-link'
          style={{
            cursor: 'pointer',
            color: '#FDFFFC',
            marginRight: 10,
            textDecoration: 'none',
          }}
          href={'mailto:howard@hdwatts.com'}
        >
          Email Me!
        </a>
        {/*<span
          to="/"
          className='header-link'
          style={{
            cursor: 'pointer',
            color: '#FDFFFC',
          }}
          onClick={()=>scroller.scrollTo('page3', {
            duration: 1000,
            delay: 50,
            smooth: 'easeInOutQuad',
          })}
        >
          Experience
        </span>*/}
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
