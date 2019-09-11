import React, { Component } from 'react';
import './App.css';
import './css/styles.css';
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/FocusInput';
import FrParentInput from './component/FrParentInput';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <FocusInput /> */}
       <FrParentInput />
      </div> 
    );
  }
}

export default App;
