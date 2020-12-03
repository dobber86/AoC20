import { inputDay2 } from "../data/2";

export const resultDay2Part1 = () => {
    let counter = 0;
    inputDay2.map((row) => {
        const sRow = row.split(/[\s,\-:]+/g);
        const min = Number(sRow[0]);
        const max = Number(sRow[1]);
        const letter = sRow[2];
        const password = sRow[3];
        const letterCount = (password.match(new RegExp(letter, "g")) || []).length;
        if (letterCount >= min && letterCount <= max) {counter++}
        return counter
    })
return counter;
}

export const resultDay2Part2 = () => {
    let counter = 0;
    inputDay2.map((row) => {
        const sRow = row.split(/[\s,\-:]+/g);
        const password = sRow[3];
        const letter = sRow[2];
        const letterPos1 = password.charAt(Number(sRow[0]) - 1);
        const letterPos2 = password.charAt(Number(sRow[1]) - 1);
        if ((letter === letterPos1 || letter === letterPos2) && letterPos1 !== letterPos2) {
            counter++
        }
        return counter
    })
return counter;
}

