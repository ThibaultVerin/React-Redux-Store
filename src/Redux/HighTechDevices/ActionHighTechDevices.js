import { BUY_COMPUTER, BUY_CONSOLE, BUY_TV } from './type';

export const buyComputer = (totalAmountComputer) => {
    return {
        type: BUY_COMPUTER,
        payload: totalAmountComputer
    }
}

export const buyTv = (totalAmountTv) => {
    return {
        type: BUY_TV,
        payload: totalAmountTv
    }
}

export const buyConsole = (totalAmountConsole) => {
    return {
        type: BUY_CONSOLE,
        payload: totalAmountConsole
    }
}