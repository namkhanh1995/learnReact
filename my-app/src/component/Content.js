import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Product from './Product';
import Total from './Total';
import {Row , Col} from 'antd';
class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
        total : 0,
        details : [
          {id: 1, name : "IphoneX", price : "900", quantity:0 },
          {id: 2, name : "Samsung S9", price : "800", quantity:0 },
          {id: 3, name : "Nokia 8", price : "650", quantity:0 }
        ],
        message: "" 
    }; 
  }
  callbackFunction = (childData,isCheckSum) => {
    var sum = 0;
    if(isCheckSum){
      sum = this.state.total + parseInt(childData);
    }else{
      sum = this.state.total - parseInt(childData);
    }
    this.setState((prevState, props)=>{
      return {total: sum}
    })
  }

  render(){
    return (
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Product name={this.state.details[0].name} price={this.state.details[0].price} quantity={this.state.details[0].quantity} parentCallback = {this.callbackFunction}></Product>
          </Col>
          <Col span={8}>
            <Product name={this.state.details[1].name} price={this.state.details[1].price} quantity={this.state.details[1].quantity} parentCallback = {this.callbackFunction}></Product>
          </Col>
          <Col span={8}>
            <Product name={this.state.details[2].name} price={this.state.details[2].price} quantity={this.state.details[2].quantity} parentCallback = {this.callbackFunction}></Product>
          </Col>
          <Total total={this.state.total}></Total>
          <p> {this.state.message} </p>
       </Row>
    );
  }
}

export default Content;
