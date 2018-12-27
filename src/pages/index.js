import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import SocialList from '../components/social_list'
import PageDownBar from '../components/page_down_bar'
import SEO from '../components/seo'
import Hellos from '../components/hellos'

var Scroll = require('react-scroll');
var Element = Scroll.Element;

const IndexPage = () => (
  <Layout>
    <SEO title='Welcome' keywords={['howard', 'dean', 'watts', 'software', 'developer']} />
    <Element name='container' className='element' id='containerElement'>
      <div style={{width: '100%'}}>
        <Element name='page1'>
          <div className='card'>
            <h1 style={{marginTop: 'auto', marginBottom: 0}}><Hellos/>,</h1>
            <h1>I'm Howard Dean Watts.</h1>
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
        </Element>
        <Element name='page2'>
          <div className='card' style={{padding: 0}}>
            {/*<div style={{width: '100%', marginTop: 'auto'}}><h1>About</h1></div>*/}
            <div className='hdwatts-about-background' style={{marginTop: 'auto'}}>
              <div className='hdwatts-about-text'>
                <p><span className='line'>I am a software developer based in New York and</span><span className='vertical-divider' style={{margin: '0 2.5px'}}></span><span className='line'>working for <a style={{color: '#FDFFFC'}} href='https://www.chronograph.pe'>Chronograph Private Equity</a>.</span></p>
                <p><span className='line'>I specialize in web applications and have built apps</span><span className='vertical-divider' style={{margin: '0 2.5px'}}></span><span className='line'>with React-Redux, Node.js, .NET, Rails, ColdFusion,</span><span className='vertical-divider' style={{margin: '0 2.5px'}}></span><span className='line'>and Perl in professional environments.</span></p>
                <p><span className='line'>When I'm not coding, I love to travel,</span><span className='vertical-divider' style={{margin: '0 2.5px'}}></span><span className='line'>eat good food, and play guitar.</span></p>
                <p><span className='line'>Feel free to reach out to me anytime:</span><span className='vertical-divider' style={{margin: '0 2.5px'}}></span><span className='line'><a style={{color: '#FDFFFC'}} href='mailto:howard@hdwatts.com'>howard@hdwatts.com</a>.</span></p>
              </div>
            </div>
            <PageDownBar pageId={'page1'} top style={{marginBottom: 20}}/>
            {/*<PageDownBar pageId={'page3'}/>*/}
          </div>
        </Element>
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