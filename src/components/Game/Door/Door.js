import styles from './Door.module.css';
import React, { useState, useEffect } from "react";

function Door(props) {
  console.log(props)

  let [isChosen, setChosen] = useState(false)
  function chose() {
    setChosen(isChosen = !isChosen)
    console.log(isChosen)
  }

  const className = (isChosen===true) ? styles.door_chosen : styles.door


return(
    <div className={className} onClick={chose} align={"center"}>
      Дверь {props.id+1}
    </div>
  )
}

export default Door;
