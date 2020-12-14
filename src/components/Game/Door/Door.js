import styles from './Door.module.css';
import React, { useState, useEffect } from "react";

function Door(props) {
  let className = (props.isChosen===true) ? styles.door_chosen : styles.door;

  const [isOpen, setIsOpen] = useState({isOpen: false})

  useEffect(() => {
    open();
  }, [props.moveConfirmed])

  function open () {
    if (props.moveConfirmed && !props.isChosen && !props.isTrue) {
      setIsOpen({isOpen: true})
    }
  }

  let [styleCl, setStyleCl] = useState(styles.door)

  useEffect(() => {
    setStyleCl(styleCl = handleClass)
  },[[props.isChosen, props.isOpen]])

  function handleClass() {
    if (props.isChosen === true) {
     styleCl = styles.door_chosen
    } else if (isOpen.isOpen === true) {
      styleCl = styles.door_opened
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
