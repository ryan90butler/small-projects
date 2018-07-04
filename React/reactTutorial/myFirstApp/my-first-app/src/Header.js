import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {

  buttonClick(event){
    console.log('Hi')
  }
  buttonChange(event){
    console.log(event.target.name)
  }

    render(){
      return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">My First App</h1>
        <button onClick={this.buttonClick}>Click Me</button>
        <input id='myInput' name="hereWeGo" placeholder='Type your answer here' onChange= {this.buttonChange}/>
      </header>
      )
    }
}

export default Header;