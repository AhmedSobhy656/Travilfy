import './App.css';
import React, { Component } from 'react';

import bannerimage1 from './banner1.jpg';  

class Banner extends Component{
  render () {
    return(
      <div className='body'>

             <div className='img-banner width-block'>
                 <img src={bannerimage1} className='banner-img1' /> 
             </div>

      </div>     
    )
  }
}

export default Banner;
