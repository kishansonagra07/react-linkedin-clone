import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {auth} from './firebase'
import {login} from './features/userSlice'
import './Login.css'

export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [profilePic,setProfilePic] = useState("")

    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    }
    const register = () => {
        if(!name){
            return alert('Please enter Full Name')
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth => {
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            }).then(() => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic
                }))
            })
        }))
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt=""/>

            <form>
                <input placeholder='Full name*' value={name} onChange={e => setName(e.target.value)} type="text"/>
                <input placeholder='Profile pic URL' value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text"/>
                <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type="email"/>
                <input placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type="password"/>
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
                <p>Not a memeber?{"  "}<span className='login__register' onClick={register}>Register Now</span></p>
        </div>
    )
}
