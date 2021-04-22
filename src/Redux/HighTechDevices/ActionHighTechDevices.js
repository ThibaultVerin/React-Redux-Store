import { BUY_COMPUTER, BUY_CONSOLE, BUY_TV } from './type';

export const buyComputer = () => {
    return {
        type: BUY_COMPUTER,
    }
}

export const buyTv = () => {
    return {
        type: BUY_TV,
    }
}

export const buyConsole = () => {
    return {
        type: BUY_CONSOLE,
    }
}