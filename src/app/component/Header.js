import React from "react";
import LinkedIn from '../assets/linkedin.png'
import SearchIcon from "../assets/SearchIcon";

const Header = () => {
 return (
  <div>
   {/* Left */}
   <div className="header__left">
    <img src={LinkedIn} alt="LinkedInIcon" />
    <div className="header__search">
     <SearchIcon />

     <input type="search" placeholder="Search" />
    </div>
    <div>

    </div>
   </div>
   {/* Right */}
   <div className="header__right">
    <ul>
     <li>Home</li>
     <li>My Network</li>
     <li>Jobs</li>
     <li>Messaging</li>
     <li>Notifications</li>
     <li>Me</li>
    </ul>
   </div>



  </div>
 )
}

export default Header
