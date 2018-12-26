import React, { Component } from 'react'

import SocialListItem from '../components/social_list_item'
import { faMedium, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class SocialList extends Component{
  constructor() {
    super()
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseOut = this.onMouseOut.bind(this)
  }
  onMouseOver(hoverText){
    //this.setState({hoverText})
  }
  onMouseOut(){
    //this.setState({hoverText: null})
  }
  render() {
    return <div className='social-list' id='social-wrapper'>
      <div className='social-list-icons'>
        <SocialListItem onMouseOver={()=>this.onMouseOver('howard@hdwatts.com')} onMouseOut={this.onMouseOut} icon={faEnvelope} link={'mailto:howard@hdwatts.com'}/>
        <SocialListItem onMouseOver={()=>this.onMouseOver('Instagram')} onMouseOut={this.onMouseOut} icon={faInstagram} link={'https://www.instagram.com/deanwatts2'}/>
        <SocialListItem onMouseOver={()=>this.onMouseOver('GitHub')} onMouseOut={this.onMouseOut} icon={faGithub} link={'https://www.github.com/hdwatts'}/>
        <SocialListItem onMouseOver={()=>this.onMouseOver('Medium')} onMouseOut={this.onMouseOut} icon={faMedium} link={'https://www.medium.com/@hdwatts'}/>
        <SocialListItem onMouseOver={()=>this.onMouseOver('LinkedIn')} onMouseOut={this.onMouseOut} icon={faLinkedin} link={'https://www.linkedin.com/in/hdwatts'}/>
      </div>
    </div>
  }
}

export default SocialList
