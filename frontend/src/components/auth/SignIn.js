import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    authError: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
      authError: false
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(
        "http://localhost:8090/api/user/" +
          this.state.email +
          "/" +
          this.state.password
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          authError: false
        });
        this.props.authStatus(true, this.state.email);
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({
          authError: true
        });
      });
  };

  render() {
    const error = this.state.authError ? (
      <p>bad credentials, try again</p>
    ) : null;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text-darker-3">Sign In</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>

            <div className="red-text center"> {error}</div>
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
)(SignIn);
