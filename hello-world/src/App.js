import React, { Component } from 'react';
import './App.css';
import UserGreeting from './component/UserGreeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGreeting />
      </div>
    );
  }
}

export default App;
