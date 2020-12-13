import styles from './Door/Door.module.css';
import React, { useState, useEffect } from "react";
import Door from "./Door/Door";
import shuffle from "./utils/utils";

export function Game() {
    const trueArr = shuffle([0,1,2]);
      for (let i in trueArr) {
        trueArr[i] = trueArr[i]===0
      }

  function renderDoor(i) {
     return (
    <Door
      id={i}
      isTrue={trueArr[i]}
      isOpen={false}
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


