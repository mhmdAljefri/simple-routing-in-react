import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Redirect } from 'react-router-dom'

// Component for routing 
import Home from './Home'
import Next from './Next'
import Last from './Last'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React with Routing</h1>
        </header>
        {/*after end of header*/}
        <div className='nav'>
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/next">Next</NavLink></li>
            <li><NavLink to="/last">Last</NavLink></li>
          </ul>
        </div>
        <div className="App-intro">
          <Route path='/home' exact component={Home} />
          <Route path='/next' component={Next} />
          <Route path='/last' component={Last} />
          <Redirect to='/home' />
        </div>        
      </div>
    );
  }
}

export default App;
