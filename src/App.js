import React from 'react';
import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed.js';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login'
import { auth } from './firebase';
import { useEffect } from 'react';
import Widgets from './Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          // user is logged in
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            pohtoURL: userAuth.pohtoURL,
          }))
        }
        else{
          // user is logged out 
          dispatch(logout())
        }
      })


  },[])

  
  return (
    <div className="app">
      {/* header */}
      <Header />

      {!user ? (
      <Login/> 
      ): (
      <div className='app__body'>
        <Sidebar/>
       <Feed/>
       <Widgets/>

      </div>
      

      )}
    </div>
  );
}

export default App;
