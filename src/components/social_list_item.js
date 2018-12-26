import PropTypes from 'prop-types'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialListItem = ({ onMouseOver, onMouseOut, icon, link }) =>
  <div onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
    <div>
      <a href={link} target='blank'><FontAwesomeIcon icon={icon}/></a>
    </div>
  </div>
  

SocialListItem.propTypes = {
  iconText: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
}

SocialListItem.defaultProps = {
  iconText: '',
  icon: '',
  link: '',
}

export default SocialListItem