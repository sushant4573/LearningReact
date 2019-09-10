import React, { Component } from 'react';
import './App.css';
import './css/styles.css';
import sty from './css/styles.module.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='error'>Error</h1>
        <h1 className={sty.success}>Success</h1>
      </div>
    );
  }
}

export default App;
