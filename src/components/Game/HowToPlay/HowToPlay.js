import React, { useState } from "react";
import {ToggleButton} from "./ToggleButton/ToggleButton";
import styles from './HowToPlay.module.css';

export function HowToPlay () {


  let [close, setClosed] = useState({closed: false, style: styles.frame});


  function handleClick() {
    setClosed( close = {closed: !close.closed, style: (!close.closed) ? styles.frame_closed : styles.frame})
    }
  function confirmActionOnKey(e) {
    if (e.key === 'Escape') {
      handleClick();
    }
  }



  return (
    <div>
      <ToggleButton
        name={'HowToPlay'}
        className={styles.button_open}
        onClick={handleClick}
      />
    <div tabIndex={'-1'} className={close.style} onKeyDown={e => confirmActionOnKey(e)}>
      <div className={styles.wrapper}>
        <h1>Monty-Hall door's game</h1>
        <h3>How to play</h3>
        <ToggleButton
          name={'Esc'}
          className={styles.button_close}
          autoFocus="autoFocus"
          onClick={handleClick}
        />
        <p>There is one <em>Treasure map</em> behind one of this doors! Another two contains bags, full of trash.<br/>
        You should find this map.</p>
        <div className={styles.map}/>
        <h3>Order of moves </h3>
        <ol className={styles.moveList}>
          <li>Choose one of the doors and press 'Continue'</li>
          <li>Your opponent(computer) make his choice by opening one of the doors with a trash.</li>
          <li>Now you could choose again. Pick the same door or another.</li>
        </ol>
      </div>
    </div>
    </div>
  )
}

