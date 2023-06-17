import React, {useState} from 'react';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            total: "0",
            firstNum: null,
            secondNum: null,
            operation: null,
        };
    }

    // const [total, setTotal] = useState("0");
    // // let firstNum = 0;
    // const [firstNum, setFirstNum] = useState(null);
    // // let secondNum = 0;
    // const [secondNum, setSecondNum] = useState(null);
    // // let operation = null;
    // const [operation, setOperation] = useState(null);

    clear() {
        this.setState({total: "0"});
        // this.state.total = "0";
        this.setState({firstNum: 0});
        this.setState({secondNum: 0});
        this.setState({operation:null});
    }

    zero() {
        if (!(this.state.total === "0")){
            this.setState({total:this.state.total + "0"});
            // setTotal(total + "0");
        }
    }

    pressedNumKey(numPressed) {
        if (numPressed < 0 || numPressed > 9){
            return;
        }
        if (!(this.state.total === "0")) {
            this.setState({total:this.state.total + String(numPressed)});
            // console.log(this.state.operation);
            // if (!this.state.operation === null){
            //     console.log(this.state.operation);
            //     this.setState({secondNum:this.state.secondNum + String(numPressed)});
            // }
            // setTotal(total + String(numPressed));
        } else if (this.state.total === "0"){
            this.setState({total: String(numPressed)});
            // console.log(this.state.operation);
            // if (!this.state.operation === null){
            //     console.log(this.state.operation);
            //     this.setState({secondNum: String(numPressed)});
            // }
            // setTotal(String(numPressed));
        }
    }

    pressedOperator(operator){
        if (operator === "-" && this.state.total === "0" && !this.state.total.includes("-")){
                this.setState({total: "-"});
        } else {
            this.setState({firstNum: parseFloat(this.state.total)});
            this.setState({total: "0"});
            this.setState({operation: operator});
        }
        // setFirstNum(parseFloat(total));
        // setTotal("0");
        // setOperation(operator);
    }

    decimal(){
        // make sure the total is a string before using includes()
        this.state.total = this.state.total + "";
        if(!this.state.total.includes(".")){
            this.setState({total: this.state.total + "."});
            // setTotal(total + ".");
        }
    }
    handleKeyEvent(e){
        switch(e.key){
            case "a":
                this.clear();
                break;
            case "c":
                this.clear();
                break;
            case "0":
                this.zero();
                break;
            case "1":
                this.pressedNumKey(1);
                break;
            case "2":
                this.pressedNumKey(2);
                break;
            case "3":
                this.pressedNumKey(3);
                break;
            case "4":
                this.pressedNumKey(4);
                break;
            case "5":
                this.pressedNumKey(5);
                break;
            case "6":
                this.pressedNumKey(6);
                break;
            case "7":
                this.pressedNumKey(7);
                break;
            case "8":
                this.pressedNumKey(8);
                break;
            case "9":
                this.pressedNumKey(9);
                break;
            case "+":
                this.pressedOperator("+");
                break;
            case "/":
                this.pressedOperator("/");
                break;
            case "*":
                this.pressedOperator("*");
                break;
            case "-":
                this.pressedOperator("-");
                break;
            case ".":
                this.decimal();
                break;
            case "=":
                this.compute();
                break;
            default: break;
        }
    }
//TODO: missing second num
    compute(){
        switch(this.state.operation){
            case "+":
                this.setState({total: Math.round((this.state.firstNum + parseFloat(this.state.total))*100)/100});
                this.setState({firstNum: 0,
                secondNum: 0,
                operation: null});
                break;
            case "-":
                this.setState({total: Math.round((this.state.firstNum - parseFloat(this.state.total))*100)/100});
                this.setState({firstNum: 0,
                    secondNum: 0,
                    operation: null});
                break;
            case "*":
                this.setState({total: Math.round((this.state.firstNum * parseFloat(this.state.total))*100)/100});
                this.setState({firstNum: 0,
                    secondNum: 0,
                    operation: null});
                break;
            case "/":
                this.setState({total: Math.round((this.state.firstNum / parseFloat(this.state.total))*100)/100});
                this.setState({firstNum: 0,
                    secondNum: 0,
                    operation: null});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="App" onKeyDown={(e) => this.handleKeyEvent(e)}>
                <div className="calculator">
                    <div id="display">{ this.state.total }</div>
                    <div id="buttons">
                    <button id="clear" onClick={() => this.clear()}>AC</button>
                    <button id="zero" onClick={() => this.zero()}>0</button>
                    <button id="one" onClick={() => this.pressedNumKey(1)}>1</button>
                    <button id="two" onClick={() => this.pressedNumKey(2)}>2</button>
                    <button id="three" onClick={() => this.pressedNumKey(3)}>3</button>
                    <button id="four" onClick={() => this.pressedNumKey(4)}>4</button>
                    <button id="five" onClick={() => this.pressedNumKey(5)}>5</button>
                    <button id="six" onClick={() => this.pressedNumKey(6)}>6</button>
                    <button id="seven" onClick={() => this.pressedNumKey(7)}>7</button>
                    <button id="eight" onClick={() => this.pressedNumKey(8)}>8</button>
                    <button id="nine" onClick={() => this.pressedNumKey(9)}>9</button>
                    <button id="add" onClick={() => this.pressedOperator("+")}>+</button>
                    <button id="subtract" onClick={() => this.pressedOperator("-")}>-</button>
                    <button id="multiply" onClick={() => this.pressedOperator("*")}>*</button>
                    <button id="divide" onClick={() => this.pressedOperator("/")}>/</button>
                    <button id="decimal" onClick={() => this.decimal()}>.</button>
                    <button id="equals" onClick={() => this.compute()}>=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;