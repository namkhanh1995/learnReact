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
      console.log(this.state.details);
      //this.state.details[index].quantity = prevState.details[index].quantity + 1;
      this.state.total = prevState.total + 1 * prevState.details[index].price;
      return {
        total: this.state.total
      }
    });
  }   
  render(){
    var detailTags = this.state.details.map((e, index) => (
      <Product
        key={e.id}
        addHandler={() => this.totalProduct(index)}
        productName={e.name}
        price={e.price}
        quantity={e.quantity}
      />
    ));
    return (
        <Row gutter={[16, 16]}>
          <Col span={8}>
            {detailTags}
          </Col>
          {/* <Col span={8}>
            <Product name={this.state.details[1].name} price={this.state.details[1].price} quantity={this.state.details[1].quantity} addHandler={()=>this.totalProduct(1)}></Product>
          </Col>
          <Col span={8}>
            <Product name={this.state.details[2].name} price={this.state.details[2].price} quantity={this.state.details[2].quantity} addHandler={()=>this.totalProduct(2)}></Product>
          </Col> */}
          <Total total={this.state.total}></Total>
       </Row>
    );
  }
}

export default Content;
