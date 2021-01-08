import React, {useEffect, useState} from "react";
import {DoorField} from "./DoorGame/DoorField";
import {HowToPlay} from "./HowToPlay/HowToPlay";
import styles from "./HowToPlay/HowToPlay.module.css";

function Game () {

  let [countRounds, setCountRounds] = useState(0)
  let resultCounter = () => {setCountRounds(countRounds++)};


  return (
    <div>
      <HowToPlay
      />
      <DoorField
      resultCounter={resultCounter}
      />
    </div>
  )
}

export default Game;
