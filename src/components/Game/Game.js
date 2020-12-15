import styles from './Door/Door.module.css';
import React from "react";
import Door from "./Door/Door";
import { shuffle, toBool} from "./utils/utils";

export class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isChosen: [false, false, false],
      trueArr: [0,1,2],
      moveConfirmed: false,
      isOpened: [false, false, false]
    }
  }
  componentDidMount() {

    })
  }
  componentWillUnmount() {
    this.state.trueArr = this.trueArr
    }

  handleClick(i) {
  const isChosen = this.state.isChosen.slice().fill(false);
  isChosen[i] = !this.state.isChosen[i];
  this.setState({
    isChosen: isChosen,
  })
}

  confirmAction() {
    const isChosen = this.state.isChosen.slice()

     this.setState({
       moveConfirmed: true,
       isChosen: isChosen,
     })
    this.openFalseDoor();
  }


  openFalseDoor() {
    if (this.state.moveConfirmed) {
     let falseDoorArr = this.state.trueArr.slice();
     for (let i in falseDoorArr) {
       if (!this.state.isChosen[i] && !this.state.isOpened[i] && this.state.trueArr[i]) {
         falseDoorArr[i] = true;
       }
       console.log(falseDoorArr[i])
     }
     this.setState({
       isOpened: falseDoorArr,
       moveConfirmed: false,
     })
     }
    }


  renderDoor(i){
     return (
    <Door
      id={i}
      isTrue={(this.state.trueArr[i]===0)}
      isChosen={this.state.isChosen[i]}
      onClick={() => this.handleClick(i)}
      moveConfirmed={this.state.moveConfirmed}
      isOpened={this.state.isOpened[i]}
     />
     )
  }
      render() {
    return (
      <div>
      <h1 align={"center"}>Hello, game</h1>
      <div className={styles.doorField}>
        <section className={styles.doorField}>
        {this.renderDoor(0)}
        {this.renderDoor(1)}
        {this.renderDoor(2)}
      </section>
        <section>
         Hello
        </section>
      </div>
        <button onClick={() => this.confirmAction()}>Продолжить</button>
      </div>
    )}
}


