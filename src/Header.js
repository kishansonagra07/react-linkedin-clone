import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccount from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from '@material-ui/icons/Notifications'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import {logout} from './features/userSlice'

function Header() {
    const dispatch = useDispatch()

    const logoutToApp = () => {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg' alt=''/>
                <div className='header__search'>
                <SearchIcon/>
                    <input placeholder='Search' type="text"/>
                </div>
            </div>
            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccount} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationIcon} title='Notifications' />
                <HeaderOption avatar={true} title='me' onClick={logoutToApp} />
            </div>
        </div>
    )
}

export default Header
