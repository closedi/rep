import shuffle from "../utils/utils";
import Door from "./Door/Door";

function App() {
  const array = shuffle([0,1,2]);
  return (
    <div className="App">
    <h1 align="center">Welcome to the Monty-Hall doors game</h1>
      <div className="door-field">
      <Door
        isChosen="false"
        number ={array[0]}
      />
      <Door
          isChosen="false"
          number ={array[1]}
      />

      <Door
        isChosen="false"
        number ={array[2]}
      />
      </div>
    </div>
  )
}
export default App;
