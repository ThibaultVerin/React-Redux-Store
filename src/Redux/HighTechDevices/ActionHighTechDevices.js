import { BUY_COMPUTER, BUY_CONSOLE, BUY_TV } from './type';

export const buyComputer = (totalAmountComputer) => {
    return {
        type: BUY_COMPUTER,
        payload: totalAmountComputer
    }
}

export const buyTv = (totalAmountComputer) => {
    return {
        type: BUY_TV,
        payload: totalAmountComputer
    }
}

export const buyConsole = (totalAmountComputer) => {
    return {
        type: BUY_CONSOLE,
        payload: totalAmountComputer
    }
}