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
        ]
    }; 
  }
  totalProduct(index){
    this.setState((prevState, props)=>{
      console.info(prevState.details[index].quantity);
      return {
        details: prevState.details.map(
          obj => (obj.id === index + 1 ? Object.assign(obj, { quantity: prevState.details[index].quantity +0.5 }) : obj)
        ),
        total: prevState.total + 1 * prevState.details[index].price
      }
    });
  }   
  minusProduct(index){
    this.setState((prevState, props)=>{
      if (prevState.details[index].quantity !== 0){
        console.info(prevState.details[index].quantity);
        return {
          details: prevState.details.map(
            obj => (obj.id === index + 1 ? Object.assign(obj, { quantity: prevState.details[index].quantity - 0.5 }) : obj)
          ),
          total: prevState.total - 1 * prevState.details[index].price
        }
      }
    });
  }   
  render(){
    return (
        <Row gutter={[16, 16]}>
          <Col span={8}>
            {/* {detailTags} */}
            <Product name={this.state.details[0].name} price={this.state.details[0].price} quantity={this.state.details[0].quantity} addHandler={()=>this.totalProduct(0)} minusHandler={()=>this.minusProduct(0)}></Product>
          </Col>
          <Col span={8}>
            <Product name={this.state.details[1].name} price={this.state.details[1].price} quantity={this.state.details[1].quantity} addHandler={()=>this.totalProduct(1)} minusHandler={()=>this.minusProduct(1)}></Product>
          </Col>
          <Col span={8}>
            <Product name={this.state.details[2].name} price={this.state.details[2].price} quantity={this.state.details[2].quantity} addHandler={()=>this.totalProduct(2)} minusHandler={()=>this.minusProduct(2)}></Product>
          </Col>
          <Total total={this.state.total}></Total>
       </Row>
    );
  }
}

export default Content;
