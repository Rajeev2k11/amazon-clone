import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/login">
            <h1>login</h1>
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
