import {inputDay10} from "../data/10.js";

const input = [0].concat(inputDay10.sort((a, b) => a - b));
input.push(input[input.length - 1] + 3);

const getDiff = (input) => {
    let newA = [];
    for (let i = 1; i < input.length; i++)  newA.push(input[i] - input[i - 1])
    return newA;
}

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

const countOneJoltDiff = countOccurrences(getDiff(input), 1);
const countThreeJoltDiff = countOccurrences(getDiff(input), 3);
export const resultDay10Part1 = countOneJoltDiff * countThreeJoltDiff;
export const resultDay10Part2 = "";
