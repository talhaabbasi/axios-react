import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import UserForm from "./components/UserForm";

class App extends Component {
  getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    Axios.get(`https://api.github.com/users/${user}`).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <div className="App">
        <h1>HTTP Calls in React</h1>
        <UserForm getUser={this.getUser} />
      </div>
    );
  }
}

export default App;
