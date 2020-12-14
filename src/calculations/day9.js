import {inputDay9} from "../data/9.js";
// import {inputDay9Test} from "../data/9test.js";

const input = inputDay9
// const input = inputDay9Test

// const preambleLength = 5;
const preambleLength = 25;

const getInvalidNumber = (input) => {
    let currPreamble = [];
    let check;
    let invalidNumber = 0;

    for (let x = 0; x < input.length; x++) {
        let currNum = input[x];
        if (x >= preambleLength) {
            for (let y = 0; y < preambleLength; y++) {
                for (let z = 0; z < preambleLength; z++) {
                    check = (currPreamble[y] + currPreamble[z]) === currNum;
                    if (check) {
                        break;
                    }
                }
                if (check) {
                    break;
                }
            }
            if (check === false) {
                invalidNumber = currNum;
                break;
            }
            currPreamble.shift();
        }
        currPreamble.push(currNum);
    }
    return invalidNumber;
}

const findSet = (input, invalid) => {
    for (let x = 0; x < input.length - 1; x++) {
        const a = input[x]
        const set = [a]
        let sum = a
        for (let y = x + 1; y < input.length; y++) {
            const b = input[y]
            sum += b
            set.push(b)
            if (sum === invalid) return set
            if (sum > invalid) break
        }
    }
}


export const resultDay9Part1 = getInvalidNumber(input);

const set = findSet(input, getInvalidNumber(input))

export const resultDay9Part2 = Math.min(...set) + Math.max(...set);
