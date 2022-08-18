import './App.css';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import GetPosts from './component/Posts/GetPosts';
import PostPosts from './component/Posts/PostPosts';

class App extends Component {
  render(){
    return (
      <div>
        {/* <Header /> */}
        <GetPosts />
        <PostPosts />
        {/* <Content /> */}
      </div>
  );
  }
}

export default App;
