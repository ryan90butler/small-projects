import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="box">
        <Link to='/classList/Math1010'><button className='btn'>Math 1010</button></Link>
        <Link to='/classList/English2010'><button className='btn'>English 2010</button></Link>
        <Link to='/classList/Biology2020'><button className='btn'>Biology 2020</button></Link>
      </div>
    );
  }
}