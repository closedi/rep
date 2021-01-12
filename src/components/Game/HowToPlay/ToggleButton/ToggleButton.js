import React from "react";


export function ToggleButton (props) {
  let { name, onClick, autoFocus, className } = {...props};

  return (
    <button autoFocus={autoFocus} className={className} onClick={onClick} >{name}</button>
  )
}
