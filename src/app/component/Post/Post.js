import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined'
import CommentIcon from '@material-ui/icons/ChatOutlined'
import ShareIcon from '@material-ui/icons/ShareOutlined'
import SendIcon from '@material-ui/icons/SendOutlined'

import InputOption from '../InputOption/InputOption'
const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar src={photoUrl} />
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post__body'>
        <p>{message}</p>
      </div>
      <div className='post__buttons'>
        <InputOption Icon={LikeIcon} title='Like' />
        <InputOption Icon={CommentIcon} title='Comment' />
        <InputOption Icon={ShareIcon} title='Share' />
        <InputOption Icon={SendIcon} title='Send' />
      </div>
    </div>
  )
}

export default Post
