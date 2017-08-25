import React from 'react';

class BookShelf extends React.Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e){
    console.log(e);
    let user = this.props.currentUser;
    this.props.logout({user});
  }

  render() {
    let user = this.props.currentUser;
    console.log(user);
    return (
      <div>
        <h1>BookShelf</h1>
        <button onClick={this.logout}></button>
      </div>
    );
  }
}
export default BookShelf;
