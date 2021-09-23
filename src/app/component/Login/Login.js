import React, { useState } from 'react'
import './Login.css'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../Api/firebase'
import { login as LoginUser } from '../../../features/userSlice'
import { useDispatch } from 'react-redux'
const Login = () => {
  const [form, setForm] = useState({ name: '', profilePic: '', email: '', password: '' })
  const dispatch = useDispatch();
  const register = () => {
    if (!form.name) {
      alert('Username Must be filled...!')
    }
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: form.name,
          photoURL: form.profilePic
        }).then(() => dispatch(LoginUser({
          email: form.email,
          uid: user.uid,
          displayName: form.name,
          photoURL: form.profilePic

        })))

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });

  }
  const login = (e) => {

    e.preventDefault();
    signInWithEmailAndPassword(auth, form.email, form.password).then((userCredential) => {
      const user = userCredential.user;
      dispatch(LoginUser({
        email: form.email,
        uid: user.uid,
        displayName: form.name,
        photoURL: form.profilePic
      }))
    }).catch((error) => alert(error))
    setForm({ name: '', profilePic: '', email: '', password: '' })
  }

  return (

    <div className="login">
      <img src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo_2013.svg_.png' alt='LinkedIn' />
      <form>
        <input type="text" placeholder='Full name (required if registered) ' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="text" placeholder='Profile Pic URl (Optional)'
          value={form.profilePic} onChange={(e) => setForm({ ...form, profilePic: e.target.value })} />
        <input type="email" placeholder='Email' value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder='Password' value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type='submit' onClick={login}>Sign In</button>

      </form>
      <p>
        Not a member?
        <span className='login__register' onClick={register}>
          Register Now

        </span>
      </p>
    </div>
  )
}

export default Login
