import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.props.getUser}>
        <input type="text" name="username" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default UserForm;
