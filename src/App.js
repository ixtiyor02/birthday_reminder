import React, { useState } from "react";
import data from "./data";
import "./style.css";

function App() {
  const [value, setValue] = useState([...data]);

  return (
    <div className="App">
      <div className="app-cont">
        <h1>5 birthdays today</h1>
        {value.map((item, index) => (
          <div className={"container"}>
            <img src={item.image} />
            <div className="text">
              <h2>{item.name}</h2>
              <p>{`${item.age} years`}</p>
            </div>
          </div>
        ))}
        <div className="btn">
          <button onClick={() => setValue([])}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
