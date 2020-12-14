import styles from './Door/Door.module.css';
import React from "react";
import Door from "./Door/Door";
import shuffle from "./utils/utils";

export class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isChosen: [false, false, false],
      trueArr: shuffle([0,1,2]),
      moveConfirmed: false,
      isOpened: [false, false, false]
    }
  }
  componentDidMount() {
    this.trueArr = shuffle([0, 1, 2])
  }
  componentWillUnmount() {
    this.state.trueArr = this.trueArr;
    for (let i in this.trueArr) {
      this.trueArr[i] = (this.trueArr[i] === 0)
    }
  }

  handleClick(i) {
  const isChosen = this.state.isChosen.slice().fill(false);
  isChosen[i] = !this.state.isChosen[i];
  this.setState({
    isChosen: isChosen,
  })
}

  confirmAction() {
     this.setState({
       moveConfirmed: true,
     })
  }

//
//   openFalseDoor() {
//     if (this.state.moveConfirmed) {
//      const falseDoorArr = this.trueArr.filter((item => item > 0));
//      for (let item in falseDoorArr) {
//       if (!this.state.isChosen[item]) {
//
//       }
//      }
//      console.log(this.state.isChosen)
//      console.log(falseDoorArr)
//     }
// }

  renderDoor(i){
     return (
    <Door
      id={i}
      isTrue={(this.state.trueArr[i]===0)}
      isChosen={this.state.isChosen[i]}
      onClick={() => this.handleClick(i)}
      moveConfirmed={this.state.moveConfirmed}
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


