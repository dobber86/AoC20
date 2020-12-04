import {inputDay4} from "../data/4.js";

const getCompletePassports = () => {
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
    return allPassports.filter((passport) => {
        return required.every(item => passport.hasOwnProperty(item))
    });
}
export const resultDay4Part1 = getCompletePassports().length;

export const resultDay4Part2 = () => {
    const numberValidation = (number, lowest, highest) => {
        return !(isNaN(number) || number < lowest || number > highest);
    }
    const numberCountValidation = (number, required) => {
        return !(isNaN(number) || (number.toString().length !== required));
    }
    const heightValidation = (height) => {
        if ( height.includes("cm")) {
            return numberValidation(Number(height.replace("cm", "")), 150, 193)
        }
        if ( height.includes("in")) {
            return numberValidation(Number(height.replace("in", "")), 59, 76)
        }
        return false
    }
    const hclValidation = (color) => {
        return (/^#[0-9A-F]{6}$/i.test(color))
    }
    const eclValidation = (color) => {
        return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(color);
    }
    return getCompletePassports().filter((passport) => {
        return numberValidation(passport.byr, 1920, 2002)
            && numberValidation(passport.iyr, 2010, 2020)
            && numberValidation(passport.eyr, 2020, 2030)
            && heightValidation(passport.hgt)
            && hclValidation(passport.hcl)
            && eclValidation(passport.ecl)
            && numberCountValidation(passport.pid, 9);
    }).length;
}
