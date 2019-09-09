import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/welcome'
import Message from './component/Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
      </div>
    );
  }
}

export default App;
