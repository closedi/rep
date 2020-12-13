import styles from './Door.module.css';
import React, { useState, useEffect } from "react";

function Door(props) {

  const className = (props.isChosen===true) ? styles.door_chosen : styles.door

return(
    <div className={className} onClick={props.onClick} align={"center"}>
      Дверь {props.id+1}
    </div>
  )
}

export default Door;
