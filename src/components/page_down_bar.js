import PropTypes from 'prop-types'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

const PageDownBar = ({pageId, top, style = {}, offset=0, text='Continue'}) =>
  <div className='boxBar' style={{...style}} onClick={()=>scroller.scrollTo(pageId, {
    duration: 1000,
    delay: 50,
    offset,
    smooth: 'easeInOutQuad',
  })}>
    { top
      ? <div>
        <div style={{height: '1em'}}><FontAwesomeIcon icon={ faCaretUp }/></div>
        <div className='continue'><small>Top</small></div>
      </div>
      : <div>
        <div className='continue' style={{height: '1em'}}><small>{text}</small></div>
        <div style={{height: '1em'}}><FontAwesomeIcon icon={ faCaretDown }/></div>
      </div> }
  </div>


  

PageDownBar.propTypes = {
  pageId: PropTypes.string,
}

PageDownBar.defaultProps = {
  pageId: ``,
}

export default PageDownBar