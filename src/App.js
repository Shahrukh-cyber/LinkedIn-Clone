import React from 'react'
import './App.css'
import { Feed, Header, Sidebar, Widgets } from './app/component'
import Picture from '../src/app/assets/MyPic.jpeg'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
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
      </div>
    </div>
  )
}

export default App
