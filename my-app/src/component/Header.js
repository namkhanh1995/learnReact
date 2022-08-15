import React, { Component } from 'react';
import 'antd/dist/antd.css';
import SimpleForm from './SimpleForm';

class Header extends Component {
  render(){
    return (
      <div>
        <SimpleForm></SimpleForm>
      </div>
  );
  }
}

export default Header;
