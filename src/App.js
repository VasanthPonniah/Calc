import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/button';
import Display from './components/display';

const firstRow = [7, 8, 9,]
const secondRow = [4, 5, 6,]
const thirdRow = [1, 2, 3,]

function App() {
  const [prevNumber, setPrevNumber] = useState("");
  const [currNumber, setCurrNumber] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);


  const keyHandler = (e) => {
    if (currNumber.includes(".") && e.target.value === ".") return;
    currNumber ? setCurrNumber((pre) => pre + e.target.value) : setCurrNumber(e.target.value);
  };

  const operatorHandler = (e) => {
    setOperator(e.target.value);
    if (currNumber === "") return;
    if (prevNumber !== "") {
      calculationHandler();
    } else {
      setPrevNumber(currNumber);
      setCurrNumber("");
    }
  };

  const calculationHandler = () => {
    let updatedResult;
    if (operator === "/") {
      const divide = (parseFloat(prevNumber) / parseFloat(currNumber))
      String(divide).length > 6 ? updatedResult = String(divide.toFixed(2)) : updatedResult = String(divide)
    }

    if (operator === "+") {
      updatedResult = String(parseFloat(prevNumber) + parseFloat(currNumber));
    }

    if (operator === "*") {
      const mult = parseFloat(prevNumber) * parseFloat(currNumber)
      mult > 999_999_999 ? updatedResult = updatedResult = String(mult.toExponential(5)) : updatedResult = String(mult);
    }
    if (operator === "-")
      updatedResult = String(parseFloat(prevNumber) - parseFloat(currNumber));
    setInput("");
    setPrevNumber(updatedResult)
    setCurrNumber("");

  }

  const reset = () => {
    setPrevNumber("");
    setCurrNumber("");
    setInput("");
  };

  useEffect(() => {
    setInput(currNumber);
  }, [currNumber]);


  return (
    <div className="App">
      <div className='container'>
        {(input !== "" || input === "0") ? (
          <Display
            value={input}
          />
        ) : (
          <Display
            value={prevNumber}
          />
        )}
        <div>
          <Button value="AC" handleClick={reset} style={{ width: "62%" }} />
        </div>
        <div>
          {firstRow.map(key => <Button value={key} key={key} handleClick={keyHandler} />)}
          <Button value="*" handleClick={operatorHandler} />
        </div>
        <div>
          {secondRow.map(key => <Button value={key} key={key} handleClick={keyHandler} />)}
          <Button value="/" handleClick={operatorHandler} />
        </div>
        <div>
          {thirdRow.map(key => <Button value={key} key={key} handleClick={keyHandler} />)}
          <Button value="+" handleClick={operatorHandler} />
        </div>
        <Button value={"0"} handleClick={keyHandler} />
        <Button value={"."} handleClick={keyHandler} />
        <Button value={"="} handleClick={calculationHandler} />
        <Button value={"-"} handleClick={operatorHandler} />
      </div>
    </div>
  );

}
export default App;