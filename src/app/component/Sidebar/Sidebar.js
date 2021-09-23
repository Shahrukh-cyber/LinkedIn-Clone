import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'
import './Sidebar.css'

const Sidebar = ({ image, avatar }) => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src={image} alt='backgroud' />
        <Avatar className='sidebar__avatar' src={user?.photoUrl} >

          {user?.email[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>React Native Developer</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed your profile</p>
          <p className='sidebar__statNumber'>160</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views of your post</p>
          <p className='sidebar__statNumber'>400</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('reactnative')}
        {recentItem('nextjs')}
        {recentItem('developer')}
        {recentItem('designer')}
        {recentItem('programmer')}
      </div>
    </div>
  )
}

export default Sidebar
