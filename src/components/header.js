import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

class Header extends Component {
  constructor() {
    super()
    this.state = { scrolled: false }
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll() {
    const { scrolled } = this.state
    let supportPageOffset = window.pageXOffset !== undefined;
    let scroll = {
       x: supportPageOffset ? window.pageXOffset : document.body.scrollLeft,
       y: supportPageOffset ? window.pageYOffset : document.body.scrollTop
    };
    const height = window.innerHeight
    console.log(scroll.y, scrolled)
    if(scroll.y > height && !scrolled){
      this.setState({scrolled: true})
    } else if (scroll.y <= height && scrolled) {
      this.setState({scrolled: false})
    }
  }
  render() {
    const { scrolled } = this.state
    return <div
      className={ (scrolled ? 'header-scrolled' : 'header') }
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
  }
}
export default Header
