import styles from './Door/Door.module.css';
import React, { useState, useEffect } from "react";
import Door from "./Door/Door";
import shuffle from "./utils/utils";

export class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isChosen: [false,false,false],
      trueArr: shuffle([0,1,2]),
    }
  }


  handleClick(i) {
  const isChosen = this.state.isChosen.slice().fill(false);
  isChosen[i] = !this.state.isChosen[i];
  this.setState({
    isChosen: isChosen,
    trueArr: shuffle([0,1,2]),
  })
    console.log(isChosen)
}



  renderDoor(i){
     return (
    <Door
      id={i}
      isTrue={this.state.trueArr[i]}
      isChosen={this.state.isChosen[i]}
      onClick={() => this.handleClick(i)}
     />
     )
  }
      render() {
    return (
      <div>
      <h1 align={"center"}>Hello, game</h1>
      <div className={styles.doorField}>
        {this.renderDoor(0)}
        {this.renderDoor(1)}
        {this.renderDoor(2)}
      </div>
      </div>
    )
}
      }


