import React, { Component } from 'react';
import './App.css';
import './css/styles.css';
import ParentComp from './component/ParentComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComp />
      </div> 
    );
  }
}

export default App;
