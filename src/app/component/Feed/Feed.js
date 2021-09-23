import React, { useState, useEffect } from 'react'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import VideoIcon from '@material-ui/icons/Subscriptions'
import EventIcon from '@material-ui/icons/EventNote'
import WriteArticleIcon from '@material-ui/icons/CalendarViewDay'
import Picture from '../../assets/MyPic.jpeg'
import './Feed.css'
import InputOption from '../InputOption/InputOption'
import Post from '../Post/Post'
import { db } from '../../../Api/firebase'
import { collection, addDoc, doc, getDocs, getDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'
const Feed = () => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')
  const user = useSelector(selectUser);
  const AddData = async () => {
    let docRef = await addDoc(collection(db, 'posts'), {
      name: `${user?.displayName}. 2nd`,
      description: user?.email,
      message: input,
      photoUrl: user?.photoUrl || '',
    })
    console.log('doc', docRef)
  }
  const sendPost = (e) => {
    e.preventDefault()
    AddData()
    setInput('')
  }
  useEffect(async () => {
    debugger
    const querySnapshot = await getDocs(collection(db, 'posts'))
    setPosts(
      querySnapshot.docs.map(
        (doc) => (
          console.log(doc.data()),
          {
            id: doc.id,
            data: doc.data(),
          }
        )
      )
    )
  }, [])
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              type='text'
              placeholder='Start a post'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOption Icon={VideoIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventIcon} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={WriteArticleIcon}
            title='Write article'
            color='#7FC15E'
          />
        </div>
      </div>

      <div className='feed__showallfeeds'>



        {posts.map(
          ({ id, data: { name, description, message, photoUrl } }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />

          )
        )
        }


      </div>
    </div>
  )
}

export default Feed
