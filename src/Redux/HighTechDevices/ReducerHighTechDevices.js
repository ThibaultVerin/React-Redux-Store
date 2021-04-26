import { BUY_COMPUTER, BUY_CONSOLE, BUY_TV } from './type';

const highTechState = {
    tv: 45,
    console: 36,
    computer: 25
}

const hightTechDevicesReducer = (state = highTechState, action) => {

    switch (action.type) {
        case BUY_COMPUTER:
            return {
                ...state,
                computer: state.computer - 1
            }

        case BUY_CONSOLE:
            return {
                ...state,
                console: state.console - 1
            }

        case BUY_TV:
            return {
                ...state,
                tv: state.tv - 1
            }
        default:
            return state
    }
}

export default hightTechDevicesReducer;