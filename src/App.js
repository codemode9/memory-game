import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Card1 from "./components/Card1/";
import Card2 from "./components/Card2/";
import Card3 from "./components/Card3/";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    one: 1,
    two: 1,
    three: 1
  }

  clickLevelSwitch1 = event => {
    this.setState({
      one: -1
    })
    if (this.state.one===0 && this.state.two===0 && this.state.three===0) {
      alert ("You Win!")
      this.setState({
        one: +1
      })
    }
  }

  clickLevelSwitch2 = event => {
    this.setState({
      two: -1
    })
    if (this.state.one===0 && this.state.two===0 && this.state.three===0) {
      alert ("You Win!")
      this.setState({
        two: +1
      })
    }
  }

  clickLevelSwitch3 = event => {
    this.setState({
      three: -1
    })
    if (this.state.one===0 && this.state.two===0 && this.state.three===0) {
      alert ("You Win!")
      this.setState({
        three: +1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Memory Game</h1>
        </header>
        <div onClick={this.clickLevelSwitch1}>
        <Card1 onClick={this.clickLevelSwitch1}/>
        </div>
        <div onClick={this.clickLevelSwitch2}>
        <Card2 onClick={this.clickLevelSwitch2}/>
        </div>
        <div onClick={this.clickLevelSwitch3}>
        <Card3 onClick={this.clickLevelSwtich3}/>
        </div>
      </div>
    );
  }
}

export default App;
