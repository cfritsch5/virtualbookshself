import React from 'react';
import Book from './book';
class BookShelf extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      books: []
    };
    this.logout = this.logout.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  logout(e){
    console.log(e);
    let user = this.props.currentUser;
    this.props.logout({user});
  }

  addBook(book){
    let books = this.state.books;
    let id = books.length;
    this.setState({books: books.concat([<Book key={id}/>])});
  }

  ComponentWillMount(){
    let books = [];
    let id = books.length;
    this.props.books.forEach((book)=>{
      books.push(<Book key={id} data={book}/>);
      id = id + 1;
    });
  }

  render() {
    let user = this.props.currentUser;
    console.log(user);
    let bok = this.state.books;
    return (
      <div>
        <div className="header">
          <h1>BookShelf</h1>
          {bok}
          <button onClick={this.logout}>logout</button>
          <button onClick={this.addBook}>Add Book</button>
        </div>
      </div>
    );
  }
}
export default BookShelf;
