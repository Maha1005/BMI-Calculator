import { useState } from "react";
import backImg from "./assets/diet.jpeg";
import "./App.css";

function App() {
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const clear = () => {
    setStatus("none");
    setHeight(0);
    setValue(0);
    setWeight(0);
  };

  const calculateBMI = () => {
    setError("");
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setValue(bmi);
      if (bmi < 18.5) {
        setStatus("Underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setStatus("Normal");
      } else if (bmi >= 25 && bmi <= 29) {
        setStatus("Overweight");
      } else {
        setStatus("Obese");
      }
    } else {
      setError("Please enter a valid weight or height");
      clear();
    }
  };
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [value, setValue] = useState(0);
  const [status, setStatus] = useState("none");
  const [error, setError] = useState("");
  return (
    <>
      <div className="container">
        <img src={backImg}></img>
        <div className="inner-container">
          <h4>
            <b>BMI CALCULATOR</b>
          </h4>
          <p className="errorCal">{error}</p>
          <label>Height(cm):</label>
          <input type="number" value={height} onChange={handleHeight}></input>
          <label>Weight(kg):</label>
          <input type="number" value={weight} onChange={handleWeight}></input>
          <div className="buttons">
            <button onClick={calculateBMI}>Calculate BMI</button>
            <button onClick={clear}>Clear</button>
          </div>

          <div className="result">
            <p> Your BMI is : {value}</p>
            <span>Status : {status}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
