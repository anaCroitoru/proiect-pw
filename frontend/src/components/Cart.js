import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Cart extends Component {
  state = {
    books: [],
    error: null
  };

  handleDelete = bookId => {
    const { books } = this.props;
    this.props.removeBook(
      books.filter(book => {
        if (book.id === bookId) return false;
        return true;
      })
    );
    this.props.history.push("/cart");
  };

  handleOrder = () => {
    const { loggedIn } = this.props;
    if (loggedIn === false) {
      this.setState({
        error: "Please login or signup to complete the order!"
      });
    } else {
      const { books } = this.props;

      let bookNames = " ";
      let price = 0;
      books.map(element => {
        price += element.price;
      });
      const { mail } = this.props;
      console.log(this.props);
      console.log(mail);

      axios
        .post("http://localhost:8090/api/order", {
          email: mail,
          price: price
        })
        .then(res => {
          this.props.history.push("/orders");
        });
      this.props.removeAll();
    }
  };

  getBooks = props => {};

  render() {
    // const books = [];
    // console.log(this.props);
    const { books } = this.props;
    const bookList = books.length ? (
      books.map(book => {
        return (
          <div className="post card" key={book.id}>
            <div className="card-content">
              <span className="card-title">{book.title}</span>
              <p>Price :{book.price}lei</p>
              <p>Author: {book.author}</p>
              <p>{book.description}</p>

              <button
                className="btn pink lighten-1 z-depth-0"
                onClick={() => this.handleDelete(book.id)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No items</div>
    );

    return (
      <div className="container">
        <p>Shopping Cart</p>
        {bookList}
        <button
          className="btn pink lighten-1 z-depth-0"
          onClick={this.handleOrder}
        >
          Place Order
        </button>
        <div className="red-text center"> {this.state.error}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    loggedIn: state.loggedIn,
    mail: state.mail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeBook: book => {
      dispatch({ type: "REMOVE_BOOK", book: book });
    },
    removeAll: () => {
      dispatch({ type: "REMOVE_ALL" });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

//export default Home;
