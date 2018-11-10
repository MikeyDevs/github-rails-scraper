import React, { Component } from 'react';
import "./App.css";
import axios from 'axios';

//CREATING A PURE REACT COMPONENT AND SETTING THE INITIAL STATE
class App extends Component {
 constructor() {
   super();
   this.state = {
     issues: [],
     sorting: false,
     sortOrder: "desc"
   }
  this.setLabels = this.setLabels.bind(this);
  this.setSorting = this.setSorting.bind(this);
 }


 // METHOD TO SET LABELS ON THE FETCH CALL TO THE GITHUB API ACCORDING TO USER SELECTION
setLabels(event) {
  const label = event.target.value;
  axios.get(`https://api.github.com/repos/rails/rails/issues?labels=${label}&sort=comments`)
    .then(response => { this.setState({ issues: response.data });
      console.log(this.state.issues)
   })
  .catch(error => console.log(error) )
 }

 //METHOD TO SET WHETHER SORTING IS HAPPENING IN STATE AND WHICH SORTING ORDER
 setSorting (event) {
   if (event.target.value === "asc") {
     this.setState({
       sortOrder: "asc",
       sorting: true
     })
   } else if (event.target.value === "desc") {
     this.setState({
      sortOrder: "desc",
      sorting: true
     })
   }
 }

 //RENDERING BUTTONS & OUTPUT TO THE DOM
  render() {
    
    //CONDITIONAL BLOCKS TO DETERMINE WHAT TO DISPLAY TO THE DOM BASED ON THE STATE OF SORTING BOOLEAN AND SORTING ORDER DESCRIPTION
    let determineSort;
    if (this.state.sorting === false) {
      determineSort = this.state.issues.map( (item) =>  (
        <li key={item.id} id="items">
          <strong>Title: </strong> {item.title}<br/>
          <strong>User: </strong>{item.user.login}<br/>
          <strong># of Comments: </strong>{item.comments}<br/>
          <strong>URL: </strong><a href={item.html_url} target="_blank">{item.html_url}</a><br/>
          <hr />
        </li>))
    } else if (this.state.sorting === true && this.state.sortOrder === "asc") {
      determineSort = this.state.issues.sort((a, b) => (a.comments - b.comments)).map( (item) =>  (
        <li key={item.id} id="items">
          <strong>Title: </strong> {item.title}<br/>
          <strong>User: </strong>{item.user.login}<br/>
          <strong># of Comments: </strong>{item.comments}<br/>
          <strong>URL: </strong><a href={item.html_url} target="_blank">{item.html_url}</a><br/>
          <hr />
        </li>))
    } else if (this.state.sorting === true && this.state.sortOrder === "desc") {
      determineSort = this.state.issues.sort((a, b) => (b.comments - a.comments)).map( (item) =>  (
        <li key={item.id} id="items">
          <strong>Title: </strong> {item.title}<br/>
          <strong>User: </strong>{item.user.login}<br/>
          <strong># of Comments: </strong>{item.comments}<br/>
          <strong>URL: </strong><a href={item.html_url} target="_blank">{item.html_url}</a><br/>
          <hr />
        </li>))
    }

    return (
      <div id="body">
        <h1 id="title">Open Rails Issues</h1>
          <div>
            <button id="actioncable-button" onClick={this.setLabels} value="actioncable">ActionCable</button>
            <button id="actionmailer-button" onClick={this.setLabels} value="actionmailer">ActionMailer</button>
            <button id="actionpack-button" onClick={this.setLabels} value="actionpack">ActionPack</button>
            <button id="actionview-button" onClick={this.setLabels} value="actionview">ActionView</button>
            <button id="activejob-button" onClick={this.setLabels} value="activejob">ActiveJob</button>
          </div>
          <div>
            <button id="activemodel-button" onClick={this.setLabels} value="activemodel">ActiveModel</button>
            <button id="activerecord-button" onClick={this.setLabels} value="activerecord">ActiveRecord</button>
            <button id="activestorage-button" onClick={this.setLabels} value="activestorage">ActiveStorage</button>
            <button id="activesupport-button" onClick={this.setLabels} value="activesupport">ActiveSupport</button>
            <button id="assetpipeline-button" onClick={this.setLabels} value="asset pipeline">Asset Pipeline</button>
          </div>
          <div id="sorting-buttons">
            <button id="sort-ascending-button" onClick={this.setSorting} value="asc">Sort Ascending Comments</button>
            <button id="sort-descending-button" onClick={this.setSorting} value="desc">Sort Descending Comments</button>
          </div>

          {/* MAPPING THE ISSUES STATE AND DISPLAYING TO THE DOM FROM THE CONDITIONAL BLOCKS ABOVE */}
          <ul id="list">
          {determineSort}
        </ul>

      </div>
    );
  }
}

export default App;
