import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Login from './containers/Login'
import Signup from './containers/Signup'
import Home from './containers/home/Home'
import Profile from './containers/profile/Profile'
import Favorite from './containers/Favorite/Favorite'
// import Test from './Test'imr
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'



function App() {





  return (
    <div className="App">
      <Router> 
          {/* <Route component={Login} /> */}
          <Switch>
            <Route exact path='/' component={Login} />
            {/* <Route path= */}
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/home' component={() => {
            if(localStorage.getItem('token')){
              return <Home />
            }else{
              return <Redirect to='/' />
            }}} />
            <Route exact path='/profile' component={() => {
            if(localStorage.getItem('token')){
              return <Profile />
            }else{
              return <Redirect to='/' />
            }}} />
            <Route exact path='/favorites' component={() => {
            if(localStorage.getItem('token')){
              return <Favorite />
            }else{
              return <Redirect to='/' />
            }}} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
