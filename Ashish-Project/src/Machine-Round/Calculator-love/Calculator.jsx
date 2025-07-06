import React, { useRef, useState } from "react";

function Calculator() {
  const [yourName, setYourName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [result, setResult] = useState("");
  const [calculating, setCalculating] = useState(false);
  const prevCalcs = useRef({});

  const handleCalculation = () => {
    setCalculating(true);
    setTimeout(() => {
      const percentage = Math.floor(Math.random() * 100);
      setResult(percentage);
      setCalculating(false);
      const key = `${yourName} - ${partnerName}`;
      prevCalcs.current[key] = percentage;
    }, 2000);
  };

  const handleClick = () => {
    if (!yourName || !partnerName) {
      alert("Please enter names!!");
      return;
    }
    const key = `${yourName} - ${partnerName}`;
    const existingValue = prevCalcs.current[key];
    if (existingValue) {
      setResult(existingValue);
    } else {
      handleCalculation();
    }
  };

  return (
    <div id="calculator">
      <h2>Love Percentage Calculator</h2>

      <input
        type="text"
        placeholder="enter Your Name"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Your's Partner Name"
        value={partnerName}
        onChange={(e) => setPartnerName(e.target.value)}
      />

      <button onClick={handleClick}>Calculate</button>
      {calculating && <p className="pulsating-text">Loading My Love..</p>}
      {result && !calculating && <h3>{result} %</h3>}
    </div>
  );
}

export default Calculator;
