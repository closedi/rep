import styles from './Door/Door.module.css';
import React from "react";
import Door from "./Door/Door";
import Statistics from "../Statistics/Statictics";
import { shuffle } from "../../utils/utils";

export class DoorField extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isChosen: [false, false, false],
      trueArr: shuffle([0,1,2]),
      moveConfirmed: false,
      isOpened: [false, false, false],
      openCount: 0,
      roundResult: 'none',
      resultsCount: [],
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.openCount !== prevState.openCount) {
      this.checkWinner();
    }
  }

  // Controls

  handleClick(i) {
  const isChosen = this.state.isChosen.slice().fill(false);
  isChosen[i] = !this.state.isChosen[i];
  const confirmed = isChosen.includes(true)

  this.setState({
    isChosen: isChosen,
    moveConfirmed: confirmed,
  })}


  confirmActionOnKey(e) {
    if (e.key === ' ') {
      this.confirmAction();
    }
  }

  confirmAction() {
    if (this.state.roundResult === 'none') {
    this.openFalseDoor();
  } else {
      this.clearRound();
    }}


  openFalseDoor() {
    if (this.state.moveConfirmed) {
    const falseDoorArr = this.state.isOpened.slice();
    const checkFalseDoorArr = falseDoorArr.includes('open');
    let count = 0;
      if (!checkFalseDoorArr) {
        for (let i in falseDoorArr) {
          if (!this.state.isChosen[i] && !this.state.trueArr[i] && count < 2) {
            falseDoorArr[i] = 'open';
            count++;
            break;
          }
        }
      } else {
        for (let i in falseDoorArr) {
          if (!this.state.isChosen[i] && count < 2) {
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
    let isOpened = this.state.isOpened.slice();
    const openCount = this.state.openCount;
    let isChosen = this.state.isChosen.slice();
    let result = this.state.roundResult

    for (let i in isOpened) {
      if (isOpened[i] === 'open' && isTrue[i] === true) {
        result = 'lose';
        break;
      } else if (openCount > 1) {
        result = 'win';
        isChosen = Array(3).fill(false);
      }
    }

    if (openCount > 1) {
      isOpened = Array(3).fill('open');
    }
      this.setState({
        roundResult: result,
        isOpened: isOpened,
        isChosen: isChosen,
      })
    };

  clearRound() {
    let result = this.state.roundResult;
    const count = this.state.resultsCount;
    count.push(result);

    this.setState({
      isChosen: [false, false, false],
      trueArr: shuffle([0,1,2]),
      moveConfirmed: false,
      isOpened: [false, false, false],
      openCount: 0,
      roundResult: 'none',
      resultsCount: count,
  })}

  resetState() {
    this.setState({
      isChosen: [false, false, false],
      trueArr: shuffle([0,1,2]),
      moveConfirmed: false,
      isOpened: [false, false, false],
      openCount: 0,
      roundResult: 'none',
      resultsCount: [],

    })}

  renderDoor(i){
     return (
    <Door
      id={i}
      isTrue={this.state.trueArr[i]}
      isChosen={this.state.isChosen[i]}
      onClick={() => this.handleClick(i)}
      isOpened={this.state.isOpened[i]}
      gameResult={this.state.roundResult}
     />
     )
  }

  continueButton () {
    let result;
    switch (this.state.openCount) {
      case 0: result = 'Choose a door';
      break;
      case 1: result = 'Stick or switch';
      break;
      default: break;
    }
    return result;
  }



      render() {
    return (
      <div tabIndex={'-1'} onKeyDown={(e) => this.confirmActionOnKey(e)}>
      <h1 align={"center"}>Round {this.state.resultsCount.length + 1} {(this.state.roundResult === 'none') ? '' : this.state.roundResult.toUpperCase()}</h1>
        <section className={styles.main}>
        <div className={styles.doorField}>
        {this.renderDoor(0)}
        {this.renderDoor(1)}
        {this.renderDoor(2)}
          <button
            className={styles.doorButton}
            onClick={() => this.confirmAction()}>{this.state.roundResult !== 'none' ? 'Next round' : this.continueButton()}
          </button>
          <button onClick={() => this.clearRound()}>Skip round</button>
          <button onClick={() => this.resetState()}>Clear game</button>
        </div>
          <div style={{
            margin: '20px',
            textAlign: "center",
            height: "40px",
          }}>Make your choice and Press the "Choose a door" button (or "Space" instead).
            <br/>
            <a href={"https://ru.wikipedia.org/wiki/Парадокс_Монти_Холла"} target={"_blank"} rel={"noreferrer"}>{this.state.resultsCount.length > 4 ? 'For more info check the Wiki page' : ''}</a>
          </div>
        </section>
        <Statistics
          result={this.state.resultsCount}
        />
      </div>
    )}
}


