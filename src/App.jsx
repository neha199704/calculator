import "./App.css";
import Display from "./components/Display";
import Btn from "./components/Btn";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (Event) => {
    if (Event.target.innerText === "c") {
      setCalVal("");
    } else if (Event.target.innerText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + Event.target.innerText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className="App">
      <h1 className="Heading">Calculator</h1>
      <Display className="Display" displayValue={calVal}></Display>

      <Btn className="Btn" onButtonClick={onButtonClick}></Btn>
    </div>
  );
}

export default App;
