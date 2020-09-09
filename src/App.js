import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Components/Home'
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useStateValue } from './Context/StateProvider';
import {auth} from './firebase'


function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return()=>{
      unsubscribe();
    }
    
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/">
           <Header/>
           <Home/>
          </Route>

        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
