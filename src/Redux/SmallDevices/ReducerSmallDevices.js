import { BUY_PHONE, BUY_TABLET } from './type';

const smallDevicesState = {
    phone: 12,
    tablet: 9
}

const smallDeviceReducer = (state = smallDevicesState, action) => {

    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state,
                phone: state.phone - 1
            }

        case BUY_TABLET:
            return {
                ...state,
                tablet: state.tablet - 1
            }

        default:
            return state
    }
}

export default smallDeviceReducer;