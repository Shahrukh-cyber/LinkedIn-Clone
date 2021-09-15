import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
 return (
  <div className="sidebar">
   <div className="sidebar__top">
    <img src="" alt="" />
    <Avatar />
    <h2>Muhammad Shahrukh khan</h2>
    <h4>React Native Developer</h4>
   </div>
   <div className="sidebar__stats">
    <div className="sidebar__stat">
     <p>Who viewed your profile
     </p>
     <p className="sidebar__statNumber">160</p>

    </div>
    <div className="sidebar__stat">
     <p>Views of your post</p>
     <p className="sidebar__statNumber">400</p>
    </div>
   </div>
   <div className="sidebar__bottom">

   </div>
  </div>
 )
}

export default Sidebar
