import React, { Component } from 'react';
import {counterSlice} from './counterSlice';

class Counter extends Component {

  render(){
    console.log(counterSlice.actions.increment())

    return (
      <div>
        Complex Example (Event, List, Props, State)
      </div>
    );
  }
}

export default Counter;
