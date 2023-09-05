import React  from 'react'
import Home from "../Assests/codicon_home.png"
import Profiles from "../Assests/Grouppic.png"
import Message from "../Assests/Vector.png"
import Notification from "../Assests/bx_bell.png"
import Settings from "../Assests/ci_settings.png"
import ExitButton from "../Assests/majesticons_door-exit.png"
import "./sideNav.css"
function SideNavBar() {
  return (
<>


  <div class="navigation">
    <div className='profile-img'>
    <img src={Profiles} alt="" />

    </div>
    <ul>
    
      <li>
        <a href="/">
          <span class="icon">
<img src={Home} alt="" />
          </span>
          {/* <span class="title">Dashboard</span> */}
        </a>
      </li>
      <li>
        <a href="/">
          <span class="icon">
<img src={Message} alt="" />

          </span>
          {/* <span class="title">Calls</span> */}
        </a>
      </li>
      <li>
        <a href="/">
          <span class="icon">
         
<img src={Notification} alt="" />

          </span>
          {/* <span class="title">Messages</span> */}
        </a>
      </li>
      <li>
        <a href="/">
          <span class="icon">
      
<img src={Settings} alt="" />
          </span>
          {/* <span class="title">Mails</span> */}
        </a>
      </li>
    
    </ul>
    <div class="exiticon-align">
        <img src={ExitButton} alt="" />
    </div>
  </div>

</>
    )
}

export default SideNavBar