import {inputDay10} from "../data/10.js";

const input = [0].concat(inputDay10.sort((a, b) => a - b));
input.push(input[input.length - 1] + 3);

const getDiff = (input) => {
    let newA = [];
    input.map((number, i) => newA.push(number - input[i - 1]));
    return newA;
}
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const countOneJoltDiff = countOccurrences(getDiff(input), 1);
const countThreeJoltDiff = countOccurrences(getDiff(input), 3);

function getArrangements(input) {
    const arrangements = { 0: 1 };
    input.map((number, i) => {
        const curr = input[i];
        for (let j = 0; j < 3; j++) {
            const next = input[i + 1 + j];
            if (next - curr <= 3) {
                arrangements[next] = (arrangements[next] || 0) + arrangements[curr];
            }
        }
    })
    return arrangements[input[input.length - 1]]
}


export const resultDay10Part1 = countOneJoltDiff * countThreeJoltDiff;
export const resultDay10Part2 = getArrangements(input);
