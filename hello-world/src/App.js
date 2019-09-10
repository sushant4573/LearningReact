import React, { Component } from 'react';
import './App.css';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import PersonList from './component/PersonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonList/>
      </div>
    );
  }
}

export default App;
