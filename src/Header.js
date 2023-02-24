import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from "@mui/icons-material/People";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
        <div className='header__left'>
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
             alt="Not showing" />
            <div  className='header__search'>
                <SearchIcon/>
                <input placeholder='Search'  type="text"/>
            </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon= {HomeIcon} title='Home'/>
            <HeaderOption Icon= {SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon= {BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon= {MessageIcon} title='Messaging'/>
            <HeaderOption Icon= {NotificationsIcon} title='Notifications'/>
            <HeaderOption 
            avatar= {true}
            title="my image"
            onClick={logoutOfApp}
            />
        </div>
    </div>
  )
}

export default Header