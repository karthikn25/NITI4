import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const displayValues = result.concat(e.target.value);
    setResult(displayValues);
  };

  const handleClear = () => {
    setResult("");
  };
  const handleBackSpace = () => {
    setResult(result.slice(0, -1));
  };
  const handleCalculation = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className="App">
      <div className="container">
        <h2>Calculator</h2>
        <div className="row" id="calculator-box">
          <div className="row">
            <div className="col" id="display">
              <input value={result} type="text" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                style={{ width: "20%" }}
                onClick={handleClear}
                id="imp-operation"
              >
                AC
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"%"}
                id="imp-operation"
              >
                %
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleBackSpace}
                id="imp-operation"
              >
                C
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"÷"}
                id="imp-operation"
              >
                &divide;
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"7"}
              >
                7
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"8"}
              >
                8
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"9"}
              >
                9
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"×"}
                id="imp-operation"
              >
                &times;
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"4"}
              >
                4
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"5"}
              >
                5
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"6"}
              >
                6
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"-"}
                id="imp-operation"
              >
                -
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"1"}
              >
                1
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"2"}
              >
                2
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"3"}
              >
                3
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"+"}
                id="imp-operation"
              >
                +
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"00"}
              >
                00
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"0"}
              >
                0
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleClick}
                value={"."}
              >
                .
              </button>
              <button
                style={{ width: "20%" }}
                onClick={handleCalculation}
                id="equal-operation"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
