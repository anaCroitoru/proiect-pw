import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios.get("http://localhost:8090/api/book").then(res => {
      //console.log(res);
      this.setState({
        books: res.data
      });
    });
  }

  handleAdd = bookId => {
    //console.log(bookId);
    this.props.addBook(
      this.state.books.filter(book => {
        if (book.id === bookId) return true;
        return false;
      })
    );

    //this.props.history.push("/");
  };

  render() {
    const { books } = this.state;
    const bookList = books.length ? (
      books.map(book => {
        return (
          <div className="post card" key={book.id}>
            <div className="card-content">
              <span className="card-title">{book.title}</span>
              <p>
                <b>Price: </b>
                {book.price}lei
              </p>
              <p>
                <b>Author: </b> {book.author}
              </p>
              <p>
                <i>{book.description}</i>
              </p>

              <button
                className="btn pink lighten-1 z-depth-0"
                onClick={() => this.handleAdd(book.id)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">Loading</div>
    );
    return (
      <div className="container">
        <h1>Available books:</h1>
        {bookList}
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
    addBook: book => {
      dispatch({ type: "ADD_BOOK", book: book });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

//export default Home;
