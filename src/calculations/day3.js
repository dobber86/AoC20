import {inputDay3} from "../data/3.js";

export const resultDay3Part1 = () => {
    const rowLength = inputDay3[0].length;
    let x = 0;
    let path = "";
    const step = 3;
    inputDay3.map((row) => {
        path = path.concat(row.charAt(x));
        x += step
        if (x >= rowLength) {
            x -= rowLength
        }
        return x;
    });
    return (path.match(new RegExp("#", "g")) || []).length;
}

export const resultDay3Part2 = () => {
    const slopes = [
        {right: 1, down: 1},
        {right: 3, down: 1},
        {right: 5, down: 1},
        {right: 7, down: 1},
        {right: 1, down: 2}
    ];
    const rowLength = inputDay3[0].length;
    let multipliedTrees = 1;
    slopes.map(({right, down}) => {
        let x = 0;
        let path = "";
        inputDay3.filter((row, i) => i % down === 0).map((row) => {
            path = path.concat(row.charAt(x));
            x += right
            if (x >= rowLength) {
                x -= rowLength
            }
            return x;
        });
        return multipliedTrees *= (path.match(new RegExp("#", "g")) || []).length;
    });
    return multipliedTrees;
}
