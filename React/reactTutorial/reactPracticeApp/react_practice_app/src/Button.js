import React,{Component} from "react";

class Button extends Component{
  clickResult(event){
    window.alert('Why did you click this?');
  }
  render(){
    return (
      <div class='Login-Container'>
      <button class="Login-Button" onClick={this.clickResult}>Login</button>
      </div>
    )
  }
}

export default Button;