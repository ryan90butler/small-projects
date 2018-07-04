import React, { Component } from 'react';
import Header from './Header'
import './App.css';


const data =[1,2,3,4,5]

class App extends Component {

  handleClick(event){
    console.log('click');
  }
  handleChange(event){
    console.log(event.target.value)
  }

  render() {

    const thingsList = data.map(element => {
      return <div>hi { element }</div>
    })

    return (
      <div className="App">
        <Header />
        <p className="App-intro">
        </p>
        {thingsList}
        <button onClick={this.handleClick}>Click Me</button>
        <input id='myInput' name="hereWeGo" placeholder='Oh Yeah!'onChange= {this.handleChange}/>

      </div>
  );
  }
}

export default App;
