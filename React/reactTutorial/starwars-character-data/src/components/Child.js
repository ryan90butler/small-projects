import React, { Component } from 'react';


class Child extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="Child">
        <p>{ this.props.name}, the {this.props.title}</p>
      </div>
    );
  }
}

export default Child;
