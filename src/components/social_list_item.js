import PropTypes from 'prop-types'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialListItem = ({ onMouseOver, noBlank, onMouseOut, icon, link }) =>
  <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
    <div>
      <a href={link} target={noBlank ? '' : 'blank'}><FontAwesomeIcon icon={icon}/></a>
    </div>
  </div>
  

SocialListItem.propTypes = {
  iconText: PropTypes.string,
  icon: PropTypes.object,
  link: PropTypes.string,
}

SocialListItem.defaultProps = {
  iconText: '',
  icon: {},
  link: '',
}

export default SocialListItem