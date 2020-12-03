import {inputDay1} from "../data/1";

export const resultDay1Part1 = () => {
    const sumArray = inputDay1.map((numberOne) => inputDay1.filter((numberTwo) => ((numberOne + numberTwo) === 2020)))
    const filteredArray = sumArray.filter((v) => v.length > 0);
    const result = [].concat(filteredArray[0], filteredArray[1]).reduce((a, b) => a * b);
    return result;
};

export const resultDay1Part2 = () => {
    const sumArray = inputDay1.map((numberOne) => inputDay1.map((numberTwo) => inputDay1.filter((numberThree) => ((numberOne + numberTwo + numberThree) === 2020))))
    const filteredArray = sumArray.filter((v) => v.filter((w) => w.length > 0).length > 0);
    const filteredArray2 = filteredArray.map((v) => v.filter((w) => w.length > 0));
    const concat1 = [].concat(filteredArray2[0], filteredArray2[1], filteredArray2[2]);
    const result = [].concat.apply([],concat1).filter((value, index, self) => self.indexOf(value) === index).reduce((a, b) => a * b);
    return result;
};