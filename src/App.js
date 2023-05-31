import './App.css';
import { useState } from 'react';
import Calculator from "./Components/Calculator";

function App() {
  //
  // const [total, setTotal] = useState("0");
  // // let firstNum = 0;
  // const [firstNum, setFirstNum] = useState(null);
  // // let secondNum = 0;
  // const [secondNum, setSecondNum] = useState(null);
  // // let operation = null;
  // const [operation, setOperation] = useState(null);
  //
  // function clear() {
  //   setTotal("0");
  //   setFirstNum(0);
  //   setSecondNum(0);
  //   setOperation(null);
  // }
  //
  // function zero() {
  //   if (!(total === "0")){
  //     setTotal(total + "0");
  //   }
  // }
  //
  // function pressedNumKey(numPressed) {
  //   if (numPressed < 0 || numPressed > 9){
  //     return;
  //   }
  //   if (!(total === "0")) {
  //     setTotal(total + String(numPressed));
  //   } else if (total === "0"){
  //     setTotal(String(numPressed));
  //   }
  // }
  //
  // function pressedOperator(operator){
  //   setFirstNum(parseFloat(total));
  //   setTotal("0");
  //   setOperation(operator);
  // }
  //
  // function decimal(){
  //   if(!total.contains(".")){
  //     setTotal(total + ".");
  //   }
  // }
  // function compute(){
  //   setSecondNum(parseFloat(total));
  //   switch(operation){
  //     case "+":
  //         setSecondNum(parseFloat(total));
  //         console.log(secondNum);
  //         console.log(setSecondNum(parseFloat(total)));
  //         setTotal(firstNum + secondNum);
  //       break;
  //     case "-":
  //       // setTotal(parseFloat(firstNum) - parseFloat(secondNum));
  //       break;
  //     case "*":
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
      <Calculator/>
    // <div className="App">
    //   <div className="calculator">
    //     <div id="display">{ total }</div>
    //     <button id="clear" onClick={() => clear()}>AC</button>
    //     <button id="zero" onClick={() => zero()}>0</button>
    //     <button id="one" onClick={() => pressedNumKey(1)}>1</button>
    //     <button id="two" onClick={() => pressedNumKey(2)}>2</button>
    //     <button id="three" onClick={() => pressedNumKey(3)}>3</button>
    //     <button id="four" onClick={() => pressedNumKey(4)}>4</button>
    //     <button id="five" onClick={() => pressedNumKey(5)}>5</button>
    //     <button id="six" onClick={() => pressedNumKey(6)}>6</button>
    //     <button id="seven" onClick={() => pressedNumKey(7)}>7</button>
    //     <button id="eight" onClick={() => pressedNumKey(8)}>8</button>
    //     <button id="nine" onClick={() => pressedNumKey(9)}>9</button>
    //     <button id="add" onClick={() => pressedOperator("+")}>+</button>
    //     <button id="subtract" onClick={() => pressedOperator("-")}>-</button>
    //     <button id="multiply" onClick={() => pressedOperator("*")}>*</button>
    //     <button id="divide" onClick={() => pressedOperator("/")}>/</button>
    //     <button id="decimal" onClick={() => decimal()}>.</button>
    //     <button id="equals" onClick={() => compute()}>=</button>
    //   </div>
    // </div>
  );
}

export default App;
