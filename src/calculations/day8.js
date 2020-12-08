import {inputDay8} from "../data/8.js";

const inputToMap = (input) => {
    return input.map((line) => {
        const map = {};
        const [instruction, value] = line.split(" ");
        return Object.assign(map, {instruction, value})
    });
}

const accValue = (map) => {
    let accumulator = 0;
    let currentIndex = 0;
    let beenThere = [];

    while (!beenThere.includes(currentIndex)) {
        beenThere.push(currentIndex);
        if (map[currentIndex] === undefined) {
            return {accumulator, currentIndex};
        }
        const {instruction, value} = map[currentIndex];
        switch (instruction) {
            case "acc":
                accumulator += +value;
                currentIndex += 1;
                break;

            case "jmp":
                currentIndex += +value;
                break;

            default:
                currentIndex++;
                break;
        }
    }
    return {accumulator, currentIndex};
}

const bootFix = (map) => {
    let accumulator = 0;
    map.map(({instruction, value}, index) => {
        if (instruction === 'acc') {
            return index;
        }
        if (['nop', 'jmp'].includes(instruction)) {
            let modifiedMap = [...map];
            modifiedMap.splice(index, 1, {instruction: `${instruction === 'nop' ? 'jmp' : 'nop'}`, value});
            let testModifiedMap = accValue(modifiedMap);
            if (testModifiedMap.currentIndex === modifiedMap.length) {
                accumulator = testModifiedMap.accumulator
                return accumulator
            }
        }
    })
    return accumulator
}

export const resultDay8Part1 = accValue(inputToMap(inputDay8)).accumulator;

export const resultDay8Part2 = bootFix(inputToMap(inputDay8));
