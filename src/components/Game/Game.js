import styles from './Door/Door.module.css';
import React, { useState, useEffect } from "react";
import Door from "./Door/Door";
import shuffle, { chose } from "./utils/utils";

function Game() {
    const trueArr = [];
    const number = shuffle([0,1,2]);
      for (let i in number) {
        trueArr[i] = number[i]===0
      }
      console.log(trueArr)

    const [chosen, setChosen] = useState([0,0,0])
    useEffect(() => console.log('init'), [chosen])

    function choseDoor(i, chosen) {
      setChosen(chose(i, chosen))

    }

  function renderDoor(i) {
     return (
    <Door
       // setChosen={() => choseDoor(i, chosen)}
       className={styles.door}
       choseDoor={() => choseDoor(i, chosen)}
       isChosen={chosen[i]}
       isTrue={trueArr[i]}
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
export { Game }


