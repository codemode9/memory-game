import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Memory Game</h1>
        </header>
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    );
  }
}


export default App;
