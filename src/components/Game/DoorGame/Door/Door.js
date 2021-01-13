import styles from './Door.module.css';
import React, { useState, useEffect } from "react";

function Door(props) {

  const {
  id,
  isTrue,
  isChosen,
  onClick,
  isOpened,
  gameResult } = props;


  let [styleCl, setStyleCl] = useState(styles.door)

  useEffect(() => {
    setStyleCl(styleCl = handleClass())
  },[[isChosen, isOpened]])


  function handleClass() {
    if (isChosen === true && gameResult === 'none') {
     styleCl = styles.door_chosen
    } else if (isChosen === true && gameResult !== 'none') {
        styleCl = (isTrue) ? styles.door_opened_good : styles.door_opened_bad
    } else if (isOpened === 'open' && isTrue) {
      styleCl = styles.door_opened_good
    } else if (isOpened === 'open' && !isTrue) {
      styleCl = styles.door_opened_bad
    } else styleCl = styles.door
    return styleCl;
  }


return(
    <div className={styleCl} onClick={onClick}>
      Door {id+1}
    </div>
  )
}

export default Door;
