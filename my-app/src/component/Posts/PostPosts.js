import React, { Component } from 'react';
import 'antd/dist/antd.css';

class PostPosts extends Component {
  constructor(props){
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        data: []
    }; 
  }
  
  addPosts(){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
            {
                "title": "hahaha",
                "content": "okkkkkkkk",
                "author": "abc"
            }
        )
    };
    fetch("http://localhost:5000/posts", requestOptions)
      .then(res => res.json())
      .then(
        (responseJson) => {
            console.log(responseJson);
          this.setState({
            isLoaded: true,
         //   data: results
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
    return(
        <div>
            <input></input>
            <button onClick={()=> this.addPosts()}>Add post</button>
        </div>
    )
    
  }
}

export default PostPosts;
