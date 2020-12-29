import styles from './Door.module.css';

import React, { useState, useEffect } from "react";

function Door(props) {

  let [styleCl, setStyleCl] = useState(styles.door)

  useEffect(() => {
    setStyleCl(styleCl = handleClass())
  },[[props.isChosen, props.isOpened]])



  function handleClass() {
    if (props.isChosen === true && props.gameResult === 'none') {
     styleCl = styles.door_chosen
    } else if (props.isChosen === true && props.gameResult !== 'none') {
        styleCl = (props.isTrue) ? styles.door_opened_good : styles.door_opened_bad
    } else if (props.isOpened === 'open' && props.isTrue) {
      styleCl = styles.door_opened_good
    } else if (props.isOpened === 'open' && !props.isTrue) {
      styleCl = styles.door_opened_bad
    } else styleCl = styles.door
    return styleCl;
  }



return(
    <div className={styleCl} onClick={props.onClick}>
      Дверь {props.id+1}
    </div>
  )
}

export default Door;
