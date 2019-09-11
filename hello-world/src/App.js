import React, { Component } from 'react';
import './App.css';
import './css/styles.css';
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/FocusInput';

class App extends Component {
  render() {
    return (
      <div className="App">
       <FocusInput />
      </div> 
    );
  }
}

export default App;
