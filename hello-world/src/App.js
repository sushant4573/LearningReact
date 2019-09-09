import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/welcome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name='BRUCE WAYNE' heroName='BATMAN' />
          <h4>I am BatMan</h4>
        <Greet name='CLARKE KENT' heroName='SUPERMAN' />
          <h4>I am SuperMan son of Krypton</h4>
        <Greet name='DIANA PRINCE' heroName='WONDER-WOMAN' />
          <h4>I am Dianna Prince of themeskera</h4>
        <Welcome name="JOKER"/>
        
      </div>
    );
  }
}

export default App;
