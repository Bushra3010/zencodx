import React,{ useEffect } from 'react';
import { BrowserRouter as Router ,Routes, Route, Navigate } from 'react-router-dom';

// Using AOS for animation

// Components
import GlobalStyle from './globalstyles';
import Home from './components/home';
import Software from './components/Software-Development';
import Web from './components/Web-Development';
import AppD from './components/App-Development';
import Game from './components/Game-Development';
import Product from "./components/Product-Photography";
import Digital from "./components/Digital-Marketing";
import Graphic from "./components/Graphic-Designing";
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';

import { useSelector,useDispatch } from 'react-redux';
import { selectUser,login,logout } from './features/userSlice';
import { auth } from './components/firebase';

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path="/software" element={<Software/>} />
          <Route path="/web" element={<Web/>} />
          <Route path="/app" element={<AppD/>} />
          <Route path="/game" element={<Game/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/digital" element={<Digital/>} />
          <Route path="/graphic" element={<Graphic/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route 
            path="/teslaaccount" 
            element={
              <main>
                {user ? <Account/> : <Navigate to='/login'/>}
              </main>
            }
          />
          <Route 
            path="/login" 
            element={
              <main>
                {user ? <Navigate to='/teslaaccount'/> : <Login/>}
              </main>
            } 
          />

        </Routes>

        <GlobalStyle/>
      </div>
    </Router>
  );
}

export default App;