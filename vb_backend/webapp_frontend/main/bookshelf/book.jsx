import React from 'react';

class Book extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     key: this.props.key
  //   };
  // }
  render(){
    console.log(`render book ${this.key} at`, Date.now());
    return (
      <div>
        <h6>book {this.key}</h6>
        <canvas style={{background: "red"}} width="100" height="100"></canvas>
      </div>
    );
  }
}
export default Book;
