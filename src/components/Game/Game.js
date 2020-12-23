import styles from './Door/Door.module.css';
import React from "react";
import Door from "./Door/Door";
import { shuffle } from "./utils/utils";

export class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isChosen: [false, false, false],
      trueArr: shuffle([0,1,2]),
      moveConfirmed: false,
      isOpened: [false, false, false],
      openCount: 0,
      gameResult: 'none',
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.openCount !== prevState.openCount) {
      this.checkWinner();
    }
  }


  handleClick(i) {
  const isChosen = this.state.isChosen.slice().fill(false);
  isChosen[i] = !this.state.isChosen[i];
    const confirmed = function () {
      return (isChosen.includes(true))
    }
  this.setState({
    isChosen: isChosen,
    moveConfirmed: confirmed(),
  })
}

  confirmActionOnKey(e) {
    if (e.key === ' ') {
      this.confirmAction();
    }
  }

  confirmAction() {
    const isChosen = this.state.isChosen.slice()
    const confirmed = function () {
      return (isChosen.includes(true))
    }

     this.setState({
       isChosen: isChosen,
       moveConfirmed: confirmed(),
     })

    this.openFalseDoor();
  }


  openFalseDoor() {
    if (this.state.moveConfirmed) {
    const falseDoorArr = this.state.isOpened.slice();
    const checkFalseDoorArr = (falseDoorArr.includes('open'));
    let count = 0;
      if (!checkFalseDoorArr) {
        for (let i in falseDoorArr) {
          if (!this.state.isChosen[i] && !this.state.trueArr[i]) {
            falseDoorArr[i] = 'open';
            count++;
            break;
          }
        }
      } else {
        for (let i in falseDoorArr) {
          if (!this.state.isChosen[i]) {
            falseDoorArr[i] = 'open';
            count++;
          }
        }
      }

    this.setState({
      isOpened: falseDoorArr,
      openCount: count,
    })}
  }

  checkWinner() {
    const isTrue = this.state.trueArr.slice();
    const isOpened = this.state.isOpened.slice();
    const openCount = this.state.openCount;
    let isChosen = this.state.isChosen.slice();
    let result = this.state.gameResult

    for (let i in isOpened) {
      if (isOpened[i] === 'open' && isTrue[i] === true) {
        result = 'lose';
        break;
      } else if (openCount > 1) {
        result = 'win';
        isOpened[i] = 'open';
      }
    }
      this.setState({
        gameResult: result,
        isOpened: isOpened,
      })
    };

  clearGame() {

    this.setState({
      isChosen: [false, false, false],
      trueArr: shuffle([0,1,2]),
      moveConfirmed: false,
      isOpened: [false, false, false],
      openCount: 0,
      gameResult: 'none',
  })}

  renderDoor(i){
     return (
    <Door
      id={i}
      isTrue={this.state.trueArr[i]}
      isChosen={this.state.isChosen[i]}
      onClick={() => this.handleClick(i)}
      isOpened={this.state.isOpened[i]}
     />
     )
  }


      render() {
    return (
      <div  tabIndex={'0'} onKeyDown={(e) => this.confirmActionOnKey(e)}>
      <h1 align={"center"}>Greetings, stranger. Nice to see you in the Monty Hall door's game.</h1>
        <section className={styles.main}>
        <div className={styles.doorField}>
        {this.renderDoor(0)}
        {this.renderDoor(1)}
        {this.renderDoor(2)}
          <button className={styles.door_button} onClick={() => this.confirmAction()}>Продолжить</button>
          <button onClick={() => this.clearGame()}>Обновить</button>
        </div>

        <div style={{
          marginTop: '20px',
        }}>
          Make your choice and Press the "Continue" button (or Space instead).
        </div>
        </section>

      </div>
    )}
}


