import styles from './Door.module.css';

import React, { useState, useEffect } from "react";

function Door(props) {
  // const [isOpen, setIsOpen] = useState({isOpen: false})
  //
  // useEffect(() => {
  //   open();
  // }, [props.moveConfirmed])
  //
  // function open () {
  //   if (props.moveConfirmed && !props.isChosen && !props.isTrue) {
  //     setIsOpen({isOpen: true})
  //   }
  // }

  let [styleCl, setStyleCl] = useState(styles.door)

  useEffect(() => {
    setStyleCl(styleCl = handleClass())
  },[[props.isChosen, props.isOpened]])

  function handleClass() {
    if (props.isChosen === true) {
     styleCl = styles.door_chosen
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
