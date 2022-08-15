import './App.css';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Header from './component/Header';
import Content from './component/Content';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Content />
      </div>
  );
  }
}

export default App;
