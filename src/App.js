import './App.css';
import {resultDay1Part1, resultDay1Part2} from "./calculations/day1";
import {resultDay2Part1, resultDay2Part2} from "./calculations/day2";
import {resultDay3Part1, resultDay3Part2} from "./calculations/day3";
import React from "react";

const App = () => {
  return (
    <div className="App">
         <div>
             Dag 1: {resultDay1Part1()} en {resultDay1Part2()}
        </div>
         <div>
             Dag 2: {resultDay2Part1()} en {resultDay2Part2()}
        </div>
         <div>
             Dag 3: {resultDay3Part1()} en {resultDay3Part2()}
        </div>
    </div>
  );
}

export default App;
