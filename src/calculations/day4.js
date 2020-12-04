import {inputDay4} from "../data/4.js";

export const resultDay4Part1 = () => {
    let allPassports = [];
    let passport = {};
    inputDay4.map((row, index) => {
        if (row !== "") {
            const fields = row
                .split(" ")
                .map((field) => {
                    const keyValue = field.split(":");
                    return Object.assign(passport, {[keyValue[0]]: keyValue[1]});
                });
            if (index + 1 === inputDay4.length) {
                allPassports.push(passport);
            }
            return fields;
        }
        allPassports.push(passport);
        passport = {};
        return allPassports;
    });
    const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    const validPassports = allPassports.filter((passport) => {
        return required.every(item => passport.hasOwnProperty(item))
    });
    return validPassports.length;
}

export const resultDay4Part2 = () => {
    return "not yet";
}
