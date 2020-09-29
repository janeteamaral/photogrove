import React, { Component } from 'react';
import Splash from 'react-splash';
import logo from './logo.svg';
import '../styles/App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash 
          text="Project Name" 
          src="https://source.unsplash.com/FxU8KV7psMY/1600x900" 
          style={{ height: '60vh' }}
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
 
export default App;