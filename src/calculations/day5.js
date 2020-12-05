import {inputDay5} from "../data/5.js";

const tickets = inputDay5.map((pass) => {
    const row = parseInt(
        pass.slice(0, 7).replaceAll("F", "0")
            .replaceAll("B", "1"), 2
    );
    const column = parseInt(
        pass.slice(7, 10).replaceAll("L", "0")
            .replaceAll("R", "1"), 2
    );
    return row * 8 + column;
})

export const resultDay5Part1 = Math.max(...tickets);

export const resultDay5Part2 = () => {
    const maxTickets = Array( 1024 - 16).fill().map((_, idx) => 8 + idx);
    const missingTickets = maxTickets.filter((ticket) => !tickets.includes(ticket));
    return missingTickets.filter((ticket) => !missingTickets.includes(ticket - 1) && !missingTickets.includes(ticket + 1));
}
