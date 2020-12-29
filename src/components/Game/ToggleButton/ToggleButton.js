import React, { useEffect } from "react";
import styles from '../HowToPlay/HowToPlay.module.css';


export function ToggleButton (props) {
  let { name, onClick, autoFocus, className } = {...props};

  return (
    <button autoFocus={autoFocus} className={className} onClick={onClick} >{name}</button>
  )
}
