import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { loggedIn } = props;
  const { nrOfItems } = props;
  const links = loggedIn ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <img src="/img/books.png" alt="logo" />
        <Link to="/" className="brand-logo">
          BookStore
        </Link>

        {links}

        <Link to="/cart" className="brand-logo" className="right">
          <ul className="right">
            <li>
              <img src="/img/shopping-cart.png" alt="cart" />
            </li>
            <li>{nrOfItems}</li>
          </ul>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    nrOfItems: state.nrOfBooks
  };
};

export default connect(mapStateToProps)(Navbar);
