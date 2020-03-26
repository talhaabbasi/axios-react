import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import UserForm from "./components/UserForm";

class App extends Component {
  state = {
    repos: null
  };
  getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      Axios.get(`https://api.github.com/users/${user}`).then(res => {
        if (res) {
          const repos = res.data.public_repos;
          this.setState({ repos });
        }
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>HTTP Calls in React</h1>
        <UserForm getUser={this.getUser} repos={this.state.repos} />
        {this.state.repos ? (
          <p>Number of repos : {this.state.repos}</p>
        ) : (
          <p>Please enter a username</p>
        )}
      </div>
    );
  }
}

export default App;
