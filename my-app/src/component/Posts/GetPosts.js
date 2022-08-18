import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Table} from 'antd';
import {columns} from './ModelPosts';

class GetPost extends Component {
  constructor(props){
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        data: []
    }; 
  }
  
  componentDidMount() {
    fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(
        (responseJson) => {
          const results = responseJson.map(row=>({
            key: row._id,
            title: row.title,
            content: row.content,
            author: row.author
          }));
          this.setState({
            isLoaded: true,
            data: results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render(){
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Table dataSource={data} columns={columns} />;
        </div>
      );
    }
  }
}




export default GetPost;
