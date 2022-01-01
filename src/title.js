import './App.css';
import React, { Component } from 'react';

class Title extends Component{
  render () {
    return(
      <div className='body'>
      <div className='title-line'></div>  {/* green line at the top page*/}
           <div className='title box-body'>
                <div className='title-left '> 
                    <h1> Travelify</h1>
                    <h6> The best FREE travel blog theme</h6>
               </div>    

               <div className='title-right '> 
                      <div className="social-icon ">
                         <li> <a href="#"> <div>  <i className="fab fa-facebook-square  title-icon"> </i> </div> </a>  </li>
                         <li> <a href="#"> <div>  <i className="fab fa-twitter-square  title-icon">  </i> </div> </a>  </li>
                         <li> <a href="#"> <div>  <i className="fab fa-linkedin  title-icon">        </i> </div> </a>  </li>
                         <li> <a href="#"> <div>  <i className="fab fa-youtube-square  title-icon">  </i> </div> </a>  </li>                                  
                      </div>
               </div>
             <div className='clear'></div>
           </div>
      </div>

    )    
  }
}

export default Title;