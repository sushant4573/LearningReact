import React, { Component } from 'react';
import './App.css';
import ParentComponent from './component/ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent />
      </div>
    );
  }
}

export default App;
