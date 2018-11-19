const initState = {
  loggedIn: false,
  mail: null,
  books: [],
  nrOfBooks: 0
};

const rootReducer = (state = initState, action) => {
  if (action.type === "AUTH_STATUS") {
    return {
      ...state,
      loggedIn: true,
      mail: action.email
    };
  }
  if (action.type === "LOGG_OUT") {
    return {
      ...state,
      loggedIn: false,
      mail: null
    };
  }
  if (action.type === "ADD_BOOK") {
    console.log(action.book);
    let books2 = [...state.books, ...action.book];
    let nr = state.nrOfBooks;
    return {
      ...state,
      books: books2,
      nrOfBooks: nr + 1
    };
  }

  if (action.type === "REMOVE_BOOK") {
    console.log(action.book);
    //let books2 = [...state.books, ...action.book];
    let nr = state.nrOfBooks;

    return {
      ...state,
      books: action.book,
      nrOfBooks: nr - 1
    };
  }
  if (action.type === "REMOVE_ALL") {
    console.log(action.book);
    //let books2 = [...state.books, ...action.book];
    let nr = state.nrOfBooks;

    return {
      ...state,
      books: [],
      nrOfBooks: 0
    };
  }

  return state;
};

export default rootReducer;
