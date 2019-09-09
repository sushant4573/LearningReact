import React, { Component } from 'react';
import './App.css';
import Greet from './component/Greet'
import FuncClick from './component/funcClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind/>
      </div>
    );
  }
}

export default App;
