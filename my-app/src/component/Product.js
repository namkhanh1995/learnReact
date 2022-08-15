import React, { Component } from 'react';
import 'antd/dist/antd.css';

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
            <button onClick={this.props.addHandler}>+</button>
            <button onClick={this.props.minusHandler}>-</button>
      </div>
    );
  }
}

export default Product;
