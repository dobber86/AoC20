import {inputDay9} from "../data/9.js";
import {inputDay9Test} from "../data/9test.js";

const getInput = (input) => {
    const preambleLength = 5;
    const numbers = input.slice(preambleLength)

    const sum = input.slice(0 , preambleLength).reduce(function(a, b){
        return a + b;
    }, 0);

    console.log({sum})
}

export const resultDay9Part1 = getInput(inputDay9Test);

export const resultDay9Part2 = "not yet";
