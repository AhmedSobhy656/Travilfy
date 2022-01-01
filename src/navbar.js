import './App.css';
import React, { Component } from 'react';

class NavBar extends Component{
  render () {
    return(
      <div className='body'>
          <div className='nav-bar width-block'>

           <div className='logo'>
            <div className="menu-bar" id='menu-bar-id'> 
               <i className="fas fa-bars icon-nav-bar"></i>
           </div>
           </div>

           <div  id='links-id'>   
             <ul>
                 <li> <a href="#"> Home            </a>     </li>
                 <li> <a href="#"> DownloadNow!    </a>     </li>
                 <li> <a href="#"> Blog            </a>     </li>
                 <li> <a href="#"> New York        </a>     </li>
                 <li> <a href="#"> New York        </a>     </li>
                 <li> <a href="#"> Other           </a>     </li>
                 <li> <a href="#"> Other           </a>     </li>
                 <li> <a href="#"> WooCommerce     </a>     </li>
                 <li> <a href="#"> Contact         </a>     </li>
             </ul>
           </div>
             
          </div>
      </div>
    )
  }
}

export default NavBar;