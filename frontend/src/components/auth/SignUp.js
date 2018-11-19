import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:8090/api/user", {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.authStatus(true, this.state.email);
        this.props.history.push("/");
      });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text-darker-3">Sign Up</h5>
          <br />
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.loggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    authStatus: (status, email) => {
      dispatch({ type: "AUTH_STATUS", status: status, email: email });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
//export default SignUp;
