import React, { Component } from 'react';
import 'antd/dist/antd.css';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : this.props.name,
            price : this.props.price,
            quantity : this.props.quantity
        };
      }
    totalProduct() {
        this.setState((prevState, props)=>{
          this.props.parentCallback(this.state.price,true);
          return {
            quantity : prevState.quantity + 1
          }
        });
      }   
    minusProduct(){
      this.setState((prevState, props)=>{
        if (prevState.quantity !== 0){
          this.props.parentCallback(this.state.price,false);
          return {
            quantity : prevState.quantity - 1
          }
        }
      });
    } 
    render(){
        return (
        <div>
            <h1>
                {this.state.name}
            </h1>
            <h2>
                Price: {this.state.price} USD
            </h2>
            <h2>
                Quantity: {this.state.quantity}
            </h2>
            <button onClick={()=>this.totalProduct()}>+</button>
            <button onClick={()=>this.minusProduct()}>-</button>
      </div>
    );
  }
}

export default Product;
