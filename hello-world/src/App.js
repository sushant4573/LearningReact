import React, { Component } from 'react';
import './App.css';
import './css/styles.css';
import LifeCycleA from './component/LifeCycleA';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LifeCycleA />
      </div> 
    );
  }
}

export default App;
