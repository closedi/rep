import styles from './Door.module.css';
import React from "react";

function Door(props) {
  console.log(props)
return(
    <div className={props.className} /*isChosen={}*/>
      <button onClick={() => props.choseDoor()}>Выбрать дверь</button>
    </div>
  )
}

export default Door;
