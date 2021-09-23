import React, { useEffect } from 'react'
import './App.css'
import { Feed, Header, Sidebar, Widgets } from './app/component'
import Picture from '../src/app/assets/MyPic.jpeg'
import Login from './app/component/Login/Login'
import { useSelector } from 'react-redux'
import { logout, selectUser, login } from './features/userSlice'
import { auth } from '../src/Api/firebase'
import { useDispatch } from 'react-redux'
function App() {
  debugger
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userCredential) => {
      if (userCredential) {
        dispatch(login({
          email: userCredential.email,
          uid: userCredential.uid,
          displayName: userCredential.displayName,
          photoURL: userCredential.photoURL

        }))
      } else {
        dispatch(logout());

      }
    })

  }, [])

  return (
    <div className='app'>

      {user ? <Header />
        : ''}

      {user ? <div className='app__body'>
        <section className='appbody__siderbar__section'>
          <Sidebar
            image='https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            avatar={Picture}
          />
        </section>
        <section className='appbody__feed__section'>
          <Feed />
        </section>
        <section className='appbody__widgets__section'>
          <Widgets />
        </section>
      </div> : <Login />}



    </div>

  )
}

export default App
