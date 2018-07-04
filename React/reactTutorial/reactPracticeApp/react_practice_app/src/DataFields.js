import React, {Component} from 'react';
import Button from './Button.js';

class DataFields extends Component {
  render(){
    return(
      <div>
        <div class="LoginField">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
          <Button />
      </div>

    )

  }
}

export default DataFields;