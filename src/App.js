import './App.css';
import {resultDay1Part1, resultDay1Part2} from "./calculations/day1";
import {resultDay2Part1, resultDay2Part2} from "./calculations/day2";
import React from "react";

const App = () => {
    resultDay1Part1();
    resultDay1Part2();
    resultDay2Part1();
    resultDay2Part2();
  return (
    <div className="App">
         <div>
        </div>
    </div>
  );
}

export default App;
