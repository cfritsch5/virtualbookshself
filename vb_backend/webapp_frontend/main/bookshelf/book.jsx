import React from 'react';
import Draggable from 'react-draggable';

class Book extends React.Component {
  constructor(props){
    super(props);

    this.printXY = this.printXY.bind(this);
  }
  componentDidMount(){

  }

  printXY(e){
    const x = e.clientX;
    const y = e.clientY;
    console.log(x,y, this.props.book.title);
  }
  render(){
    console.log(this.props);
    // console.log(`render book ${this.key} at`, Date.now());
    return (
      <div>
        <h6>{this.props.book.title}</h6>
        <Draggable>
          <canvas onMouseMove={this.printXY} style={{background: "blue"}} width="100" height="100"></canvas>
        </Draggable>
        <img src={"assets/TheHobbit_cover.jpg"} height="100" width="100"/>
      </div>
    );
  }
}
export default Book;
