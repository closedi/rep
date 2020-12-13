import styles from './Door/Door.module.css';
import React, { useState, useEffect } from "react";
import Door from "./Door/Door";
import shuffle from "./utils/utils";

export function Game() {
    const trueArr = shuffle([0,1,2]);
      for (let i in trueArr) {
        trueArr[i] = trueArr[i]===0
      }
  let stateArr = [0,0,0];
  let [isChosen, setChosen] = useState(0)

  // const squares = this.state.squares.slice();
  // squares[i] = this.state.xIsNext ? 'X' : 'O';
  // this.setState({
  //   squares: squares,
  //   xIsNext: !this.state.xIsNext,
  // });

  function renderDoor(i) {
     return (
    <Door
      id={i}
      isTrue={trueArr[i]}
      isOpen={false}
      isChosen={stateArr[i]}
     />
     )
  }
    return (
      <div>
      <h1 align={"center"}>Hello, game</h1>
      <div className={styles.doorField}>
        {renderDoor(0)}
        {renderDoor(1)}
        {renderDoor(2)}
      </div>
      </div>
    )
}


