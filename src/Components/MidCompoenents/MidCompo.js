import React from 'react'
import Search from "./Assests/bx_search.png";
import Ellipse from "./Assests/Ellipse 3.png";
import Ellipse2 from "./Assests/Ellipse 4.png";
import Ellipse3 from "./Assests/Ellipse 5.png";


import "./MidCompo.css"
function MidCompo() {
  return (
<>
<div className="mid-components">
    <div className='search-bar'>
       <div className='src-align'>
       <img src={Search} alt="" />
       </div>
        <input type="search" placeholder='Search'/>
    </div>

    <div className='user-custom'>
        <div className='user-innercontent'>
           <div className='userbox-name'>
            <h1>Groups</h1>
           </div>
           <div className='user-details'>
            <div className="user-image">
                <img src={Ellipse} alt="" />
            </div>

            <div className='username-message'>
                <h6>Friends Forever</h6>
                <p>hahahhah</p>
            </div>

            <div className='user-time-readornot'>
<p>Today 9:50</p>
<p></p>
            </div>
           </div>

           <div className='user-details'>
            <div className="user-image">
                <img src={Ellipse2} alt="" />
            </div>

            <div className='username-message'>
                <h6>Mera Gang</h6>
                <p>Kyuuuuu?</p>
            </div>

            <div className='user-time-readornot'>
<p>Today 9:50</p>
<p></p>
            </div>
           </div>



           <div className='user-details'>
            <div className="user-image">
                <img src={Ellipse3} alt="" />
            </div>

            <div className='username-message'>
                <h6>Hiking</h6>
                <p>It’s not going to happen</p>
            </div>

            <div className='user-time-readornot'>
<p>Today 9:50</p>
<p></p>
            </div>
           </div>
        </div>
    </div>

    <div className='user-custom'>
        <div className='user-innercontent'>
           <div className='userbox-name'>
            <h1>People</h1>
           </div>
           <div className='user-details'>
            <div className="user-image">
                <img src={Ellipse} alt="" />
            </div>

            <div className='username-message'>
                <h6>Friends Forever</h6>
                <p>hahahhah</p>
            </div>

            <div className='user-time-readornot'>
<p>Today 9:50</p>
<p></p>
            </div>
           </div>

           <div className='user-details'>
            <div className="user-image">
                <img src={Ellipse2} alt="" />
            </div>

            <div className='username-message'>
                <h6>Friends Forever</h6>
                <p>hahahhah</p>
            </div>

            <div className='user-time-readornot'>
<p>Today 9:50</p>
<p></p>
            </div>
           </div>




           <div className='user-details'>
            <div className="user-image">
                <img src={Ellipse3} alt="" />
            </div>

            <div className='username-message'>
                <h6>Anil's</h6>
                <p>April fool’s day</p>
            </div>

            <div className='user-time-readornot'>
<p>Yesterday 10:35</p>
<p></p>
            </div>
           </div>
        </div>
    </div>
</div>
</>
    )
}

export default MidCompo