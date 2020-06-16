import React, { Component } from 'react';
import logo from './logo.svg';
/* import './App.css'; */

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

    const apiURL = '/win_low_root.json'
    const apiURLAll = '/all.json'
    

    /* This uses promises
    fetch(apiURL)
    .then((response) => response.json())
    .then(data => this.setState({ data }))

  } */

  /* Now let's re-write the above with async await

  */

  const response = await fetch(apiURLAll)
  const data = await response.json()
  console.log(data)
  this.setState({data: data, isLoading: false})

}
  
  render(){

    const { data } = this.state;

    const vmsList = data.map((vm, i )=> {

      /* console.log(post) */
      return (
          <tbody key={vm.Name}>
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{vm.Name}</td>
              <td>{vm.DiskPath}</td>
              <td>{vm.freespace}GB</td>
              <td>{vm.capacity}GB</td>
            </tr>
          </tbody>
     
      )

    })


    if(this.state.isLoading) {

      return(
        <div className="container">
          <h2 className="white-text">Loading...</h2>
        </div>
      )
    }

    if(!this.state.data) {
      return (
      <div className="container">
        <h2 className="white-text">No vms found...</h2>
      </div>
      )
    }

    return (
    <div className="container-fluid mt-4">
      <div className="card card-cascade narrower">
        <div className="view view-cascade mdb-color py-2 mx-4 mb-3 d-flex narrower justify-content-between align-items-center z-depth-3">
        <div>
      <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
        <i className="fas fa-th-large mt-0"></i>
      </button>
      <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
        <i className="fas fa-columns mt-0"></i>
      </button>
    </div>
    <a href="/" className="white-text mx-3">VMs WITH LOW C: SPACE</a>
    <div>
      <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
        <i className="fas fa-pencil-alt mt-0"></i>
      </button>
      <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
        <i className="far fa-trash-alt mt-0"></i>
      </button>
      <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
        <i className="fas fa-info-circle mt-0"></i>
      </button>
    </div>
      </div>

      <div className="px-4">

    <div className="table-responsive">
    
      <table className="table table-hover mb-0">

      <thead>
          <tr>
            {/*<th>
              <input className="form-check-input" type="checkbox" id="checkbox">
              <label className="form-check-label" for="checkbox" className="mr-2 label-table"></label></input>
            </th>*/}
            <th className="th-lg">
              <a href="/">#
                <i className="fas fa-sort ml-1"></i>
              </a>
              </th>
            <th className="th-lg">
              <a href="/">Name
                <i className="fas fa-sort ml-1"></i>
              </a>
            </th>
            <th className="th-lg">
              <a href="/">DiskPath
                <i className="fas fa-sort ml-1"></i>
              </a>
            </th>
            <th className="th-lg">
              <a href="/">FreeSpace
                <i className="fas fa-sort ml-1"></i>
              </a>
            </th>
            <th className="th-lg">
              <a href="/">Capacity
                <i className="fas fa-sort ml-1"></i>
              </a>
            </th>
          </tr>
        </thead>
       {vmsList}
     </table>
     </div>
     </div>
    </div>
  </div>
  );
 }

}

/* Data model

Name: this will be our key
DiskPath: this will be my key
capacity:
freespace:

*/

/*
gradient-card-header blue-gradient
*/

export default App;
