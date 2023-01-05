import React, { Component } from "react";

export default class Demo2 extends Component {
  // title={
  //   color: 'yellow',
  //   fontSize: '20px',
  // }

  // constructor(props){
  //   super(props);
  //   this.clicked = this.clicked.bind();
  // }

  clicked() {
    alert("Clicked Class component");
  }

  render() {
    return (
      <div>
        <h1 className="title2">This is {this.props.title} Componant</h1>
        <h1 className="title2">This is {this.props.name} tutorial </h1>
        <button onClick={this.clicked}>CLick me</button>
        <hr />
      </div>
    );
  }
}
