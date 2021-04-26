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
                phone: state.phone - action.payload
            }

        case BUY_TABLET:
            return {
                ...state,
                tablet: state.tablet - action.payload
            }

        default:
            return state
    }
}

export default smallDeviceReducer;