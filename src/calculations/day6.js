import {inputDay6} from "../data/6.js";

const countUniqueChars = (str1) => {
    let str = str1.split("");
    let uniql = [];
    str.map((letter, index) => {
            if (!uniql.includes(letter)) {
                uniql.push(letter);
            }
        }
    )
    return uniql
}

const allGroups = (input) => {
    let allGroups = [];
    let group = "";
    let groupSize = 0;
    input.map((row, index) => {
        if (row !== "") {
            groupSize++;
            group = group.concat(row)
            if (index + 1 === input.length) {
                allGroups.push({group, groupSize});
            }
            return group;
        }
        allGroups.push({group, groupSize});
        groupSize = 0;
        group = "";
        return allGroups;
    })
    return allGroups;
}

const sumYesGroups = (input) => {
    const groups = allGroups(input);
    let sumYes = 0;
    groups.map(({group}) => {
        const uniqueAnswers = countUniqueChars(group).length
        return sumYes += uniqueAnswers;
    })
    return sumYes
}

const sumEveryoneYes = (input) => {
    const groups = allGroups(input);
    let sumEveryoneYes = 0;
    groups.map(({ group, groupSize }) => {
        const uniqueAnswers = countUniqueChars(group);
        let groupEveryoneYes = 0
        uniqueAnswers.map( (letter) => {
            const count = (group.match(new RegExp(letter, "g")) || []).length;
            return count === groupSize ? groupEveryoneYes++ : 0;
        })
        sumEveryoneYes += groupEveryoneYes;
        groupEveryoneYes = 0
        return groupEveryoneYes;
    })
    return sumEveryoneYes;
}

export const resultDay6Part1 = sumYesGroups(inputDay6);

export const resultDay6Part2 = sumEveryoneYes(inputDay6);