import React, {Component} from 'react';

class Page2 extends Component {
  render(){
    console.log(this.props.match.params.id)

    return (
      <h1>Page 2</h1>

    )
  }
}

export default Page2