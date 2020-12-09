import React from "react";
import './App.css';
import {resultDay1Part1, resultDay1Part2} from "./calculations/day1";
import {resultDay2Part1, resultDay2Part2} from "./calculations/day2";
import {resultDay3Part1, resultDay3Part2} from "./calculations/day3";
import {resultDay4Part1, resultDay4Part2} from "./calculations/day4";
import {resultDay5Part1, resultDay5Part2} from "./calculations/day5";
import {resultDay6Part1, resultDay6Part2} from "./calculations/day6";
import {resultDay7Part1, resultDay7Part2} from "./calculations/day7";
import {resultDay8Part1, resultDay8Part2} from "./calculations/day8";
import {resultDay9Part1, resultDay9Part2} from "./calculations/day9";

const App = () => {
    const results = [
        {day: 1, part1: resultDay1Part1(), part2: resultDay1Part2()},
        {day: 2, part1: resultDay2Part1(), part2: resultDay2Part2()},
        {day: 3, part1: resultDay3Part1(), part2: resultDay3Part2()},
        {day: 4, part1: resultDay4Part1, part2: resultDay4Part2()},
        {day: 5, part1: resultDay5Part1, part2: resultDay5Part2()},
        {day: 6, part1: resultDay6Part1, part2: resultDay6Part2},
        {day: 7, part1: resultDay7Part1, part2: resultDay7Part2},
        {day: 8, part1: resultDay8Part1, part2: resultDay8Part2},
        {day: 9, part1: resultDay9Part1, part2: resultDay9Part2},
    ]
    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://adventofcode.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Advent of Code 2020
                </a>
                <p>dobber86 answers</p>
            </header>
            <div className="tableWrapper">
                <table className="table">
                    <tbody>
                    {results.map(({day, part1, part2}) => {
                        return (
                            <tr key={day}>
                                <td>Dag {day}:</td>
                                <td>{part1}</td>
                                <td>en</td>
                                <td>{part2}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
