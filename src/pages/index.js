import React from 'react'
//import { Link } from 'gatsby'

import Image from '../components/image'
import Layout from '../components/layout'
import SocialList from '../components/social_list'
import PageDownBar from '../components/page_down_bar'
import SEO from '../components/seo'
import Hellos from '../components/hellos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'

var Scroll = require('react-scroll');
var Element = Scroll.Element;

const IndexPage = () => (
  <Layout>
    <SEO title='Welcome' keywords={['hdwatts', 'howard', 'dean', 'watts', 'software', 'developer', 'manhattan', 'chronograph', 'private', 'equity']} />
    <Element name='container' className='element' id='containerElement'>
      <div style={{width: '100%'}}>
        <Element name='page1'>
          <div className=''>
            <Image />
            <div className='card' style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)'}}>
              <h1 style={{textAlign: 'center', marginTop: 'auto', marginBottom: 0, width: '100%'}}><Hellos/></h1>
              <h1>I'm Howard <span style={{textDecoration: 'underline'}}>Dean</span> Watts.</h1>
              <p>
                <span className='line'>Lead Software Engineer</span>
                <span className='vertical-divider'>|</span>
                <span className='line'>Founding Member of <a href='https://www.chronograph.pe' style={{color: 'inherit'}}>Chronograph.pe</a></span>
                <span className='vertical-divider'>|</span>
                <span className='line'>Manhattan, NY</span>
              </p>
              <SocialList/>
              <PageDownBar text='About' pageId={'page2'} offset={10}/>
            </div>
          </div>
        </Element>
          <div style={{padding: '1.0875rem'}}>
            <Element name='page2'>
            <div className='card textCard' style={{backgroundColor: 'rgba(255,255,255,.3)', borderRadius: 10}}>
                <div style={{width: '100%', marginTop: 'auto'}}><h1 className='handshake'><FontAwesomeIcon icon={faHandshake}/></h1></div>
                <div className='hdwatts-about-text'>
                  <p>
                    I am a software developer based in New York and work with <a style={{color: '#FDFFFC'}} href='https://www.chronograph.pe'>Chronograph Private Equity</a>.
                  </p>
                  <p>  
                    I specialize in web applications and have built apps with React-Redux, Node.js, .NET, Rails, ColdFusion, and Perl in professional environments.
                    
                    When I'm not coding, I love to travel, eat good food, and play guitar.
                  </p>
                  <p style={{marginBottom: 0}}>
                    Feel free to reach out to me anytime: <a style={{color: '#FDFFFC'}} href='mailto:howard@hdwatts.com'>howard@hdwatts.com</a>.
                  </p>
                </div>
              <PageDownBar pageId={'page1'} top/>
              {/*<PageDownBar pageId={'page3'}/>*/}
            </div>
            </Element>
          </div>
        {/*<Element name='page3'>
          <div className='card'>
            <PageDownBar pageId={'page1'} top/>
          </div>
        </Element>*/}
      </div>
    </Element>
  </Layout>
)

export default IndexPage

// <p>I'm a software developer based in Manhattan, currently working for <span className='highlight'>Chronograph Private Equity!</span></p>
// <p>I specialize in web applications and have built apps with <span className='highlight'>.NET</span>, <span className='highlight'>Rails</span>, <span className='highlight'>Ember</span>,
//   <span className='highlight'>Perl</span>, and <span className='highlight'>ColdFusion</span> in professional environments.</p>
// <p>Feel free to reach out to me anytime at <span className='highlight'>howard@hdwatts.com</span>, and on any of the platforms below.</p>