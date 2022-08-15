import React, { Component } from 'react';
import 'antd/dist/antd.css';

class Total extends Component {
  render(){
    return (
      <div>
        Total: {this.props.total} USD
      </div>
    );
  }
}

export default Total;
