import React, { Component } from 'react';
// import logo from './logo.svg';
// import LoginBox from './LoginBox.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      firstName: '',
      lastName: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleChange(e){
    this.setState({
    [e.target.name]: e.target.value
  })
  }

  handleSubmit(e){
    e.preventDefault();
    const names = ['firstName', 'lastName', 'email']
    let invalidInputs = names.filter((name)=>{
      return this.state[name] === '';
    })
    invalidInputs.forEach((input)=>{
      this.refs[input].className = 'form-input hasError'
    })
    if(invalidInputs.length === 0){
      alert('Form Validated')
    }
  }
  handleFocus(e){
    this.refs[e.target.name].className = 'form-input'
  }
  render() {
    return (
      <div className="App">
        <div className="loginContainer">
            <form onSubmit={this.handleSubmit}>
              <div className='form-input' ref="firstName">
                <label>First Name</label>
                <input type="text" name="firstName" onFocus={this.handleFocus} value={this.state.firstName} onChange={this.handleChange}/>
                </div>
              <div className='form-input' ref='lastName'>
                <label>Last Name</label>
                <input type="text" name="lastName" onFocus={this.handleFocus} value={this.state.lastName} onChange={this.handleChange}/>
                </div>
              <div className='form-input' ref='email'>
                <label>Email</label>
                <input type="text" name="email" onFocus={this.handleFocus} value={this.state.email} onChange={this.handleChange}/>
                </div>
                <button>submit</button>
                </form>

          </div>
        </div>
    );
  }
}

export default App;
