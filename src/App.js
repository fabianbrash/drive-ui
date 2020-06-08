import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bulma.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  /* To use async and await we must make this function asynchronous

  */


  async componentDidMount() {

    const apiURL = 'https://jsonplaceholder.typicode.com/posts'
    

    /* This uses promises
    fetch(apiURL)
    .then((response) => response.json())
    .then(data => this.setState({ data }))

  } */

  /* Now let's re-write the above with async await

  */

  const response = await fetch(apiURL)
  const data = await response.json()
  console.log(data)
  this.setState({data: data, isLoading: false})

}
  
  render(){

    const { data } = this.state;

    const postsList = data.map(post => {

      /* console.log(post) */
      return (
        <div key={post.id}>
          <article className="message is-link is-medium">
            <div className="message-header">
              <p>{post.title}</p>
            </div>
            <div className="message-body">
              {post.body}
            </div>
          </article>
          <span></span>

        </div>
     
      )

    })


    if(this.state.isLoading) {

      return(
        <div className="container">
          <h2 className="title is-2 has-text-centered">Loading...</h2>
        </div>
      )
    }

    if(!this.state.data) {
      return (
      <div className="container">
        <h2 className="title is-2 has-text-centered">No posts found...</h2>
      </div>
      )
    }

    return (
    <div className="container is-fluid">
     <div className="container">
       {postsList}
     </div>
    </div>
  );
 }

}

/* Data model

userId: not unique
id: this will be my key
title:
body:

*/

export default App;
