import React, { Component } from 'react';
import 'antd/dist/antd.css';

class PostPosts extends Component {
  constructor(props){
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        data: [],
        request:{
          title : String,
          content: String,
          author: String
        }
    }; 
  }
  
  handleSubmitForm(event) {
    alert("Full Name: " + this.state.request.title);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
          {
              "title": this.state.request.title,
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
    event.preventDefault();
  }  

  handleChange(event) {
    var value = event.target.value;
    this.setState(prevState => ({
      request:{
        //...prevState.request,
        title: value
      }
    }));
  }
  
  render(){
    return(
      <form onSubmit={event => this.handleSubmitForm(event)}>
      <label>
        Full Name:
        <input
          type="text"
        //  value={this.state.request.title}
          onChange={event => this.handleChange(event)}
        />
        </label>
        <input type="submit" value="Submit" />      
      </form>
    )
    
  }
}

export default PostPosts;
