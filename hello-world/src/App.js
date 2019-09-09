import React, { Component } from 'react';
import './App.css';
import Greet from './component/Greet'
import FuncClick from './component/funcClick';
import ClassClick from './component/ClassClick';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassClick/>
        <FuncClick/>
      </div>
    );
  }
}

export default App;
