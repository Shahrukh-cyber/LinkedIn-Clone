import React from "react";
import LinkedIn from '../../assets/linkedin.png';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import { HeaderOption } from "..";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import JobIcon from '@material-ui/icons/LocalMallSharp';
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from "@material-ui/icons/Notifications";
import Picture from '../../assets/MyPic.jpeg'


const Header = () => {
 return (
  <div className="header">
   {/* Left */}
   <div className="header__left">
    <img src={LinkedIn} alt="LinkedInIcon" />
    <div className="header__search">
     <SearchIcon />

     <input type="search" placeholder="Search" />
    </div>

   </div>
   {/* Right */}
   <div className="header__right">
    <HeaderOption title="Home" Icon={HomeIcon} />
    <HeaderOption title="MyNetwork" Icon={SupervisorAccountIcon} />
    <HeaderOption title="jobs" Icon={JobIcon} />
    <HeaderOption title="Messaging" Icon={ChatIcon} />
    <HeaderOption title="Notifications" Icon={NotificationIcon} />
    <HeaderOption title="Me" avatar={Picture} />
   </div>



  </div>
 )
}

export default Header;
