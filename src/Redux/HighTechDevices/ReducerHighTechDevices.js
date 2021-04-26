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
                computer: state.computer - action.payload
            }

        case BUY_CONSOLE:
            return {
                ...state,
                console: state.console - action.payload
            }

        case BUY_TV:
            return {
                ...state,
                tv: state.tv - action.payload
            }
        default:
            return state
    }
}

export default hightTechDevicesReducer;