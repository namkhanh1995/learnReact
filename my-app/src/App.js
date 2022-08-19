import './App.css';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { PostsList } from './component/features/posts/PostsList';

import { AddPostForm } from './component/features/posts/AddPostForm';
class App extends Component {
  render(){
    return (
      <div>
        {/* <GetPosts />
        <PostPosts /> */}
        {/* <Counter /> */}
        <AddPostForm />
        <PostsList />
       
      </div>
  );
  }
}

export default App;
