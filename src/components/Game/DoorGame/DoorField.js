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
      autoplay: 0,
      // choiceIsChanged: {door: 0, changed: false},
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
    const confirmed = function () {
      return (isChosen.includes(true))
    }

  this.setState({
    isChosen: isChosen,
    moveConfirmed: confirmed(),
  })}

  autoplayRounds(e) {
    let count = Array.from(this.state.autoplay)
    count.push(e.nativeEvent.data)
    let amount = +(count.join(''))

    let validate = (amount) => {
      switch (amount) {
        case (isNaN(amount)): count = 0;
        break;
        case (amount <= 0): count = 0;
        break;
      }}

      validate(amount);


    this.setState({
      autoplay: count,
    })
    console.log(e)
  }


  confirmActionOnKey(e) {
    if (e.key === ' ') {
      this.confirmAction();
    }
  }

  confirmAction() {
    if (this.state.roundResult === 'none') {
    const isChosen = this.state.isChosen.slice()
    const confirmed = function () {
      return (isChosen.includes(true))
    }

     this.setState({
       isChosen: isChosen,
       moveConfirmed: confirmed(),
     })

    this.openFalseDoor();
  } else {
      this.clearRound();
    }}


  openFalseDoor() {
    if (this.state.moveConfirmed) {
    const falseDoorArr = this.state.isOpened.slice();
    const checkFalseDoorArr = (falseDoorArr.includes('open'));
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
      choiceIsChanged: false,

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


      render() {
    return (
      <div tabIndex={'-1'} onKeyDown={(e) => this.confirmActionOnKey(e)}>
      <h1 align={"center"}>Round {this.state.resultsCount.length + 1} {(this.state.roundResult === 'none') ? '' : this.state.roundResult.toUpperCase()}</h1>
        <section className={styles.main}>
        <div className={styles.doorField}>
          <Statistics
            result={this.state.resultsCount}
          />
        {this.renderDoor(0)}
        {this.renderDoor(1)}
        {this.renderDoor(2)}
          <button className={styles.doorButton} onClick={() => this.confirmAction()}>{this.state.roundResult !== 'none' ? 'Next round' : 'Continue'}</button>
          <button onClick={() => this.clearRound()}>Skip round</button>
          <button onClick={() => this.resetState()}>Clear game</button>
          <input
            id={"auto-count"}
            type={"number"}
            min={"1"}
            max={"100"}
            placeholder={"Rounds to auto-play (1-100)"}
            onChange={event => this.autoplayRounds(event)}>
          </input>
          <button id ={"auto-submit"} type={"submit"}>Отправить</button>
        </div>
          <div style={{
            margin: '20px',
            textAlign: "center",
          }}> Make your choice and Press the "Continue" button (or "Space" instead).
          </div>
        </section>
      </div>
    )}
}


