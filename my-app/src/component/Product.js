import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

class Product extends Component {
    render(){
        return (
        <div>
            <h1>
                {this.props.name}
            </h1>
            <h2>
                Price: {this.props.price} USD
            </h2>
            <h2>
                Quantity: {this.props.quantity}
            </h2>
            <Button onClick={this.props.addHandler}>+</Button>
      </div>
    );
  }
}

export default Product;
