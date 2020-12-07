import './Door.css'
import shuffle from "../../utils/utils";

function Door(props) {
  const { isChosen, number } = props;
  const isTrue = (number === 0) ? true : false;
  console.log(isTrue)


  return (
    <div className="door">
      <img src="svg/closed-door.svg" width="200" height="300" alt="door"></img>
    </div>
  )
}

export default Door;
