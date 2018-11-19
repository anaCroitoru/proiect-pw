//import React from "react";
import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";

class SignedInLinks extends Component {
  handleLogOut = e => {
    e.preventDefault();
    this.props.logOut(false);
  };
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
        <li>
          <NavLink onClick={this.handleLogOut} to="/">
            Log out
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/" className="btn btn-floating pink lighten -1">
            NN
          </NavLink>
        </li> */}
      </ul>
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
    logOut: status => {
      dispatch({ type: "LOGG_OUT", status: status });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInLinks);

//export default SignedInLinks;
