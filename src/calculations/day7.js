import {inputDay7} from "../data/7.js";

const inputToMap = (input) => {
    return input.reduce((map, line) => {
        const [left, right] = line.split(' contain ');
        const bag = left.split(' ').slice(0, 2).join(' ');
        if (right === 'no other bags.') {
            map[bag] = {};
        } else {
            map[bag] = right.split(', ').reduce((innerMap, rule) => {
                const split = rule.split(' ');
                const innerBag = split.slice(1, 3).join(' ');
                innerMap[innerBag] = +split[0];
                return innerMap;
            }, {});
        }
        return map;
    }, {});
}

const hasBag = (map, outerBag, innerBag) => {
    if (map[outerBag][innerBag]) {
        return true;
    }
    return Object.keys(map[outerBag]).reduce((acc, key) => {
        return acc || hasBag(map, key, innerBag);
    }, false);
}

function numBags(map, bag) {
    return Object.keys(map[bag]).reduce((acc, key) => {
        return acc + map[bag][key] * (1 + numBags(map, key));
    }, 0);
}

const containsShinyGold = (input) => {
    const map = inputToMap(input);
    return Object.keys(map).reduce((count, key) => {
        return count + hasBag(map, key, 'shiny gold');
    }, 0);
}

const insideShinyGold = (input) => {
    const map = inputToMap(input);
    return numBags(map, 'shiny gold');
}

export const resultDay7Part1 = containsShinyGold(inputDay7);

export const resultDay7Part2= insideShinyGold(inputDay7);
